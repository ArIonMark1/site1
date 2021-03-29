menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');

    if (x.className === "topnav") {
        x.className += " responsive"; /* важно! пробел в начале!!*/
    } else {
        x.className = "topnav";
    }
}