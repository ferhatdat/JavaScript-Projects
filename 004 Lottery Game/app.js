let liNumber = document.getElementById("lottery");
let myButton = document.getElementById("lucky_nums");
let myList = document.getElementById("lottery-items");

let randomNumber = ()=> (Math.floor(Math.random() * 90 + 1)+"").padStart(2, "0");
let lotteryArray = function() {
    let myArray = []
    while (myArray.length < 6){
        let x = randomNumber();
        if (!myArray.includes(x)){
            myArray.push(x);
        }
    }return myArray.sort((a,b)=>a-b)
};
lotteryArray().sort((a,b)=>a-b)
let superstar = ()=> randomNumber()
var joker = ()=>randomNumber();
while (lotteryArray().includes(joker)){
    joker = randomNumber()
}
myButton.addEventListener("click", run);

function run(){
    myList.innerHTML = ""
    for (let i = 0; i < +liNumber.value; i++) {
        let lotteryLine = `${lotteryArray().join("-")} | ${joker()} | ${superstar()}`;
        let newLi = document.createElement("li");
        newLi.textContent = lotteryLine;
        myList.appendChild(newLi)
    }
}




