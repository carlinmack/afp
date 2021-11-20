document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('copyText').innerHTML;
    const filename = document.getElementById('bibtexFileName').innerHTML;
    document.getElementById('copyBibtex').addEventListener('click', () => {
        navigator.clipboard.writeText(content);
    });

    const a = document.getElementById('downloadBibtex');
    var blob = new Blob([content], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    a.setAttribute('href', url);
    a.setAttribute('download', filename + '.bib');

    fetch('/api/auth/logged-in')
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            if (data.authenticated) {
                document.getElementById('isso-thread').classList.remove('notAuth');

                removeAuthInputs(data.db.name, data.db.email);

                const targetNode = document.getElementById('isso-thread');
                const config = { childList: true, subtree: true };

                // Create an observer instance linked to the callback function
                const observer = new MutationObserver(() => {
                    removeAuthInputs(data.db.name, data.db.email);
                });

                // Start observing the target node for configured mutations
                observer.observe(targetNode, config);
            } else {
                loggedOut();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            loggedOut();
        });
});

function removeAuthInputs(name, email) {
    let inputs = document.querySelectorAll('.auth-section .input-wrapper');
    for (let input of inputs) {
        input.classList.add("hidden")
    }
    let names = document.querySelectorAll("input[name='author']");
    let emails = document.querySelectorAll("input[name='email']");
    let websites = document.querySelectorAll("input[name='website']"); // http://localhost/authors/jacques-d.-fleuriot/
    for (let elem of names) {
        elem.value = name;
    }
    for (let elem of emails) {
        elem.value = email;
    }
    for (let elem of websites) {
        elem.value = '';
    }
}

function loggedOut() {
    document.querySelector('.isso-postbox .form-wrapper').innerHTML =
        '<i><a href="/login">Sign in</a> to make a comment</i>';
    let footers = document.querySelectorAll('.isso-comment-footer');
    console.log(footers.length);
    if (footers) {
        for (let footer of footers) {
            footer.innerHTML = '';
        }
    }
    console.log('done');
}
