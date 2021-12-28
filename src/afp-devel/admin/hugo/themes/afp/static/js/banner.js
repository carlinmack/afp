document.addEventListener('DOMContentLoaded', () => {
    banner();
    menuLink();
    displayMessages();
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
    if (cookieExists('message')) {
        const content = document.querySelector('.content');
        if (content) {
            content.insertAdjacentText('beforeend', getCookie('message'));
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
        document.querySelector('a[href="/login/"').textContent = 'Profile';
        document.querySelector('a[href="/login/"').href = '/account/';
    }
}

function cookieExists(key) {
    if (document.cookie.split(';').some((item) => item.trim().startsWith(key + '='))) {
        return true;
    }
    return false;
}

function getCookie(key) {
    return decodeURI(
        document.cookie
            .split('; ')
            .find((row) => row.startsWith(key + '='))
            .split('=')[1]
    );
}
