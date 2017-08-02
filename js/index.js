
/* © Laphatize 2017-2018 */

var cookieString = document.cookie;
var val; 

function c(val) {
    document.getElementById("d").value = val;
}

function math(val) {
    document.getElementById("d").value += val;
}

function e() {
    try {
        c(eval(document.getElementById("d").value))
    } catch (e) {
        c('Error')
        window.confirm("Error: Syntax Error | Make sure that the input entered is valid.")
        console.warn("Syntax Error.")
    }
}

function back() {
    var value = document.getElementById("d").value;
    document.getElementById("d").value = value.substr(0, value.length - 1);
}

function test() {
    console.log("SudoCalc is working.")
}

function background(color) {
    document.body.style.backgroundColor = color;
    createCookie("backgroundColor", color, 365);
}
var color = readCookie("backgroundColor");
if (color) {
    document.body.style.backgroundColor = color;
}
// cookie functions
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


var storage;

function memoryAdd() {
    storage = document.getElementById("d").value
    console.log(storage)
}

function memoryDelete() {
    storage = ""
    console.log(storage)
}

function memoryRecall() {
    console.log(storage)
    c(document.getElementById("d").value + storage)
}

/* Audit Log */ 

var AuditLog = [
                   

               ];

function auditThis() {
AuditLog.push(document.getElementById("d").value)
//AuditLog.push(d)  
console.log(AuditLog);
}

function viewAuditLog() {

document.getElementById("audit").innerHTML = (AuditLog)

}

if (document.body.style.backgroundColor = "white") {
document.body.style.backgroundColor = "gray";
};

