(function() {
    let form = document.getElementById('login');

    addEvent(form, 'submit', function(e) {
        e.preventDefault();
        let elements = this.elements;
        let username = elements.username.value;
        let msg = 'Welcome ' + username + '!';
        let main = document.getElementById('main')
        main.textContent = msg;
        main.style.fontSize = '35px';
        main.style.fontWeight = 700;
        main.style.color = 'white';
    });
}());

(function() {
    let pwd = document.getElementById('pwd');
    let chk = document.getElementById('showPwd');
    
    addEvent(chk, 'change', function(e) {
        let target = e.target || e.srcElement;
        try {
            if (target.checked) {
                pwd.type = 'text';
            } else {
                pwd.type = 'password';
            }
        } catch(error) {
            alert('Your browser do not support function checked!')
        }
    })
}())





(function() {
    var form = document.getElementById('newPwd');
    var password = document.getElementById('pwd2');
    var submit = document.getElementById('submit');

    var submitted = false;

    submit.disabled = true;
    submit.className = 'disabled';

    addEvent(password, 'input', function(e) {
        var target = e.target || e.srcElement;
        submit.disabled = submitted || !target.value;
        submit.className = (!target.value || submitted) ? 'disabled' : 'enabled';
    });

    addEvent(form, 'submit', function(e) {
        if (submit.disabled || submitted) {
            e.preventDefault();
            return;
        }
        submit.disabled = true;
        submit = true;
        submit.className = 'disabled';

        e.preventDefault();
        alert('Your new password is ' + password.value);
    });
}());





(function() {
    var form2 = document.getElementById('interests');
    var elements = form2.elements;
    var options = elements.genre;
    var all = document.getElementById('all');

    function updateAll() {
        for (let i = 0; i < options.length; i++) {
            options[i].checked = all.checked;
        }
    }

    addEvent(all, 'change', updateAll);

    function clearAlllOptions(e) {
        let target = e.target || e.srcElement;
        if (!target.checked) {
            all.checked = false
        }
    }

    for (let i = 0; i < options.length; i++) {
        addEvent(options[i], 'change', clearAlllOptions)
    }
}());





(function () {
    var input = document.getElementById('passGame-input');

    var block1 = document.getElementById('passGame-block1');
    var block2 = document.getElementById('passGame-block2');
    var block3 = document.getElementById('passGame-block3');
    var block4 = document.getElementById('passGame-block4');

    input.addEventListener('input', function () {
        let inputval = input.value;

        if (inputval.length < 5) {
            block1.className = 'notactive';
            block1.textContent = 'Password must have min 5 characters!';
        }

        if (!/[!@#$%^&?]/.test(inputval)) {
            block2.className = 'notactive';
            block2.textContent = 'Password must have special character!';
        }

        if (!/[A-Z]/.test(inputval)) {
            block3.className = 'notactive';
            block3.textContent = 'Password must have uppercase letter!';
        }

        if (!/[0-9]/.test(inputval)) {
            block4.className = 'notactive';
            block4.textContent = 'Password must have number!';
        }
    });
})();




