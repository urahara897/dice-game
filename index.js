var firstName = "";
var secondName = "";



document.querySelectorAll("button")[0].onclick = function(){
    firstName = document.getElementById("fname").value;
    if(firstName){
       document.querySelectorAll("p")[0].innerHTML = firstName;
    }
}

document.querySelectorAll("button")[1].onclick = function(){
    secondName = document.getElementById("sname").value;
    if(secondName){
       document.querySelectorAll("p")[1].innerHTML = document.getElementById("sname").value;
    }
}

document.querySelectorAll("button")[2].onclick = function(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber + ".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if(randomNumber === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    else if(randomNumber > randomNumber2) {
        if(!firstName){
            document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
        }else{
            document.querySelector("h1").innerHTML = "🚩" + firstName + " Wins!";
        }
    }
    else {
        if(!secondName){
            document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
        }else{
            document.querySelector("h1").innerHTML = "🚩" + secondName + " Wins!";
        }
    }
}