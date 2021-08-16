// Vid scroll och scrollen når 20 pixlar ner, så körs funktionens ifsats.

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //Om det är scrollat så sätts upBtn:s display egenskap till block
        document.getElementById("up-btn").style.display = "block";
    } 
    else {
        //Om det är INTE är scrollat så sätts upBtn:s display egenskap till none och är därmed osynlig.
        document.getElementById("up-btn").style.display = "none";
    }
}
// När användaren klickar på knappen så scrollas sidan upp. Denna funktion är knuten till knappen med en onclick event
function upp() {
    // IE, Firefox, Chrome och Opera
    document.documentElement.scrollTop = 0; 
    // safari
    document.body.scrollTop = 0; 
}
