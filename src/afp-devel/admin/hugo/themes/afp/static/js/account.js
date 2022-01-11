document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/auth/logged-in')
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            if (data.authenticated) {
                let title = data.db.name;
                console.log(title)
                title = title
                    .split(' ')
                    .map((x) => x.replace(/([A-Z])/, "<span class='first'>$1</span>"))
                    .join(' ');
                document.querySelector('h1').innerHTML = title;
            } else {
                pleaseLogin();
            }
        })
        .catch(() => {
            pleaseLogin();
        });
});

function pleaseLogin() {
    document.cookie = 'warnMessage=Log in to view this page;MaxAge=5000;path=/';
    window.location.replace('/login/?next=' + window.location.pathname);
}