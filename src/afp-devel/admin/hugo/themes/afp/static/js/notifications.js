document.addEventListener('DOMContentLoaded', () => {
    if (cookieExists('authenticated')) {
        fetch('/api/auth/notifications')
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                if (data.authenticated) {
                    var unread = [];
                    var read = [];
                    for (var notification of data['notifications']) {
                        if (notification['seen']) {
                            read.unshift(notificationElement(notification));
                        } else {
                            unread.unshift(notificationElement(notification));
                        }
                    }
                    const main = document.querySelector('main');
                    if (main) {
                        if (unread.length > 0) {
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
                    window.location.replace('/login');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                window.location.replace('/login');
            });
    }
});

function header(str) {
    const title = document.createElement('h3');
    title.textContent = str;
    return title;
}

function notificationElement(notification) {
    const article = document.createElement('article');
    article.className = 'entry';

    const title = document.createElement('h5');
    const link = document.createElement('a');
    link.className = 'title';
    link.href = notification['link'];
    link.textContent = notification['message'];

    const date = document.createElement('time');
    date.className = 'date';
    date.textContent = formatDate(new Date(notification['date']));
    date.dateTime = notification['date'];
    date.title = notification['date'];

    title.appendChild(link);
    article.appendChild(title);
    article.appendChild(date);
    return article;
}

function formatDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
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
