const subButton = document.querySelector(".subscribe");
const section = document.querySelector("section");
const disButton = document.querySelector(".dismiss");
const article = document.querySelector("article");

subButton.addEventListener("click", (event)=> {
    event.preventDefault();
    section.classList.add("hidden");
    article.classList.add("visible");
    article.classList.remove("hidden");
});
disButton.addEventListener("click", (event)=> {
    event.preventDefault();
    article.classList.add("hidden");
    section.classList.remove("hidden");
});