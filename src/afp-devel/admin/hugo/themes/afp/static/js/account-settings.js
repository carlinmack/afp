document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/auth/logged-in')
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            if (data.authenticated) {
                let title = data.db.name;
                document.querySelector('input[name="name"]').value = title;
            } else {
                window.location.replace('/login');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            window.location.replace('/login');
        });
});
