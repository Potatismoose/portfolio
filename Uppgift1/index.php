
<?php 
include "header.php";
?>
<div class="main">
  <?php
  include "mainmenu.php" 
  ?>
  <section class="top-section">
    
    <div class="developer-text"><h2 class="net-webb"><span class="bigger">.NET utvecklare</span> med inriktning webb</h2></div>
    <span id="about"></span>
    <a href="#cv"><div class="circle c1">HTML</div></a>
    <a href="#cv"><div class="circle c2">CSS</div></a>
    <a href="#cv"><div class="circle c3">C#</div></a>
    <a href="#cv"><div class="circle c4">javaScript</div></a>
  </section>

  <section class="about-me content-box">
  <div class="stretch">

  <picture>
  
    <source 
    srcset="img/mebig.png"
    media="(min-width: 768px)"
    />
    <img id="halfme"
      src="img/me.png" 
      alt="Bild på mig"
    />
  </picture>
  
    </div>
    <div class="textbox" id="textAboutMe">  
      <h2>Vem är jag?</h2>
      
      <p>En stolt tvåbarnsfar på <span id="age"></span> år från Östersund, 
      som alltid älskat programmering då jag får vara kreativ och ta mig an utmaningar. 
      Jag valde att utbilda mig som .NET utvecklare på yrkeshögskolan 
      i Mölndal efter 11 år på Elgiganten i Östersund som säljare, avdelningsledare, supporttekniker och nätverksansvarig. </p>  
      <a href="#portfolio"><button class="myBtn"><i class="fas fa-caret-down down"></i></button></a>
      <span id="portfolio"></span>
      
    </div>  
  </section>
  
  <section class="portfolio content-box">
    <h2>Portfolio</h2>
    <div class="carousel-container">
      <div class="carousel slide" id="portfolio-carousel" data-ride="false" data-interval="5000" data-pause="hover">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="cs-Grid">
              <div class="carousel-heading">
                <h5>Knowhow tools</h5>
              </div>
              <div class="carousel-image knowhow">
              <img
                class="portfolioImg "
                src="img/knowhow.png"
                alt="En bild på mitt program knowhow tools"
              />
              </div>
              <div class="carousel-text">
              <p class="padded-text">
                Ett program jag skapade med hjälp av batchscript under tiden jag jobbade på Elgiganten. Programmet underlättade genom automatisering vid felsökning och installationer av kunders datorer och sparade ca 5-6 timmar i veckan/person.
              </p>
              </div>
            </div>
            
          </div>

          <div class="carousel-item">
            <div class="cs-Grid">
              <div class="carousel-heading">
                <h5>Dragon quest - Text RPG</h5>
              </div>
              <div class="carousel-image">
                <img
                class="portfolioImg"
                src="img/dragonquest2.png"
                alt="En bild på mitt spel dragon quest"
                />
              </div>
              <div class="carousel-text">
              <p class="padded-text">
              En inlämningsuppgift som vi hade i C#. 
              Vi skulle göra ett spel med vissa kriterier. 
              Jag valde att göra ett RPG spel med shop, inventory och olika vapen samt fiender. Ett mycket roligt projekt.
              #interfaces, #arv, #Polymorfism
              </p>
              </div>
            </div>
            
          </div>

          
        </div>
        
      </div>
    </div>
    
    <span id="cv"></span>
  </section>
  

  <section class="cvskills content-box">
    <div id="cvdiv1">
      <h2>Cv / Kompetenser</h2>
    </div>

    <div id="kompetenser">
 
      <ul>
        <li class="icon chevron-right popupinfo"> HTML </li>
        <li class="icon chevron-right popupinfo"> CSS </li>
        <li class="icon chevron-right popupinfo"> C# </li>
        <li class="icon chevron-right popupinfo"> JavaScript </li>
        <li class="icon chevron-right popupinfo"> JQuery </li>
        <li class="icon chevron-right popupinfo"> React </li>
        <li class="icon chevron-right popupinfo"> Bootstrap </li>
        <li class="icon chevron-right popupinfo"> PHP </li>
        <li class="icon chevron-right popupinfo"> SQL </li>
        <li class="icon chevron-right popupinfo"> Batchscript </li>
        <li class="icon chevron-right popupinfo"> SCRUM </li>

        
      </ul>
    </div>

    <div class="textbox" id="cvText"><p>Jag har under många år arbetat med kundservice och försäljning och programmeringen har varit mer ett hobbyintresse som jag nu valt att utveckla proffesionellt. Läs mer om mina arbeten och ladda ner mitt CV här nedanför.</p>
    <button class="myBtn" id="downloadcv"><i class="fas fa-file-download"></i> Ladda ner CV</button>
    </div>

  </div>
  <span id="contact"></span>
  </section>

  <section class="contact content-box">
  
  <div id="contactheader"><h2>Kontakt</h2></div>
  
  <div id="contactmain">
    <div id="contacttext"><h5>Knyt kontakt</h5>Jag är alltid intresserad av nya kontakter, och utökar gärna mitt nätverk på LinkedIn. Tveka inte att höra av dig, oavsett om det är för en kaffe, nyfikenhet eller ett arbete.</div>
    <div id="contactWays">
    <h5>Kontaktvägar</h5>
      <ul>
        <li>
          Epost: <button class="myBtn" id="showquestion">Visa e-post</button>
          <form id="emailvalidation" onsubmit="return false">
          <label for="answer">Vad blir 5+fem minus 2?</label>
          <input type="number" id="answer">
          <button class="myBtn submitanswer"><i class="fas fa-check"></i></button>
          </form>
          <div id="email"></div>
        </li>
        <li>Telefon:<a href="tel:0706450040"> 070-645 00 40</a></li>
        <li><a href="https://www.linkedin.com/in/benny-christensen-27b69114b/" target="_blank"><i class="fab fa-linkedin socialIcon" id="myLinkedin"></i></a><a href="https://m.me/100024693787771" target="_blank"><i class="fab fa-facebook-messenger socialIcon"></i></a></li>
      </ul>
      
    </div>
    
  
  </div>
  
  </section>
</div>
<?php 
include "footer.php";
?>
</body>
</html>