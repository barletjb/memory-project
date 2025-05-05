const newUserName = document.getElementById("connectUserName");
const newUserEmail = document.getElementById("connectUserEmail");
const newPassword = document.getElementById("connectUserPassword");
const confirmPassword = document.getElementById("confirmUserPassword");
const signIn = document.getElementById("signIn");
const cancel = document.getElementById("cancel");



signIn.addEventListener('click', (event)=> {

    event.preventDefault();

    const userInfos = {
        name: newUserName.value,
        email: newUserEmail.value,
        password : newPassword.value,
        confirmPassword : confirmPassword.value
    }

    if () {
        
    } else {
        
    }
    console.log("Je fonctionne");
    console.log("Les infos de l'utilisateur sont ", userInfos);
})




