let firstName = "";
let secondName = "";

function enterFirstName(event) {
    firstName = document.getElementById("fname").value;
    if ((event.type === "click") || (event.type === "keydown" && event.key === "Enter" && firstName)) {
        if (firstName) {
            document.querySelectorAll("p")[0].innerHTML = firstName;
        }
    }
}

function enterSecondName(event) {
    secondName = document.getElementById("sname").value;
    console.log("a " + secondName);
    if ((event.type === "click") || (event.type === "keydown" && event.key === "Enter" && secondName)) {
        if (secondName) {
            document.querySelectorAll("p")[1].innerHTML = secondName;
        }
    }
}

function rollTheDice(event) {
    console.log("aa " + secondName);
    if (((event.type === "click") || (event.type === "keydown" && event.key === "Enter"))) {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber + ".png");
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

        if (randomNumber === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        }
        else if (randomNumber > randomNumber2) {
            if (!firstName) {
                document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
            } else {
                document.querySelector("h1").innerHTML = "🚩" + firstName + " Wins!";
            }
        }
        else {
            if (!secondName) {
                document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
            } else {
                document.querySelector("h1").innerHTML = "🚩" + secondName + " Wins!";
            }
        }
    }
}

document.querySelectorAll("button")[0].addEventListener("click", enterFirstName);
document.addEventListener("keydown", enterFirstName);

document.querySelectorAll("button")[1].addEventListener("click", enterSecondName)
document.addEventListener("keydown", enterSecondName);

document.querySelectorAll("button")[2].addEventListener("click", rollTheDice);
document.addEventListener("keydown", rollTheDice);