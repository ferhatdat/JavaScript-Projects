let birthdayInput = document.querySelector("[name=birthday]");
let year = document.querySelector("#years");
let month = document.querySelector("#months");
let day = document.querySelector("#days");
let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");
let image = document.querySelector("img")
let body = document.querySelector("body")

birthdayInput.addEventListener("change", calculator);

function calculator(e){
    let current = new Date();
    let birthday = new Date(birthdayInput.value);

    if (current < birthday){
        alert("Check Your Birth Date");
        birthdayInput.value = document.querySelector("[name=birthday]")
            
    }
    else {
        year.textContent = current.getFullYear() - birthday.getFullYear();
        month.innerText = current.getMonth() - birthday.getMonth();
        if (parseInt(month.innerText) < 0){
            month.innerText = parseInt(month.innerText) + 12;
            year.innerText = parseInt(year.innerText) - 1;
        }
        day.innerText = current.getDate() - birthday.getDate();
        if (parseInt(day.innerText) < 0){
            day.innerText = parseInt(day.innerText) + 31;
            month.innerText = parseInt(month.innerText) - 1;
        }
        hour.innerText = current.getHours() - birthday.getHours();
        if (parseInt(hour.innerText) < 0){
            hour.innerText = parseInt(hour.innerText) + 24;
            day.innerText = parseInt(day.innerText) - 1;
        }
        minute.innerText = current.getMinutes() - birthday.getMinutes();

        second.innerText = current.getSeconds() - birthday.getSeconds();

    }
    setInterval(calculator, 1000); 
}

birthdayInput.addEventListener("change", run);

function run(){
    body.style.backgroundImage = 'url("./image/autumn-leaves.jpg")';
}

setInterval(() => {
    image.style.visibility = "hidden"
}, 1000);
