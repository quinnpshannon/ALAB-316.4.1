// General Requirements: Whenever any of these validation requirements fail, an appropriate error should be communicated to the user (in most cases, the actual requirement listed below serves as a good error message), and focus should return to the input element that the error originates from. If any requirements fail, the form should not submit.
const regis = document.getElementById('registration');
const regUserName = regis['username'];
const regEmail = regis['email'];
const regPass = regis['password'];
const regPassChk = regis['passwordCheck'];
const regTerms = regis['terms'];
const errorDisp = document.getElementById('errorDisplay')

regUserName.addEventListener('change',regUserNameVal);
regEmail.addEventListener('change',regEmailVal);
regPass.addEventListener('change',regPassVal);
regPassChk.addEventListener('change',regPassChkVal);

function regUserNameVal(event) {
    console.log(regUserName.value);
}
function regEmailVal(event) {

}
function regPassVal(event) {

}
function regPassChkVal(event) {

}