window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("header").classList.remove("full");
        document.getElementById("header").classList.add("scrolled");
        document.getElementById("logo-img").classList.remove("full");
        document.getElementById("logo-img").classList.add("scrolled");
        document.getElementById("menu").style.lineHeight = "50px";

    } else if (document.body.scrollTop <= 25 || document.documentElement.scrollTop <= 25) {
        document.getElementById("header").classList.add("full");
        document.getElementById("header").classList.remove("scrolled");
        document.getElementById("logo-img").classList.add("full");
        document.getElementById("logo-img").classList.remove("scrolled");
        document.getElementById("menu").style.lineHeight = "80px";
    }
}