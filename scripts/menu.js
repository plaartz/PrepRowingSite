var open = false;

function openMenu() {

    if (open == false) {
        document.getElementById("sidenav").style.width = "20%";
        document.getElementById("menu-button").innerHTML = "&times";
        document.getElementById("menu-button").style.fontSize = "2em";
        open = true;

    } else if (open == true) {
        document.getElementById("sidenav").style.width = "0%";
        document.getElementById("menu-button").innerHTML = "&#9776";
        document.getElementById("menu-button").style.fontSize = "1.5em";
        open = false;
    }
}