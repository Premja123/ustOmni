// let count = 0;
// const cards=document.getElementsByClassName('grid_box');
// const len=cards.length;


// document.getElementById('prev').addEventListener("click",function(){
// moveToNextSlide();
// });

// function updating_cards(){
//  for(let card of cards){
//     card.classList.remove('grid_box--visible');
//     card.classList.add('grid_box--hidden');
   
//  }
//   cards[count].classList.add('grid_box--visible');
// }

// function moveToNextSlide(){
//    if(count==len-1){
//         count=0;
//    }else{
//     count++;
//    }
//    updating_cards();
// }

// $(document).ready(function(){

//    $("prev").on('click', function(event) {
//      if (this.hash !== "") {
//        event.preventDefault();
//        var hash = this.hash;
//        $('html, body').animate({
//          scrollTop: $(hash).offset().top
//        }, 5, function(){
//          window.location.hash = hash;
//        });
//      } 
//    });
//  });

//  function scrollFunction1() {
//   let e = document.getElementById("caroo_2");
//   e.scrollIntoView({
//     block: 'start',
//     behavior: 'smooth',
//     inline: 'start'
//   });
// }


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("grid_box_mobile");
  if (n > slides.length)
   {slideIndex = 1}  
  if (n < 1) {slideIndex = slides.length} 
  if (n==1)
  {
   document.getElementById("carosel").style.display="none";
 }  else{
  document.getElementById("carosel").style.display="block";
 } 
 if(n==6){
  document.getElementById("carosel_1").style.display="none";
 }else{
  document.getElementById("carosel_1").style.display="block";
 }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}

 // if(i>0){
    //   document.getElementById("carosel").style.display="none";
    // }
    // if(i>0){
    //   document.getElementById("carosel").style.display="block";
    // }

// function showSlides_1(n) {
//   let i;
//   let slides_1 = document.getElementsByClassName("act_bar_1");
//   console.log(slides_1)
//   if (n > slides_1.length) {slideIndex_1 = 1}    
//   if (n < 1) {slideIndex_1 = slides_1.length}
//   for (i = 0; i < slides_1.length; i++) {
//     slides_1[i].style.display = "block";  
//   }
//   var a=slides_1[slideIndex_1-1].style.display = "none";  
// }


// function scrollFunction1() {
//   let e = document.getElementById("act_bar");
//   e.scrollIntoView({
//     block: 'start',
//     behavior: 'smooth',
//     inline: 'start'
//   });
// }
// function scrollFunction2() {
//   let e = document.getElementById("el2");
//   e.scrollIntoView({
//     block: 'end',
//     behavior: 'smooth',
//     inline: 'center'
//   });
// }


//  let count = 0;
//  const cards=document.getElementsByClassName('act_bar_1');
// const len=cards.length;

// function scrollFunction1(){
//   let i;
//   let cards = document.getElementsByClassName("act_bar_1");
//   for (i = 1; i < cards.length-4; i++) {
//      document.getElementById("act_bar").remove();
//   }
// }

// function scrollFunction2(){
//   let i;
//   let cards = document.getElementsByClassName("act_bar_1");
//   for (i=cards.length;i=-1; i--) {
//      cards[cards.length].style.display="none";
//   }
 
// }

// $(function() {
//   $('#hamburger').on('click', function() {
//     $(this).toggleClass('close');
//     $('#nav').toggleClass('visible');
//   });
// });


// document.getElementById("act_bar_ing_2").addEventListener("click",function(){
//   document.getElementById("thirdblock");
// });

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)



function arrows(direction){
  var container = document.getElementById('scrolling_3');
  scrollCompleted = 0;
  var slideVar = setInterval(function(){
      if(direction >= 1){
          container.scrollLeft += 5;
      } if(direction<0) {
          container.scrollLeft -= 5;
      }
      scrollCompleted += 5;
      if(scrollCompleted >= 100)
      {
          window.clearInterval(slideVar);
      }
  }, 17);
}