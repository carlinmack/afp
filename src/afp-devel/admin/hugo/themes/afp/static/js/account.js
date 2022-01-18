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
                displayProfile(data);
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
                    addButtons();
                    displayProfile(data);
                } else {
                    pleaseLogin();
                }
            })
            .catch(() => {
                pleaseLogin();
            });
    }
});

function displayProfile(data) {
    console.log(data);
    if ('db' in data) {
        data = data.db;
    }

    const profileDiv = document.createElement('div');
    profileDiv.id = 'profile';

    const titleElement = document.querySelector('h1');
    if (data.name) {
        let title = data.name
            .split(' ')
            .map((x) => x.replace(/([A-Z])/, "<span class='first'>$1</span>"))
            .join(' ');

        if (titleElement) {
            titleElement.innerHTML = title;
        }
    }
    if (data.image) {
        let picture = document.createElement('img');
        picture.src = '/images/user/' + data.image;
        profileDiv.appendChild(picture);
    }
    if (data.image || data.affiliation) {
        titleElement.insertAdjacentElement('beforebegin', profileDiv);
        profileDiv.appendChild(titleElement);
    }
    if (data.affiliation) {
        let affiliation = document.createElement('i');
        affiliation.textContent = data.affiliation;
        profileDiv.appendChild(affiliation);
    }
    if (data.description) {
        let description = document.createElement('p');
        description.textContent = data.description;
        document
            .querySelector('header')
            .children[1].insertAdjacentElement('afterend', description);
    }

    // Probably instead want to have a image set boolean
    // fetch('/images/user/' + username)
    //     .then((response) => {
    //         if (response.status === 200) {
    //             let picture = document.createElement('img');
    //             picture.src = '/images/user/' + username;
    //             document.body.insertAdjacentElement('afterstart', picture);
    //         }
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
}

function addButtons() {
    const header = document.querySelector('header');
    const buttonContainer = document.createElement('span');
    buttonContainer.id = 'settings';

    const settingsButton = document.createElement('button');
    const settingsLink = document.createElement('a');
    settingsLink.text = 'Settings';
    settingsLink.href = '/account/settings/';
    settingsButton.appendChild(settingsLink);

    const logoutButton = document.createElement('button');
    const logoutLink = document.createElement('a');
    logoutLink.text = 'Log out';
    logoutLink.href = '/api/auth/logout';
    logoutButton.appendChild(logoutLink);

    buttonContainer.appendChild(settingsButton);
    buttonContainer.appendChild(logoutButton);

    header.insertAdjacentElement('afterbegin', buttonContainer);
}

function pleaseLogin() {
    document.cookie = 'warnMessage=Log in to view this page;MaxAge=5000;path=/';
    window.location.replace('/login/?next=' + window.location.pathname);
}

function param(name) {
    return decodeURIComponent(
        (location.search.split(name + '=')[1] || '').split('&')[0]
    ).replace(/\+/g, ' ');
}
