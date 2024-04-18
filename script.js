function  printOutput(Output){
    document.getElementById("result").innerText = "Result:" + Output;

}
function validateinput(num) {
    if (isNaN(num)){
        alert("Enter a valid number");
        return false;

    }
    return true;
}

function sum() {
    var num1=parsefloat(document.getElementById("input 1").value) || 0;
    var num2=parsefloat(document.getElementById("input 2").value) || 0;

    if (!validateinput(num1) || !validateinput(num2)) {
        return;
    }

    var result=num1 + num2;
    printOutput(result);
}

function subtract() {
    var num1=parsefloat(document.getElementById("input 1").value) || 0;
    var num2=parsefloat(document.getElementById("input 2").value)

    if (!validateinput(num1) || !validateinput(num2)) {
        return;
    }

    var result=num1 - num2;
    printOutput(result);
}

function multiply() {
    var num1=parsefloat(document.getElementById("input 1").value) || 0;
    var num2=parsefloat(document.getElementById("input 2").value)

    if (!validateinput(num1) || !validateinput(num2)) {
        return;
    }

    var result=num1 * num2;
    printOutput(result);
}

function division() {
    var num1=parsefloat(document.getElementById("input 1").value) || 0;
    var num2=parsefloat(document.getElementById("input 2").value)

    if (!validateinput(num1) || !validateinput(num2)) {
        return;
    }

    if (num2 == 0){
        alert("cannot divide by zero")
        return;
    }
    
    var result=num1 / num2;
    printOutput(result);
}