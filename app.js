function validate(){
    let userInput = document.getElementById("search__bar").value;
    let index = userInput[userInput.length - 9]
    if (userInput.length == 0){
        document.getElementById("validation").style.display = "block";
        document.getElementById('validation').innerHTML = "Whoops! it looks like you forgot to add your email."
        document.getElementById("search__bar").style.border = "1px solid hsl(354, 100%, 66%)";
        document.getElementById("validation").style.color = "hsl(354, 100%, 66%)";
        document.getElementById("validation").style.fontFamily = "'Libre Franklin'";
    }else if(userInput.slice(userInput.length - 9) != '@host.tId') {
        document.getElementById("validation").style.display = "block";
        document.getElementById("validation").innerHTML = "Please provide a valid email."
    }
    else{
        document.getElementById("validation").style.display = "none";
        document.getElementById("search__bar").style.border = "1px solid hsl(0, 0%, 59%)";

    }
}
