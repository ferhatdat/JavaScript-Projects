let screenUp = document.querySelector(".screen-top");
let screenBottom = document.querySelector(".screen-bottom");
let buttons = document.querySelectorAll(".data");
let num1 = null; 
let num2 = null;
let operator = null;
let result = null;
screenUp.innerText = null;
screenBottom.innerText = "0";

buttons.forEach(el => {
    el.addEventListener("click", (e)=>{
        if ("1234567890".includes(e.target.innerText)) {
            if (screenBottom.innerText == "0"){
                screenBottom.innerText = e.target.innerText;
            }
            else {
                screenBottom.innerText = screenBottom.innerText + e.target.innerText;
            }
        }    
        if (e.target.innerText == "AC"){
            screenUp.innerText = "";
            screenBottom.innerText = "0"
            num1        = null; 
            num2        = null;
            operator    = "";
            result      = "0";
        }
        if (e.target.innerText == "+-"){
            screenBottom.innerText = -1 * +screenBottom.innerText;
        }
        if (e.target.innerText == "%") {
            screenBottom.innerText = +screenBottom.innerText / 100;
        }
        if (e.target.innerText == ".") {
            if (!screenBottom.innerText.includes(".")) {screenBottom.innerText += "."}
        }
        if (e.target.innerText == "+") {
            operator = "+";
            num1 = +screenBottom.innerText;
            screenBottom.innerText = "";
            screenUp.innerText = num1 + e.target.innerText;
        }
        if (e.target.innerText == "-") {
            operator = "-";
            num1 = +screenBottom.innerText;
            screenBottom.innerText = "";
            screenUp.innerText = num1 + e.target.innerText;
        }
        if (e.target.innerText == "x") {
            operator = "x";
            num1 = +screenBottom.innerText;
            screenBottom.innerText = "";
            screenUp.innerText = num1 + e.target.innerText;
        }
        if (e.target.innerText == "÷") {
            operator = "÷";
            num1 = +screenBottom.innerText;
            screenBottom.innerText = "";
            screenUp.innerText = num1 + e.target.innerText;
        }
        if (e.target.innerText == "=") {
            num2 = +screenBottom.innerText;
            console.log(operator);
            switch (operator) {
                case "+":
                    result = num1 + num2;
                     break;
                 case "-":
                     result = num1 - num2;
                     break;
                 case "x":
                     result = num1 * num2;
                     break;
                   default:
                     result = (num2 == 0) ? 0 : num1 / num2;
                    break;
            }
            screenBottom.innerText = result;
            screenUp.innerText = "";
        };
    });
});
