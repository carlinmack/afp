document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/auth/signed-in')
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
                let title = data.db.name || data.db.username;
                document.querySelector('input[name="name"]').value = title;

                if (data.db.description) {
                    document.querySelector('textarea[name="description"]').value =
                        data.db.description;
                }

                if (data.db.website) {
                    document.querySelector('input[name="website"]').value =
                        data.db.website;
                }

                if (data.db.affiliation) {
                    document.querySelector('input[name="affiliation"]').value =
                        data.db.affiliation;
                }
            } else {
                pleaseLogin();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

function pleaseLogin(msg) {
    if (msg == undefined) {
        msg = '';
    }
    document.cookie =
        'warnMessage=Log in to view this page ' + msg + ';MaxAge=5000;path=/';
    window.location.replace('/login/?next=' + window.location.pathname);
}