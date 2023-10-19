let form = document.querySelector("#form");
let link = "/login.html"
let Username = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let error = document.querySelectorAll(".error")
function value_empty_valid(){
    if (Username.value === '') {
        setError(Username,"Username is Required")
    }
    else{
        setError(Username,"")
    }
    if (email.value === '') {
        setError(email,"Email is Required")
    }
    else{
        email_valid();
    }
    if (password.value === '') {
        setError(password,"Password is required")
    }
    else{
        password_vaild();
    }
}
function password_vaild(params) {
    if (password.value.length <=7) {
        setError(password,"password Must 8 Character")
    }
    else{
        setError(password,"")
    }
}
function email_valid(params) {
    if (email.value.endsWith("@gmail.com")) {
        setError(email,"")
    }
    else{
        setError(email,"Email is not valid")
    }
}
function validitation() {
    value_empty_valid();
}
function submit(params) {
    validitation();
    let arr =[];
    let i = 0
    error.forEach(element => {
        arr[i++] = element;
    });
    if(arr[0].textContent == '' && arr[1].textContent == ''  && arr[2].textContent == ''){
        open(link)
    }
    else{
        
    }
}
function setError(element, message) {
    element.parentNode.childNodes[5].textContent = message
}
