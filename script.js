const form = document.getElementById("contact-form");
const response = document.getElementById("response");
let todaysDate = document.getElementById("due-date");


console.log (new Date().toISOString());
let newDate = new Date().toISOString()
let slicedDate = newDate.slice(0, 10);
console.log(slicedDate);
todaysDate.value = slicedDate;


form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const messageValue = document.getElementById("form-message").value;
    response.textContent = `Thanks for your submission ${nameValue}, someone will reach out soon with next steps`;
});

form.addEventListener("reset", function() {
    response.textContent = "";

});

