document.addEventListener('DOMContentLoaded', () => {
    if (cookieExists('authenticated')) {
        fetch('/api/notifications')
            .then((r) => {
                if (r.status == 503) {
                    makeFlash('error', 'Error: API is unavailable');
                    throw new Error('Failed with HTTP code ' + r.status);
                }
                return r.json();
            })
            .then((data) => {
                console.log(data);
                if (data.authenticated) {
                    var unread = [];
                    var read = [];
                    if (data['notifications'].length > 0) {
                        for (var notification of data['notifications']) {
                            if (notification['seen']) {
                                read.unshift(notificationElement(notification, false));
                            } else {
                                unread.unshift(notificationElement(notification, true));
                            }
                        }
                    } else {
                        read = [noNotifications()];
                    }
                    const main = document.querySelector('main');
                    if (main) {
                        if (unread.length > 0) {
                            if (unread.length > 1) {
                                main.appendChild(allReadButton(unread));
                            }
                            main.appendChild(header('Unread'));
                            for (var el of unread) {
                                main.appendChild(el);
                            }

                            if (read.length > 0) {
                                main.appendChild(header('Read'));
                            }
                        }
                        for (var el of read) {
                            main.appendChild(el);
                        }
                    }
                } else {
                    pleaseLogin();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } else {
        pleaseLogin();
    }
});

function pleaseLogin() {
    document.cookie = 'warnMessage=Log in to view this page;MaxAge=5000;path=/';
    window.location.replace('/login/?next=' + window.location.pathname);
}

function header(str) {
    const title = document.createElement('h3');
    title.textContent = str;
    return title;
}

function allReadButton(notifications) {
    const readButton = document.createElement('button');
    readButton.type = 'button';
    readButton.style = 'float:right;';
    readButton.textContent = 'Mark all read';
    var unread = notifications.map((x) => x.dataset.id);
    readButton.addEventListener('click', function () {
        markRead(unread);
    });
    return readButton;
}

function notificationElement(notification, unread) {
    const article = document.createElement('article');
    article.className = 'entry';
    article.dataset.id = notification['rowid'];

    const titleDiv = document.createElement("div")
    const title = document.createElement('h5');
    const link = document.createElement('a');
    link.className = 'title';
    link.href = notification['link'];
    link.textContent = notification['message'];
    title.appendChild(link);
    titleDiv.appendChild(title)

    const date = document.createElement('time');
    date.className = 'date';
    date.textContent = formatDate(notification['date']);
    date.dateTime = notification['date'];
    date.title = notification['date'];

    if (unread) {
        const readButton = document.createElement('button');
        readButton.type = 'button';
        readButton.style =
            'width: 1.5rem;height: 1.5rem;padding: 3px;margin-left: 1rem;';
        const readImage = document.createElement('img');
        readImage.src = '/images/tick.svg';
        readImage.alt = 'Mark as read';
        readButton.appendChild(readImage);
        readButton.addEventListener('click', () => {
            markRead([notification['rowid'].toString()]);
        });
        title.appendChild(readButton);
    }

    const br = document.createElement("br")
    const text = document.createElement("p")
    text.textContent = notification["text"];
    text.style = 'margin-left:1rem';
    titleDiv.appendChild(br);
    titleDiv.appendChild(text);

    article.appendChild(titleDiv);
    article.appendChild(date);
    return article;
}

function noNotifications() {
    const article = document.createElement('article');
    article.className = 'entry';

    const title = document.createElement('h5');
    const link = document.createElement('i');
    link.className = 'title';
    link.textContent = "No notifications";
    title.appendChild(link);

    article.appendChild(title);
    return article;
}

function markRead(data) {
    fetch('/api/notifications/read', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rows: data }),
    })
        .then((r) => {
            if (r.status == 503) {
                makeFlash('error', 'Error: API is unavailable');
                throw new Error('Failed with HTTP code ' + r.status);
            }
            return r.json();
        })
        .then((data) => {
            if ('error' in data) {
                console.error('Error:', data['error']);
            } else {
                location.reload();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function formatDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    var relDelta = Math.round((+new Date() - date) / 1000);

    var minute = 60;
    var hour = minute * 60;
    var day = hour * 24;

    var relTime;

    if (relDelta < minute) {
        relTime = relDelta + ' seconds ago';
    } else if (relDelta < 2 * minute) {
        relTime = 'a minute ago';
    } else if (relDelta < hour) {
        relTime = Math.floor(relDelta / minute) + ' minutes ago';
    } else if (Math.floor(relDelta / hour) == 1) {
        relTime = '1 hour ago';
    } else if (relDelta < day) {
        relTime = Math.floor(relDelta / hour) + ' hours ago';
    } else if (relDelta < day * 2) {
        relTime = 'yesterday';
    } else if (relDelta < day * 7) {
        relTime = Math.floor(relDelta / day) + ' days ago';
    } else {
        relTime = date.getDate() + ' ' + months[date.getMonth()];
    }

    return relTime;
}

function cookieExists(key) {
    if (document.cookie.split(';').some((item) => item.trim().startsWith(key + '='))) {
        return true;
    }
    return false;
}
