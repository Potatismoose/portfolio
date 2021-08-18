// Jqueryscript för att fada in/ut hamburger eller X knappen
$(".hamburger").click(function(){
    $(".main-navigation").fadeToggle(1000);
    $(".x-btn").css("display", "inline-block");
    $(".top-section").css("margin", "3em auto 3em");
    $(".hamburger").toggle();
});

$(".x-btn").click(function(){
    $(".main-navigation").fadeToggle(1000);
    $(".x-btn").css("display", "none");
    $(".top-section").css("margin", "0 auto")
    $(".hamburger").toggle();
});

// Vanilla javascript. 
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

let birthday = "1982-7-3"
function getAge(birthday) {
    var todaysDate = new Date();
    var birthDate = new Date(birthday);
    var age = todaysDate.getFullYear() - birthDate.getFullYear();
    var milliseconds = todaysDate.getMonth() - birthDate.getMonth();
    if (milliseconds < 0 || (milliseconds === 0 && todaysDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

console.log(getAge(birthday))
