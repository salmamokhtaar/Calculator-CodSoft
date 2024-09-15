
const input = document.getElementById("display")
const buttons = document.querySelectorAll("button")

const special = ["%", "+", "-", "*", "/", "="]

let result = ""

function calculate(btnValue){

    if(btnValue === "=" && btnValue !== null){
        result = eval(result.replace("%", "/100"))
    }
    else if(btnValue == "C"){
        result = ""
    }
    else if(btnValue == "DEL"){
        result = result.toString().slice(0, -1)
    }
    
    else{
        if(result === "" && special.includes(btnValue)) return;
        result += btnValue
    }

    input.value = result
}

buttons.forEach(function(x){
    x.addEventListener("click", function(e){
        calculate(e.target.dataset.value);
    })
})