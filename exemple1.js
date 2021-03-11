var number1 = document.getElementById("number1")
var number2 = document.getElementById("number2")
var button = document.getElementById("button")
var result = document.getElementById("result")

button.onclick = function(){
    var nbr1 = number1.value
    var nbr2 = number2.value
    var rslt = nbr1 + nbr2
    result.innerHTML = rslt
}