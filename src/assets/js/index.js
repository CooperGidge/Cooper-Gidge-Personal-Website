// Mobile Optimization
var menu = document.getElementById("mobile-menu");
var menuFade = document.getElementById("mobile-menu-fade");

function openMobile() {
    menuFade.style.display = "block";
    setTimeout(function(){
        menuFade.style.opacity = "1";
        menu.style.transform = "translateX(0%)";
        document.getElementById("close").focus();
    }, 5);
}

function closeMobile() {
    menu.style.transform = "translateX(110%)";
    menuFade.style.opacity = "0";
    document.getElementById("open").focus();
    setTimeout(function(){
        menuFade.style.display = "none";
    }, 150);
}

var demoR = document.getElementById("demo-result");
var demoC = document.getElementById("demo-code");

function demoResult() {
    demoR.style.display = "block";
    demoC.style.display = "none";
}

function demoCode() {
    demoR.style.display = "none";
    demoC.style.display = "block";
}

function demoCopy() {
    let copyText = document.getElementById("demo-textarea");
    copyText.select();
    document.execCommand("copy");
}







// https://stackoverflow.com/a/48542290
function textToClipboard (text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}







// https://codepen.io/dcode-software/pen/rNmPyXq + my improvements
{
    const nav = document.querySelector(".mobile-bar-wrapper");
    let lastScrollY = window.scrollY;
    var bodyScrollHeight = document.getElementById("page").scrollHeight - 10 - window.innerHeight;

    window.addEventListener("scroll", () => {
        if (window.scrollY < 10) {
            nav.classList.remove("mobile-bar-hidden");
            //console.log("Top!");
        } else if (lastScrollY > bodyScrollHeight) {
            nav.classList.add("mobile-bar-hidden");
            //console.log("Bottom!");
            //console.log(window.innerHeight);
        } else if (lastScrollY < window.scrollY) {
            nav.classList.add("mobile-bar-hidden");
            //console.log("Hidden!");
        } else {
            nav.classList.remove("mobile-bar-hidden");
            //console.log("Not Hidden!");
        }
        bodyScrollHeight = document.getElementById("page").scrollHeight - 10 - window.innerHeight;
        lastScrollY = window.scrollY;
    });
}