function del(){
    var x=document.querySelector("#screen").value;
    document.querySelector("#screen").value=x.substr(0,x.length-1);
}

var calci = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn1');

for (item of btn) {
    item.addEventListener('click', function(e) {
        btntext = e.target.innerText;
        calci.value += btntext;
    });
}
function sinin() {
    calci.value = Math.asin(calci.value);
}
function cosin() {
    calci.value = Math.acosh(calci.value);
}
function tanin() {
    calci.value = Math.atan(calci.value);
}
function sin() {
    calci.value = Math.sin(calci.value);
}
function cos() {
    calci.value = Math.cos(calci.value);
}
function tan() {
    calci.value = Math.tan(calci.value);
}
function BACKSPC() {
    var a = calci.value;
    calci.value = a.substr(0, a.length - 1);
}
function rem() {
    calci.value = " ";
}
function square() {
    calci.value = Math.pow(calci.value, 2);
}
function power() {
    calci.value = Math.pow(calci.value, calci.value);
}
function powery() {
    calci.value = Math.pow(calci.value, 2.71828182846);
}
function exp() {
    calci.value = Math.pow(2.71828182846, calci.value);
}
function cube() {
    calci.value = Math.pow(calci.value, 3);
}
function quat() {
    calci.value = Math.pow(calci.value, 4);
}
function sqrt3() {
    calci.value = Math.cbrt(calci.value, 3);
}
function sqrt2() {
    calci.value = Math.sqrt(calci.value, 2);
}
function log() {
    calci.value = Math.log10(calci.value);
}
function ln() {
    calci.value = Math.LN10(calci.value);
}
function pi() {
    calci.value = 3.14159265359;
}
function e() {
    calci.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1;
    num = calci.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    calci.value = f;
}