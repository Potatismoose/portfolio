// Jqueryscript för att fada in/ut hamburger eller X knappen
// Samt ge top-section lite marginaler
$(".hamburger").click(function(){
    $(".main-navigation").css("visibility", "visible");
    $(".top-section").css("margin", "15em auto 0");
    $(".top-section").css("padding", "5em 0");
    $(".x-btn").toggle();
    $(".hamburger").toggle();
});

$(".x-btn, .menu-item").click(function(){
    $(".main-navigation").css("visibility", "hidden");
    $(".top-section").css("margin", "2em auto")
    $(".top-section").css("padding", "4em 0");
    $(".x-btn").toggle();
    $(".hamburger").toggle();
});


$( document ).ready(function()
{
    $('.carousel').carousel()
    let age = getAge()
    document.getElementById("age").innerText = age.toString()
});

// $( window ).resize(function()
// {
//     changePicture()
// });

// function changePicture()
// {
//     const img = document.getElementById("me")
//     if($(window).width()<=400 && img.getAttribute("src") === "img/me.png")
//     {
//         img.setAttribute("src", "img/mebig.png")
//     }
//     else if($(window).width()>400 && img.getAttribute("src") === "img/mebig.png")
//     {
//         img.setAttribute("src", "img/me.png")
//     }
// }




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


function getAge(birthday) {
    let myBirthday = "1982-07-03T00:00:00"
    var todaysDate = new Date()
    var birthDate = new Date(myBirthday)
    var age = todaysDate.getFullYear() - birthDate.getFullYear()
    var milliseconds = todaysDate.getMonth() - birthDate.getMonth()
    if (milliseconds < 0 || (milliseconds === 0 && todaysDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
