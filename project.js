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


// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// var a=document.getElementById("grid_box_mobile");
// a.addEventListener("click",grid_animate); 
// function grid_animate(){
//   document.getElementsByClassName("grid_box_transition");
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("grid_box_mobile");
//   if (n > slides.length)
//    {slideIndex = 1}  
//   if (n < 1) {slideIndex = slides.length} 
//   if (n==1)
//   {
//    document.getElementById("carosel").style.display="none";
//  }  else{
//   document.getElementById("carosel").style.display="block";
//  } 
//  if(n==6){
//   document.getElementById("carosel_1").style.display="none";
//  }else{
//   document.getElementById("carosel_1").style.display="block";
//  }
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none"; 
//   }
//   slides[slideIndex-1].style.display = "flex";  
// }







// function previous_carosel_1(){
//   var leftside=document.getElementById('grid_scrolling');
//   leftside.scrollBy({
//     top:0,
//     left:-400,
//     behavior: 'smooth'
//   });
//   document.getElementById("prev_scroll").style.display="block";
//    document.getElementById("next_scroll").style.display="none";
// }

// function next_carosel_1(){
//   var rightside=document.getElementById('grid_scrolling');
//   rightside.scrollBy({
//     top:0,
//     left:400,
//     behavior: 'smooth'
//   });
//   document.getElementById("prev_scroll").style.display="none";
//   document.getElementById("next_scroll").style.display="block";
// }


// var c = 320;


// function prev() {
//     c -= 320;
//     if (c <= 2220) {
//         document.getElementById("prev_1").style.display = "flex";
//     }
//     if (c == 320) {
//         document.getElementById("prev").style.display = "none";
//     }
//     var left = document.getElementById("container2_mobile");
//     left.scrollBy({
//         top: 0,
//         left: -320,
//         behavior: 'smooth'
//     });
// }

// function next() {
//     c += 320;
//     if (c >= 2220) {
//         document.getElementById("next").style.display = "none";
//     }
//     if (c > 320) {
//         document.getElementById("prev").style.display = "flex";
//     }
//     var right = document.getElementById("container2_mobile");
//     right.scrollBy({
//         top: 0,
//         left: 320,
//         behavior: 'smooth'
//     });
// }

var c = 268;


function prev() {
    c -= 268;
    if (c <=1000) {
        document.getElementById("next_scroll").style.display = "flex";
    }
    if (c == 268) {
        document.getElementById("prev_scroll").style.display = "none";
    }
    var left = document.getElementById("grid_scrolling");
    left.scrollBy({
        top: 0,
        left: -268,
        behavior: 'smooth'
    });
}

function next() {
    c += 268;
    if (c >= 1000) {
        document.getElementById("next_scroll").style.display = "none";
    }
    if (c > 268) {
        document.getElementById("prev_scroll").style.display = "flex";
    }
    var right = document.getElementById("grid_scrolling");
    right.scrollBy({
        top: 0,
        left: 268,
        behavior: 'smooth'
    });
}




var b = 370;


function prev_mob() {
    b -= 350;
    if (b <=2100) {
        document.getElementById("next_scroll_mob").style.display = "flex";
    }
    if (b < 400) {
        document.getElementById("prev_scroll_mob").style.display = "none";
    }
    var leftmob = document.getElementById("grid_scrolling_mobile");
    leftmob.scrollBy({
        top: 0,
        left: -350,
        behavior: 'smooth'
    });
}

function next_mobile() {
    b += 350;
    if (b >= 2100) {
        document.getElementById("next_scroll_mob").style.display = "none";
    }
    if (b > 350) {
        document.getElementById("prev_scroll_mob").style.display = "flex";
    }
    var rightmob = document.getElementById("grid_scrolling_mobile");
    rightmob.scrollBy({
        top: 0,
        left: 350,
        behavior: 'smooth'
    });
}




var d = 100;


function arrows_prev() {
    d -= 100;
    if (d <=480) {
        document.getElementById("mob_scroll").style.display = "flex";
        console.log(d);
    }
    if (d <120) {
        document.getElementById("mob_scroll_prev").style.display = "none";
    }
    var leftside = document.getElementById("scrolling_3");
    leftside.scrollBy({
        top: 0,
        left: -100,
        behavior: 'smooth'
    });
}

