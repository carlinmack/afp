document.addEventListener('DOMContentLoaded', () => {
    var username = param('user');
    if (username) {
        fetch('/api/auth/getUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: username }),
        })
            .then((response) => response.json())
            .then((data) => {
                let title = data.name;

                title = title
                    .split(' ')
                    .map((x) => x.replace(/([A-Z])/, "<span class='first'>$1</span>"))
                    .join(' ');
                const titleEl = document.querySelector('h1');
                if (titleEl) {
                    titleEl.innerHTML = title;
                    if (data.image) {
                        let picture = document.createElement('img');
                        picture.src = '/images/user/' + data.image;
                        titleEl.insertAdjacentElement('afterend', picture);
                    }
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } else {
        fetch('/api/auth/logged-in')
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                if (data.authenticated) {
                    let title = data.db.name;

                    title = title
                        .split(' ')
                        .map((x) =>
                            x.replace(/([A-Z])/, "<span class='first'>$1</span>")
                        )
                        .join(' ');
                    const titleEl = document.querySelector('h1');
                    if (titleEl) {
                        titleEl.innerHTML = title;
                        if (data.db.image) {
                            let picture = document.createElement('img');
                            picture.src = '/images/user/' + data.db.image;
                            titleEl.insertAdjacentElement('afterend', picture);
                        }
                    }
                } else {
                    pleaseLogin();
                }
            })
            .catch(() => {
                pleaseLogin();
            });
    }
});

function pleaseLogin() {
    document.cookie = 'warnMessage=Log in to view this page;MaxAge=5000;path=/';
    window.location.replace('/login/?next=' + window.location.pathname);
}

function param(name) {
    return decodeURIComponent(
        (location.search.split(name + '=')[1] || '').split('&')[0]
    ).replace(/\+/g, ' ');
}