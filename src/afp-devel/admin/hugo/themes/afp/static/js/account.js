document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/auth/logged-in')
        .then(r => r.json())
        .then(data => {
            console.log(data);
            document.getElementById('details').innerHTML = JSON.stringify(data.user);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
