document.addEventListener('DOMContentLoaded', () => {
    if (cookieExists('authenticated')) {
        addPinButtons();
        movePinnedTopics();
    } else {
        // intentionally blank
    }
});

const functionHandlers = {};

function addPinButtons() {
    const headings = document.querySelectorAll('h3');
    for (let heading of headings) {
        const pinButton = document.createElement('button')
        pinButton.classList = 'small-button'
        const pinImage = document.createElement('img');
        pinImage.src = '/images/pin-45.svg';
        pinImage.alt = 'Pin topic';
        pinImage.style = 'filter: opacity(0.5)';
        pinButton.appendChild(pinImage);
        pinButton.addEventListener('click',
            functionHandlers[heading.id] = () => {
                pinTopic(heading.id);
            }
        );
        heading.insertAdjacentElement('beforeend', pinButton);
    }
}

function pinTopic(topic) {
    fetch('/api/topics/pin', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: topic }),
    })
        .then((r) => {
            if (r.status == 503) {
                makeFlash('error', 'Error: API is unavailable');
                throw new Error('Failed with HTTP code ' + r.status);
            }
            return r.json();
        })
        .then((data) => {
            if ('error' in data) {
                console.error('Error:', data['error']);
            } else {
                location.reload();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function unpinTopic(topic) {
    fetch('/api/topics/unpin', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: topic }),
    })
        .then((r) => {
            if (r.status == 503) {
                makeFlash('error', 'Error: API is unavailable');
                throw new Error('Failed with HTTP code ' + r.status);
            }
            return r.json();
        })
        .then((data) => {
            if ('error' in data) {
                console.error('Error:', data['error']);
            } else {
                location.reload();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function movePinnedTopics() {
    fetch('/api/topics/user')
        .then((r) => {
            if (r.status == 503) {
                makeFlash('error', 'Error: API is unavailable');
                throw new Error('Failed with HTTP code ' + r.status);
            }
            return r.json();
        })
        .then((data) => {
            console.log(data);
            if (data.authenticated && data['topics'].length) {
                const pinned = document.getElementById('pinned');
                const titleElement = document.createElement('h2');
                titleElement.textContent = 'Pinned topics';
                pinned.appendChild(titleElement);

                for (let topic of data['topics']) {
                    let topicName = topic['topic'];
                    let heading = document.getElementById(topicName);
                    if (heading) {
                        let topicContainer = heading.parentElement;
                        const h2Name = topicContainer.parentElement.querySelector('h2');
                        heading.firstChild.data =
                            h2Name.textContent + ' / ' + heading.firstChild.data;

                        let pin = heading.querySelectorAll("button")[0];
                        pin.removeEventListener('click',
                            functionHandlers[heading.id]
                        );
                        pin.addEventListener('click', 
                            functionHandlers[heading.id] = () => {
                                unpinTopic(heading.id);
                            }
                        );
                        pin.firstChild.src = '/images/unpin.svg';

                        pinned.appendChild(topicContainer);
                    }
                }
            } else {
                // intentionally blank
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function cookieExists(key) {
    if (document.cookie.split(';').some((item) => item.trim().startsWith(key + '='))) {
        return true;
    }
    return false;
}
