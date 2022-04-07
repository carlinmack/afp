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
            makeFlash(className, getCookie(cookie))

            clearCookie(cookie);
        }
    }
}

function makeFlash(type, message) {
    const content = document.querySelector('.content');
    if (content) {
        var flash = '<div class="' + type + '"><p>' + message;
        flash += '</p></div>';
        content.insertAdjacentHTML('beforeend', flash);
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
        const mobileNav = document.getElementById('searchIconContainer');
        if (login) {
            login.textContent = 'Profile';
            login.href = '/account/';
            login.insertAdjacentHTML(
                'afterend',
                "<a id='bell' href='/notifications'><img src='/images/bell.svg' alt='Notifications' /></a>"
            );
            mobileNav.insertAdjacentHTML(
                'afterbegin',
                "<a id='bell' href='/notifications'><img src='/images/bell.svg' alt='Notifications' /></a>"
            );
        }
    }
}

function unreadNotifications() {
    if (cookieExists('authenticated')) {
        hasComments();
    }
}

function hasComments() {
    fetch('/api/notifications/unread')
        .then((r) => {
            if (r.status == 503) {
                makeFlash('error', 'Error: API is unavailable');
                throw new Error('Failed with HTTP code ' + r.status);
            }
            return r.json();
        })
        .then((data) => {
            if (data.unread > 0) {
                addUnreadCounter(data.unread);
            } else {
                if (data.totalComments > 0) {
                    checkForUpdates(data.mostRecent);
                }
            }
        });
}

async function checkForUpdates(currentMostRecent) {
    const mostRecentComment = await getMostRecentComment();
    if (mostRecentComment > currentMostRecent) {
        hasComments();
    } else {
        setTimeout(() => {
            checkForUpdates(currentMostRecent);
        }, 1000);
    }
}

function getMostRecentComment() {
    return new Promise((resolve, reject) => {
        fetch('/api/comment/mostRecent')
            .then((r) => {
                if (r.status == 503) {
                    makeFlash('error', 'Error: API is unavailable');
                    throw new Error('Failed with HTTP code ' + r.status);
                }
                return r.json();
            })
            .then((data) => {
                if (data['mostRecent'] > 0) {
                    resolve(data['mostRecent']);
                } else {
                    resolve(-1);
                }
            });
    });
}

function addUnreadCounter(unread) {
    const pEl = document.createElement('p');
    if (unread > 9) {
        unread = '+';
    }
    pEl.textContent = unread;
    pEl.id = 'number';
    const bell = document.getElementById('bell');
    if (bell) {
        bell.insertAdjacentElement('beforeend', pEl);
    }

    document.title = "(" + unread + ") " + document.title;
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
