document.addEventListener('DOMContentLoaded', () => {
    banner();
    menuLink();
    displayMessages();
    unreadNotifications();
});

function banner() {
    if (localStorageTest() === true) {
        const banner = document.getElementById('banner');
        if (banner) {
            const bannerID = banner.getAttribute('data-id');
            if (localStorage.getItem('banner-' + bannerID) === 'true') {
                banner.style = 'display: none';
            }

            const close = document.getElementById('close');
            if (close) {
                // show the close button if we have JS and local storage access
                close.style = '';

                close.addEventListener('click', () => {
                    banner.style = 'display: none';
                    localStorage.setItem('banner-' + bannerID, 'true');
                });
            }
        }
    }
}

function displayMessages() {
    var types = [
        ['warnMessage', 'warn'],
        ['successMessage', 'success'],
    ];
    for (let [cookie, className] of types) {
        if (cookieExists(cookie)) {
            const content = document.querySelector('.content');
            if (content) {
                var flash =
                    '<div class="' +
                    className +
                    '" data-id="0"><p>' +
                    getCookie(cookie);
                flash += '</p></div>';
                content.insertAdjacentHTML('beforeend', flash);

                clearCookie(cookie);
            }
        }
    }
}

function localStorageTest() {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('test', 'yes');
        if (localStorage.getItem('test') === 'yes') {
            localStorage.removeItem('test');
            return true;
        }
    }
    return false;
}

function menuLink() {
    if (cookieExists('authenticated')) {
        const login = document.querySelector('a[href="/login/"]');
        if (login) {
            login.textContent = 'Profile';
            login.href = '/account/';
            login.insertAdjacentHTML(
                'afterEnd',
                "<a id='bell' href='/notifications'><img src='/images/bell.svg' alt='Notifications' /></a>"
            );
        }
    }
}

function unreadNotifications() {
    if (cookieExists('authenticated')) {
        hasComments()
    }
}

function hasComments() {
    fetch('/api/notifications/unread')
        .then((r) => r.json())
        .then((data) => {
            console.log(data)
            if (data.unread) {
                addUnreadCounter(unread);
            } else {
                // check every couple seconds what most recent comment is
            }
        });
}

function checkUnread() {
    fetch('/api/notifications')
        .then((r) => r.json())
        .then((data) => {
            if (data.authenticated) {
                var unread = 0;
                if (data['notifications'].length > 0) {
                    for (var notification of data['notifications']) {
                        if (!notification['seen']) {
                            unread += 1;
                        }
                    }
                    addUnreadCounter(unread);
                }
            }
        });
}

function addUnreadCounter(unread) {
    const pEl = document.createElement("p")
    pEl.textContent = unread
    pEl.id = "number";
    const bell = document.getElementById("bell")
    if (bell) {
        bell.insertAdjacentElement("beforeend", pEl)
    }
}

function cookieExists(key) {
    if (document.cookie.split(';').some((item) => item.trim().startsWith(key + '='))) {
        return true;
    }
    return false;
}

function getCookie(key) {
    return decodeURIComponent(
        document.cookie
            .split('; ')
            .find((row) => row.startsWith(key + '='))
            .split('=')[1]
    );
}

function clearCookie(key) {
    if (cookieExists(key)) {
        document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
        return true;
    }
    return false;
}
