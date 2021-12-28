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
                window.location.replace('/login');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            window.location.replace('/login');
        });
});
