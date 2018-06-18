// Write your JavaScript here
function changeCalculator(cost, given) {
    var first = (given - cost);
    var dollars = Math.floor(first);
    var rem = (first - dollars);
    var quarters = Math.floor(rem.toFixed(2) / .25);
    var dimes = Math.floor((rem.toFixed(2) % .25) / .1);
    var nickels = Math.floor(((rem.toFixed(2) % .25) % .1) / .05);
    var pennies = Math.floor((((rem.toFixed(2) % .25) % .1) % .05) / .01);
    document.getElementById('dollars-output').innerHTML = dollars;
    document.getElementById('quarters-output').innerHTML = quarters;
    document.getElementById('dimes-output').innerHTML = dimes;
    document.getElementById('nickels-output').innerHTML = nickels;
    document.getElementById('pennies-output').innerHTML = pennies;


}

function handleClickEvent() {
    var cost = document.getElementById('amount-due').value;
    var given = document.getElementById('amount-received').value;
    var result = changeCalculator(cost, given);
}

document.getElementById('calculate-change').onclick = handleClickEvent;