var loaded = 0, animateee = 1;
$(document).ready(function(){
  $('td').animate({'background-position': '0px'}, 1400);
  $('td').animate({'background-position': '370px'}, 1400, function(){
      $('p').animate({'opacity': '1'}, 1750, function(){
        loaded = 1;
        animateee = 0;
      });
    });
  /*setTimeout(function(){
    $('p').animate({'opacity': '1'}, 1750);
  }, 2300);*/
  /*setTimeout(function(){
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
    animateee = 0;
  }, 3300);*/
  flying();
})

function nextPage(website){
  if(loaded == 1){
    animateee = 1;
    $('td').css('background-position', '-370px');
    $('td div img').css('opacity' , '0');
    $('p.home_title').css('opacity' , '0');
    $('td').animate({'background-position': '0px'}, 1400);
    $('td').animate({'background-position': '370px'}, 1400);
    setTimeout(function(){
      switch (website) {
        case 1:
          location.href = "https://bananachen.github.io/Web-design//hw1%20-%20my%20profile%20(html%20css)/banana.html";
          break;
        case 2:
          location.href = "http://www.csie.ncku.edu.tw/ncku_csie/images/ncku/photo/student.png";
          break;
        case 3:
        location.href = "http://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/gettyimages-619254150.jpg";
            break;
        case 4:
          location.href = "https://www.facebook.com/csieweek/";
            break;
        case 5:
          location.href = "https://www.facebook.com/chen.s.chi";
            break;
        default:
      }
    }, 2200);
  }
}

function flying(){
  $("td").hover(
      function(){
        if(animateee == 0) $(this).find('img').animate({'opacity': '1'}, 400)//ask why find img
      },
      function() {
        if(animateee == 0) $(this).find('img').animate({'opacity': '0'}, 400)
      }

  )
}
