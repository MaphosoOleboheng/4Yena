const yesButtons = document.querySelectorAll(".yesBTn");
const message = document.getElementById("message");

yesButtons.forEach(button => {
    button.addEventListener("click", () => {
        message.textContent = "YAAAY!! I can't wait to be your Valentine!!!!";
    });
});

const yesButton = document.querySelectorAll(".yesBTns");
const messag = document.getElementById("message");

yesButton.forEach(button => {
    button.addEventListener("click", () => {
        message.textContent = "Mmm...let's try again";
    });
});
