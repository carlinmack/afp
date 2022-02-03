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

                var [labels, pageviews, downloads] = destructure(data);
                if (labels.length < 3) {
                    labels.forEach((entry, index) => {
                        document
                            .querySelector("a[href='/entries/" + entry + "/']")
                            .parentElement.querySelector('span')
                            .insertAdjacentHTML(
                                'afterbegin',
                                pageviews[index] + ' Views, '
                            );
                    });
                } else {
                    makeChart(labels, pageviews, downloads);
                }

                const totalViews = sumValues(pageviews);
                let elem = document.querySelector('header>div');
                if (elem) {
                    elem.insertAdjacentHTML('beforeend', totalViews + ' entry views');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
});

const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
const keys = (obj) => [...obj.keys()];
const vals = (obj) => [...obj.values()];
const destructure = (data) => [
    vals(data['entries']),
    vals(data['pageviews']),
    vals(data['downloads']),
];

function makeChart(labels, pageviews, downloads) {
    var ctx = document.getElementById('pageviews');
    if (ctx) {
        ctx.parentElement.classList.remove('hidden');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Downloads',
                        data: downloads,
                        backgroundColor: 'rgb(180, 99, 136)',
                    },
                    {
                        label: 'Views',
                        data: pageviews,
                        backgroundColor: 'rgb(101, 99, 136)',
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: labels.length > 5 ? 'bottom' : 'top',
                    reverse: true,
                    labels: {
                        fontFamily: 'Open Sans',
                    },
                },
                scales: {
                    xAxes: [
                        {
                            stacked: true,
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                display: labels.length > 5 ? false : true,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                callback: (value) => {
                                    return Number.isInteger(value) ? value : null;
                                },
                            },
                            stacked: false,
                        },
                    ],
                },
            },
        });
    }
}
