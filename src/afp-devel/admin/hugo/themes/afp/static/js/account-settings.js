document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/auth/logged-in')
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            if (data.authenticated) {
                let title = data.db.name;
                document.querySelector('input[name="name"]').value = title;
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
