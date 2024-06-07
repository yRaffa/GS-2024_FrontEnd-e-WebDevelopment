const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    firstnameValidate();
    lastnameValidate();
    emailValidate();
    passwordValidate();
    confirmPassword();
});

function setErro(i) {
    campos[i].style.border = '2px solid #e63636';
    spans[i].style.display = 'flex';
}

function removeErro(i) {
    campos[i].style.border = '';
    spans[i].style.display = 'none';
}

function firstnameValidate() {
    if(campos[0].value.length < 3)
        setErro(0);
    else
        removeErro(0);
}

function lastnameValidate() {
    if(campos[1].value.length < 3)
        setErro(1);
    else
        removeErro(1);
}

function emailValidate() {
    if(!emailRegex.test(campos[2].value))
        setErro(2);
    else
        removeErro(2);
}

function passwordValidate() {
    if(campos[3].value.length < 8)
        setErro(3);
    else
        removeErro(3);
        confirmPassword();
}

function confirmPassword() {
    if(campos[3].value == campos[4].value && campos[4].value.length >= 8)
        removeErro(4);
    else
        setErro(4);
}