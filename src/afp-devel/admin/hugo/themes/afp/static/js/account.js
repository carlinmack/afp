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
                data["username"] = username;
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
            .catch((error) => {
                console.error('Error:', error);
            });
    }
});

function displayProfile(data) {
    console.log(data);
    if ('db' in data) {
        data = data.db;
    }

    var name = data.name || data.username;
    let title = name
        .split(' ')
        .map((x) => x.replace(/([A-Z])/, "<span class='first'>$1</span>"))
        .join(' ');

    const titleElement = document.querySelector('h1');
    if (titleElement) {
        titleElement.innerHTML = title;
    }

    const profileDiv = document.createElement('div');
    profileDiv.id = 'profile';
    if (data.image || data.affiliation) {
        titleElement.insertAdjacentElement('beforebegin', profileDiv);
        profileDiv.appendChild(titleElement);
    }
    if (data.image) {
        let picture = document.createElement('img');
        picture.src = '/images/user/' + data.image;
        picture.id = "profileImage"
        profileDiv.insertAdjacentElement('afterbegin', picture);
    }
    if (data.affiliation) {
        let affiliation = document.createElement('i');
        affiliation.textContent = data.affiliation;
        const subDiv = document.createElement('div');
        profileDiv.appendChild(subDiv);
        subDiv.appendChild(titleElement);
        subDiv.appendChild(affiliation);
    }
    if (data.description && data.description.length > 0) {
        let description = document.createElement('p');
        description.textContent = data.description;
        const headerChildren = document.querySelector('header').children;
        headerChildren[headerChildren.length - 1].insertAdjacentElement(
            'beforebegin',
            description
        );
    }
    if (data.website) {
        let website = document.createElement('a');
        website.textContent = data.website;
        website.href = data.website;
        const headerChildren = document.querySelector('header').children;
        headerChildren[headerChildren.length - 1].appendChild(website);
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

    const editButton = document.createElement('button');
    const editLink = document.createElement('a');
    editLink.text = 'Edit';
    editLink.href = '/account/edit/';
    editButton.appendChild(editLink);
    buttonContainer.appendChild(editButton);
}

function pleaseLogin(point) {
    if (point == undefined) {
        point = '';
    }
    document.cookie =
        'warnMessage=Log in to view this page ' + point + ';MaxAge=5000;path=/';
    window.location.replace('/login/?next=' + window.location.pathname);
}

function param(name) {
    return decodeURIComponent(
        (location.search.split(name + '=')[1] || '').split('&')[0]
    ).replace(/\+/g, ' ');
}
