
<?php 
include "header.php";
?>
<div class="main">
<nav class="main-navigation">
      <ul class="menu-list">
        <li class="menu-item"><a href="#about"><span class="menu-icon"><i class="fas fa-user-ninja"></i></span><span class="menu-text"> Om mig</span></a></li>
        <li class="menu-item"><a href="#portfolio"><span class="menu-icon"><i class="fas fa-briefcase"></i></span><span class="menu-text">Portfolio</span></a></li>
        <li class="menu-item"><a href="#cv"><span class="menu-icon"><i class="fas fa-align-left"></i></span><span class="menu-text"> Cv / skills</span></a></li>
        <li class="menu-item"><a href="#contact"><span class="menu-icon"><i class="fas fa-address-card"></i></span><span class="menu-text">Kontakt</span></a></li>        
      </ul>
    </nav>
  <section class="top-section">
    
    <div class="developer-text"><h2 class="net-webb"><span class="bigger">.NET utvecklare</span> med inriktning webb</h2></div>
    <span id="about"></span>
    <div class="circle c1">HTML</div>  
    <div class="circle c2">CSS</div>
    <div class="circle c3">C#</div>
    <div class="circle c4">javaScript</div>
  </section>

  <section class="about-me content-box">
  <div>
      <img id="halfme" src="img/me.png">
    </div>
    <div class="textbox">
      
      <h2>Vem är jag?</h2>
      
      <p>En stolt tvåbarnsfar på <span id="age"></span> år, 
      som alltid älskat programmering. 
      Jag valde att utbilda mig som .NET utvecklare på yrkeshögskolan 
      i Mölndal efter 11 år på Elgiganten i Östersund som säljare, avdelningsledare, supporttekniker och nätverksansvarig.  </p>  
      <i class="fas fa-caret-down myBtn down"></i>
      
      <span id="portfolio"></span>
    </div>
    
  </section>
  

 
    
  <section class="portfolio content-box" id="testimonials">
    <h2>Portfolio</h2>
      <div class="carousel slide" id="portfolio-carousel" data-ride="false" data-interval="5000" data-pause="hover">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p>
              I no longer have to sniff other dogs for love. I'v        e found the
              hottest Corgi on TinDog. Woof.
            </p>
            <img
              class="testimonialImg"
              src="images/dog-img.jpg"
              alt="dog-profile"
            />
            <em>Pebbles, New York</em>
          </div>
          <div class="carousel-item">
            <p>
              My dog used to be so lonely, but with TinDog's help, they've found
              the love of their life. I think.
            </p>
            <img
              class="testimonialImg"
              src="images/lady-img.jpg"
              alt="lady-profile"
            />
            <em>Beverly, Illinois</em>
          </div>
        </div>
        <a
          href="#portfolio-carousel"
          class="carousel-control-prev"
          role="button"
          data-slide="prev"
          ><i class="fas fa-chevron-left blackText"></i></a>
        <a
          href="#portfolio-carousel"
          class="carousel-control-next"
          role="button"
          data-slide="next"
          >
          <i class="fas fa-chevron-right blackText"></i>
        </a>
      </div>
      <span id="cv"></span>
    </section>
  

  <section class="cvskills content-box">
  <h2>Cv / Kompetenser</h2>
  <div id="img-me">
  <button type="button" class="btn btn-primary">Primary</button><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis assumenda nam aliquid architecto ut, quo consequuntur distinctio quaerat! Laborum, modi quae! Aperiam veniam aspernatur labore reprehenderit ullam, inventore praesentium ad.</p></div>
  <span id="contact"></span>
  <div id="text-me">om mig bla bla bla Lorem ipsum, dolor sit amet consectetur adipisicing ecum ut, officiis, perferendis unde quo. Iusto ut veniam explicabo quo labore iure tempore eligendi incidunt laboriosam. Reprehenderit pariatur impedit magni delectus mollitia! ?</div>
  </section>

  <section class="contact content-box">
  <h2>Kontakt</h2>
  <div id="img-me"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis assumenda nam aliquid architecto ut, quo consequuntur distinctio quaerat! Laborum, modi quae! Aperiam veniam aspernatur labore reprehenderit ullam, inventore praesentium ad.</p></div>
  <div id="text-me">om mig bla bla bla Lorem ipsum, dolor sit amet consectetur adipisicing ecum ut, officiis, perferendis unde quo. Iusto ut veniam explicabo quo labore iure tempore eligendi incidunt laboriosam. Reprehenderit pariatur impedit magni delectus mollitia! ?</div>
  </section>
</div>
<?php 
include "footer.php";
?>
</body>
</html>