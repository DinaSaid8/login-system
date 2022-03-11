var nameInput = document.getElementById('signupName'),
    emailInput = document.getElementById('signupEmail'),
    passwordInput = document.getElementById('signupPassword'),
    signUpBtn = document.getElementById("signUpBtn"),
    
    usersData;

if (localStorage.getItem('usersData') == null) {
    usersData = []
}else{
    usersData = JSON.parse(localStorage.getItem('usersData'))
}

// localStorage.getItem("usersData")== null ? usersData = [] :  usersData = JSON.parse("usersData");

signUpBtn.addEventListener("click", signUp)


function signUp() {


    if (nameInput.value==""||emailInput.value=="" ||passwordInput.value==""){
            var checkInput =document.getElementById("checkInput")
               checkInput.classList.replace("d-none","d-block")
               return false
    }

    if (isExist()) {
        existMsg()
        return false
    }
    var user = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            }
    usersData.push(user)
    localStorage.setItem("usersData", JSON.stringify(usersData))
    clearInput()
    successMsg()
   
}

function clearInput() {
    nameInput.value= null
    emailInput.value= null
    passwordInput.value= null
}


function isExist() {
    for (var i = 0; i < usersData.length; i++) {
        if(usersData[i].email==emailInput.value){
         return true
        }
        
    }
}

function successMsg() {
    var success = document.getElementById("success");
        success.classList.replace("d-none", "d-block");
        checkInput.classList.replace("d-block","d-none");
        checkExist.classList.replace("d-block", "d-none")
        location.replace("login.html")
}
function existMsg() {
    var checkExist =document.getElementById("checkExist");
        checkExist.classList.replace("d-none", "d-block");
        checkInput.classList.replace("d-block","d-none")

}