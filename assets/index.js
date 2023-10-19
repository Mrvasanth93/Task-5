let Username = document.querySelector("#name");
let mobileNumber = document.querySelector("#mobileNumber");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let c_pass = document.querySelector("#c_password");
let error = document.querySelectorAll(".error")
const link = "./assets/login.html"
function login() {
    validitation();
    let arr = [];
    let i = 0;
    error.forEach(element => {
        arr[i++] = element
    });
    if (arr[0].textContent == '' && arr[1].textContent == ''  && arr[2].textContent == '' && arr[3].textContent == ''  && arr[4].textContent == '') {
        open(link)
    }
    else{

    }
}
function validitation() {
    value_empty_valid();
}
function value_empty_valid(){
    if (Username.value === '') {
        setError(Username,"Username is Required")
    }
    else{
        setError(Username,"")
    }
    if(mobileNumber.value == ''){
        setError(mobileNumber,"Mobile Number is Required")
    }
    else{
        mobileNumberValid()
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
    if (c_pass.value == "") {
        setError(c_pass, "password is required")
    }
    else{
        confirmpasswordvalid();
    }
}
function password_vaild() {
    if (password.value.length <=7) {
        setError(password,"password Must 8 Character")
    }
    else{
        setError(password,"")
    }
}
function email_valid() {
    if (email.value.endsWith("@gmail.com")) {
        setError(email,"")
    }
    else{
        setError(email,"Email is not valid")
    }
}
function mobileNumberValid(){
    if(mobileNumber.value.length == 10){
        setError(mobileNumber,"Mobile Number Must 10 Character")
    }
    else{
        setError(mobileNumber,"")
    }
}
function confirmpasswordvalid() {
    let pass = password.value;
    let confirm_pass = c_pass.value;
    if(pass === confirm_pass){
        setError(c_pass,"");
        console.log(pass,confirm_pass);
    }
    else{
        setError(c_pass,"password doesn't Match")
    }
}
function setError(element, message) {
    element.parentNode.childNodes[5].textContent = message
}
