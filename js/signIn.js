var emailInput = document.getElementById("signinEmail"),
    passwordInput = document.getElementById("signinPassword"),
    loginBtn = document.getElementById('loginBtn'),
    usersData = JSON.parse(localStorage.getItem('usersData'));
    required = document.getElementById("required")

loginBtn.addEventListener('click',mainSignIn)

function mainSignIn() {
    
  

    if (emailInput.value==""|| passwordInput==""){
        var required = document.getElementById("required")
        required.classList.replace("d-none","d-block")
        return false
    }

    for (let i = 0; i < usersData.length; i++) {
        if (emailInput.value == usersData[i].email && passwordInput.value == usersData[i].password) {
            localStorage.setItem('userNameSession', usersData[i].name)
            location.replace("welcome.html");
            return false
        }
        if(emailInput.value != usersData[i].email && passwordInput.value != usersData[i].password){
            var incorrect =document.getElementById("incorrect")
            incorrect.classList.replace("d-none","d-block")
            required.classList.replace("d-block","d-none")}
    
    }

  
}