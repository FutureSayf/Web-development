// Stappen plan trello.


// const numbers = document.querySelectorAll('.number')
// const operator = document.querySelectorAll('.operator')
// console.log(numbers, operator);




function clearAll() 
{
    document.getElementById("output-value").innerHTML = "0";
}
function removeZero() {
    let value = document.getElementById("output-value").innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById("output-value").innerHTML = value;
    }
}
function negative()
{
    let value = document.getElementById("output-value").innerHTML;

    document.getElementById("output-value").innerHTML = -Math.abs(value);
    if (value == -Math.abs(value))
    {
        document.getElementById("output-value").innerHTML = Math.abs(value);
    }
   
}
function procent() 
{
    let value = document.getElementById("output-value").innerHTML;
    value = value / 100;
    document.getElementById("output-value").innerHTML = value;
}
function display(myvalue) {
    removeZero()
    document.getElementById("output-value").innerHTML += myvalue;
}
function solve() 
{
    removeZero()
    let equation = document.getElementById("output-value").innerHTML;
    let solved = eval(equation);
    document.getElementById("output-value").innerHTML = solved;
}