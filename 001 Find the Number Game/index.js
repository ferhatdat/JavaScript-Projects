let randomNumber = Math.floor(Math.random() * 100 + 1);
let myButton = document.getElementById("btn");
let clue = document.getElementById("feedback");
let attemption = document.getElementById("attempt_number");
let myGif = document.getElementById("giff");
let myGif1 = document.getElementById("giff1");
let myGif2 = document.getElementById("gif");
let attempt_right = 0;
let lower_bound = 0;
let upper_bound = 100;
let guess = document.getElementById("number");
console.log(randomNumber);


myButton.addEventListener("click", run);

function run(){ 
     if (+guess.value < randomNumber){
         lower_bound = +guess.value;
         clue.textContent= `Enter a number between ${lower_bound} and ${upper_bound}`;
         attempt_right += 1;
         attemption.textContent= `Remain attempts: ${8 - attempt_right}`;
         guess.placeholder = `${lower_bound}`
         guess.value = ""
     }
     else if (+guess.value > randomNumber){
         upper_bound = +guess.value;
         clue.innerText = `Enter a number between ${lower_bound} and ${upper_bound}`;
         attempt_right += 1;
         attemption.textContent= `Remain attempts: ${8 - attempt_right}`;
         guess.value = ""
         guess.placeholder = `${upper_bound}`
     }
     else {
         clue.innerText = `Congratulations you hit the number on the ${attempt_right}. guess`;
         myGif.style.visibility = "visible";
         myGif2.style.visibility = "hidden";
     }
     if (attempt_right == 8){
         clue.textContent = `unfortunately, your guess right finished.`
         myGif1.style.visibility = "visible";
         myGif2.style.visibility = "hidden";
     }
    }
