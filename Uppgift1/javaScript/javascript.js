//Kallar på en funktion för att ladda in vädret i Brunflo där jag bor
window.onload = function()
{
    weatherBalloon( 2718991 )
}

function ToggleClass(){
    if ($(window).width() < 768){
        
            $(".main-navigation").addClass("visibility-hidden")
            $(".hamburgernav").removeClass("visibility-hidden")
        
    }
    else {
        $(".main-navigation").removeClass("visibility-hidden")
        $(".hamburgernav").addClass("visibility-hidden")
    }
}
//
$(window).resize(function() {
    ToggleClass()
  })
  //Laddar karusellen samt hämtar min ålder 
//och skriver ut den när dokumentet laddats
$(document).ready(function()
{
    ToggleClass()
    $('.carousel').carousel()
    let age = getAge()
    document.getElementById("age").innerText = age.toString()
})

$("#showquestion").click(function(){
    $("#emailvalidation").toggle()
    $("#email").html("")
    $("#email").toggle()     
})

//script för att kalkylera uträkning för att avgöra om e-post ska visas eller inte.
$(".submitanswer").click(function(){
    
    let $answer = $("#answer").val()
    if($answer == 8)
    {
        $("#answer").css("background", "none")
        $("#emailvalidation").toggle()
        $("#email").html("<a href='mailto:benny@potatismoose.com'>benny@potatismoose.com</a>")   
        $("#email").toggle()
        $("#showquestion").html("Dölj epost")
    }
    else
    {
        $("#answer").css("background", "rgba(255,0,0,0.1)")
    }  
})

// Jqueryscript för att sätta hamburger eller X knappen synlighet
// Samt ge top-section lite marginaler
$(".hamburger").click(function(){
    $(".main-navigation").removeClass("visibility-hidden")
    $(".top-section").css("margin", "15em auto 0")
    $(".top-section").css("padding", "5em 0")
    
    $("#x-btn").removeClass("notthere")
    $(".hamburger").attr("id","notthere")
})

$("#x-btn, .menu-item").click(function(){
    if($(".menu-item").css("display") == "inline")
    {
        return
    }
    
    if(!$('#x-btn').hasClass(" notthere "))
    {
        $(".main-navigation").addClass("visibility-hidden")
        $(".top-section").css("margin", "2em auto")
        $(".top-section").css("padding", "4em 0")
        $("#x-btn").addClass("notthere")
        $(".hamburger").removeAttr("id")
    } 
})


$("#showquestion").click(function(){
    $("#showquestion").html("Visa e-post")
})
// Vanilla javascript. 

// Vid scroll och scrollen når 20 pixlar ner, så körs funktionens ifsats.

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //Om det är scrollat så sätts upBtn:s display egenskap till block
        document.getElementById("up-btn").style.display = "block"
    } 
    else {
        //Om det är INTE är scrollat så sätts upBtn:s display egenskap till none och är därmed osynlig.
        document.getElementById("up-btn").style.display = "none"
    }
}
// När användaren klickar på knappen så scrollas sidan upp. Denna funktion är knuten till knappen med en onclick event
function upp() {
    // IE, Firefox, Chrome och Opera
    document.documentElement.scrollTop = 0
    // safari
    document.body.scrollTop = 0
}

//Räknar ut min ålder och returnerar den
function getAge(birthday) {
    let myBirthday = "1982-07-03T00:00:00"
    let todaysDate = new Date()
    let birthDate = new Date(myBirthday)
    let age = todaysDate.getFullYear() - birthDate.getFullYear()
    let milliseconds = todaysDate.getMonth() - birthDate.getMonth()
    if (milliseconds < 0 || (milliseconds === 0 && todaysDate.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}

//OpenWeatherMap API
function weatherBalloon( cityID ) {
    let key = 'b2a8088720f4f4f3845169d75fbf464f'
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawWeather(data)
    })
    .catch(function() {
      // catch any errors
    })
  }

//   Funktion för att räkna om kelvin till celcius 
//   och sedan skriva ut det till html dokumentet

  function drawWeather( d ) {
	let celcius = Math.round(parseFloat(d.main.temp)-273.15)
	let weatherDescription = replaceWeatherText(d.weather[0])
    switch(weatherDescription){
        case "Soligt":
            weatherDescription = weatherDescription + " <i class='fas fa-sun'></i>"
            break
        case "Mulet": 
            weatherDescription = weatherDescription + " <i class='fas fa-cloud'></i> "
            break
        case "Växlande molnighet": 
            weatherDescription = weatherDescription + " <i class='fas fa-cloud-sun'></i>"
            break
        case "Lättare regn":
            weatherDescription = weatherDescription + " <i class='fas fa-cloud-sun-rain'></i>"
            break
        case "Regn":
            weatherDescription = weatherDescription + " <i class='fas fa-cloud-rain'></i>"
            break
        case "Åska":
            weatherDescription = weatherDescription + " <i class='fas fa-poo-storm'></i>"
            break
        case "Snö":
            weatherDescription = weatherDescription + " <i class='fas fa-snowflake'></i>"
            break
        case "Dimma":
            weatherDescription = weatherDescription + " <i class='fas fa-smog'></i>"
            break
    }
	document.getElementById('description').innerHTML = weatherDescription
	document.getElementById('temp').innerHTML = celcius + '&deg;'
	document.getElementById('location').innerHTML = "Vädret just nu i " + d.name
    document.getElementById('windarrow').style.transform = "rotate("+d.wind.deg+"deg)"
    document.getElementById('wind').innerHTML = " " + d.wind.speed + "m/s"
}

//Översätter vädret från engelska till svenska
function replaceWeatherText(weather){
    let weatherText = new Map([
        ["Clear", "Soligt"],
        ["Clouds", "Mulet"],
        ["Drizzle", "Lättare regn"],
        ["Rain", "Regn"],
        ["Thunderstorm", "Åska"],
        ["Snow", "Snö"],
        ["Mist", "Dimma"],
        ["Haze", "Dimma"],
        ["Fog", "Dimma"]    
    ])

    for (const [key, value] of weatherText) 
    {
       if(weather.main == `${key}`)
       { 
           if(weather.id >= 801 && weather.id <= 803)
            {
                return "Växlande molnighet"
            }
            else
            {
                return `${value}`
            }
       }
    }
}
