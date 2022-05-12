const passwordText = document.querySelector("#password");
const confirmPasswordText = document.querySelector("#confirm-password");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", passwordsMatch);

function passwordsMatch(event){
    if (passwordText.value === "" || passwordText.value !== confirmPasswordText.value){
        if (!passwordText.classList.contains("invalid")){
            passwordText.classList.add("invalid");
            confirmPasswordText.classList.add("invalid");
        }
        event.preventDefault();
        return;
    }
    else{
        if (passwordText.classList.contains("invalid")){
            passwordText.classList.remove("invalid");
        }
        if (confirmPasswordText.classList.contains("invalid")){
            confirmPasswordText.classList.remove('invalid');
        }
    }
    
}
