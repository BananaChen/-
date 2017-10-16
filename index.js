var loaded = 0;
$(document).ready(() => {
  $('td').animate({'background-position': '0px'}, 1400);
  $('td').animate({'background-position': '370px'}, 1400);
  setTimeout(function(){
    $('p').animate({'opacity': '1'}, 'slow');
  }, 2100);
  setTimeout(function(){
    $("td").hover(
      function(){
          $(this).find('img').animate({'opacity': '1'}, 400)//ask why find img
      },
      function() {
          $(this).find('img').animate({'opacity': '0'}, 400)
      }
    )
    //$('td').css('background-position', '-370px');
    loaded = 1;
  }, 2500);
})

function toAbout(){
  if(loaded == 1){
    $('td').css('background-position', '-370px');
    $('td div img').css('opacity' , '0');
    $('p.home_title').css('opacity' , '0');
    $('td').animate({'background-position': '0px'}, 1400);
    $('td').animate({'background-position': '370px'}, 1400);
    setTimeout(function(){
      location.href = "https://www.w3schools.com/jsref/event_onclick.asp";
    }, 2200);
  }
}