function arrows_next() {
    d+= 100;
    if (d >=401) {
        document.getElementById("mob_scroll").style.display = "none";
        console.log(d);
    }
    if (d> 80) {
        document.getElementById("mob_scroll_prev").style.display = "flex";
    }
    var rightside = document.getElementById("scrolling_3");
    rightside.scrollBy({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
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




// const menuItems = document.querySelectorAll(".menuItem");
// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )



const menu = document.querySelector(".menu");
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




// function leftScroll() {
//   const right = document.querySelector(".flex_container2_scroll");
//   let a=right.scrollBy(-20, 0);
//   console.log(a)
  
// }
// function rightScroll() {
//   const left = document.querySelector(".flex_container2_scroll");
//  var b= left.scrollBy(20, 0);
//  console.log(b)
//  document.getElementById("mob_scroll_next").style.display="block";
// }





// function previous_carosel(){
//   var leftside=document.getElementById('scrolling_3');
//   leftside.scrollBy({
//     top:0,
//     left:-400,
//     behavior: 'smooth'
//   });
//   document.getElementById("mob_scroll").style.display="block";
//   document.getElementById("mob_scroll_next").style.display="none";
// }

// function next_carosel(){
//   var rightside=document.getElementById('scrolling_3');
//   rightside.scrollBy({
//     top:0,
//     left:400,
//     behavior: 'smooth'
//   });
//   document.getElementById("mob_scroll").style.display="none";
//   document.getElementById("mob_scroll_next").style.display="block";
// }





// function arrows(direction){
//   var container = document.getElementById('scrolling_3');
//   scrollCompleted = 0;
//   var slideVar = setInterval(function(){
//     if(direction==1){
//       document.getElementById("mob_scroll_next").style.display="block";
//     }
//       if(direction >= 1){
//           container.scrollLeft += 15;

//       } if(direction<0) {
//           container.scrollLeft -= 15;
//           document.getElementById("mob_scroll").style.display="block";
//           document.getElementById("mob_scroll_next").style.display="none";
//       }
//       if(direction==1){
//         document.getElementById("mob_scroll").style.display="none";
//       }
//       scrollCompleted += 2;
//       if(scrollCompleted >= 50)
//       {
//           window.clearInterval(slideVar);
//       }
//   }, 17);
// }


// function arrows(direction){
//   var container = document.getElementById('scrolling_3');
//   scrollCompleted = 0;
//   var slideVar = setInterval(function(){
//       if(direction >= 1){
//           container.scrollLeft += 5;
//       } if(direction<0) {
//           container.scrollLeft -= 5;
//       }
//       scrollCompleted += 5;
//       if(scrollCompleted >= 100)
//       {
//           window.clearInterval(slideVar);
//       }
//   }, 17);
// }



// function arrows(direction){
//   var container = document.getElementById('scrolling_3');
//   scrollCompleted = 0;
// var a=  document.getElementById("mob_scroll_next");
// console.log(a)
// var b=   document.getElementById("mob_scroll");
// console.log(b)
//   var slideVar = setInterval(function(){
//     if(a!=20){
//      a.style.display="block";
// console.log(a.length)
//          }
//       if(direction >= 1){
//           container.scrollLeft += 5;
//       } if(direction<0) {
//           container.scrollLeft -= 5;
//       b.style.display="block";
//        console.log(b.length);
//        document.getElementById("mob_scroll_next").style.display="none";
//       }
//       if(b==100){
//            b.style.display="none";
//            console.log(b)
//              }
//       scrollCompleted += 5;
//       if(scrollCompleted >= 100)
//       {
//           window.clearInterval(slideVar);
//       }
//   }, 17);
// }


// function myFunction() {
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }


// function bar(){
//   document.getElementById(searchbar).classList.add('search_style');
// }



// function search_keys() {
// 	let input = document.getElementById('searchbar').value
// 	input=input.toLowerCase();
// 	let x = document.getElementsByClassName('block');
	
// 	for (i = 0; i < x.length; i++) {
// 		if (!x[i].innerHTML.toLowerCase().includes(input)) {
// 			x[i].style.display="none";
// 		}
// 		else{
// 			x[i].style.display="scrollingblock";				
// 		}
// 	}
//   }

function search_keys() {
  var norows = document.getElementById('no-rows-alert');
  var matchedRow = false;
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('block');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else{
			x[i].style.display="flex";	
      matchedRow = true;			
		}
	}

  norows.style.display = matchedRow ? 'none' : 'inherit';
  if (!matchedRow) {
    setTimeout(function() {
      norows.style.display = 'block';
    })
  }
  }

// var tbl = document.getElementById('scrollingblock');
// var norows = document.getElementById('no-rows-alert');
// document.getElementById('search_button').addEventListener('click', function() {
//   var matchedRow = false;
//   var srch = $('#searchbar').val().toUpperCase();
//   for(var r = 0; r < tbl.rows.length; r++) {
//     var row = tbl.rows[r];
//   var cell = row.cells[0];
//     var cellVal = cell.textContent.substr(0, srch.length).toUpperCase();
//     if (srch == cellVal) {
//         matchedRow = true;
//     row.style.display = 'scrollingblock';
//     }
//   else {
//     row.style.display = 'none';
//   }
//   }
  
//   norows.style.display = matchedRow ? 'none' : 'inherit';
//   if (!matchedRow) {
//     setTimeout(function() {
//       norows.style.display = 'none'
//     }, 1500)
//   }
// });







// function search() {
//   var input = document.getElementById('srch').value;

//   var shipments = document.querySelectorAll(".block");

//   for (let i = 0; i < shipments.length; i++) {
//       if (shipments[i].id === input) {
//           shipments[i].style.display = "flex";
//       } else {
//           shipments[i].style.display = "none";
//       }
//   }
// }

// function empty() {
//   var shipments = document.querySelectorAll(".block");
//   shipments.forEach(element => {
//       element.style.display = "flex";
//   });
// }

// function search_animal() {
// 	let input = document.getElementById('searchbar').value
// 	input=input.toLowerCase();
// 	let x = document.getElementsByClassName('block');
	
// 	for (i = 0; i < x.length; i++) {
// 		if (x[i].innerHTML.toLowerCase().includes(input)) {
			
//       x[i].style.display="scrollingblock";		
// 		}
// 		else {
				
//       x[i].style.display="none";
// 		}
// 	}
// }
