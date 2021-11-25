document.addEventListener('DOMContentLoaded', function () {
    let entries = [...document.querySelectorAll('.title')].map((x) => x.pathname);
    if (entries.length > 0) {
        const data = { entries: entries };

        fetch('/api/pageviews', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);

                const totalViews = sumValues(data)
                let elem = document.querySelector("header>div");
                if (elem) {
                    elem.insertAdjacentHTML("beforeend", totalViews + " entry views")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
});

const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
