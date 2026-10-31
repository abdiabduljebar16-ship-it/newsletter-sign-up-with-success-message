const subButton = document.querySelector(".subscribe");
const section = document.querySelector("section");
const disButton = document.querySelector(".dismiss");
const article = document.querySelector("article");
const form = document.querySelector("form");
const email = document.querySelector("#emailID");
const emailError = document.querySelector(".error");

disButton.addEventListener("click", (event)=> {
    event.preventDefault();
    article.classList.add("hidden");
    section.classList.remove("hidden");
});

email.addEventListener("input", ()=>{
    if(email.validity.valid){
        emailError.textContent = "";
    } else {
        showError();
    }
});

form.addEventListener("submit" , (event)=>{
    if (!email.validity.valid){
        showError();
        event.preventDefault();
    } else {
    event.preventDefault()
    section.classList.add("hidden");
    article.classList.add("visible");
    article.classList.remove("hidden");
    email.value = "";
    }
});

function showError(){
    if(email.validity.valueMissing){
        emailError.textContent = "you need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address" ;
    } else if ( email.validity.tooShort) {
        emailError.textContent = ` Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
}