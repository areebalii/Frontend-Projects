const userInput = document.querySelector(".user-input")
const form = document.querySelector(`form`)
const restart = document.querySelector(".restart")
const submit = document.querySelector(".submit")
const result = document.querySelector(".result")
const allGuesses = document.querySelector(".all-guesses")

function a() {
    let allGuessesArray = []
    let randomNumber = Math.floor(Math.random() * 100)

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userInputValue = parseInt(userInput.value)
        if (userInputValue < randomNumber) {
            result.innerText = "Too low!"
        } else if (userInputValue > randomNumber) {
            result.innerText = "Too high!";
        } else {
            result.innerText = "Congrats!!!";
            restart.disabled = false;
            submit.disabled = true;
        }

        restart.addEventListener("click", () => {
            restart.disabled = true;
            submit.disabled = false;
            randomNumber = Math.floor(Math.random() * 100)
            allGuesses.innerText = ""
            result.innerText = ""
            allGuessesArray = []
        })
        if (allGuessesArray.length >= 9) {
            allGuesses.innerText = "You lost the correct number is: " + randomNumber
            restart.disabled = false;
            submit.disabled = true
            
        }
        else {
            allGuessesArray.push(userInputValue);
            allGuesses.innerText = "Your Guesses: " + allGuessesArray.join(",")
        }
        form.reset()
    })
}
a();