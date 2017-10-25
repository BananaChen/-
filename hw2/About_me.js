$(document).ready(function(){

/*  setInterval(function(){
    $.ajax({
      method: "POST",
      url: "do.php"
    )}.done(function(data){
      $("#content").html(data);
    })
  }, 1000);

  $('button[type=submit]').click(function(){
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "do.php"
      data: {text: $('input').val()}
    )}.done(function(data){
      $("#content").html(data);
      $('input').val("");
    })
  }*/

  $("button").click(function(){
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "t.php",
      data: {id: $('input[name = id]').val()},
      success: function(data){
        $("#content").text(data);
      }
    });
  })

/*      data:{
        id:$('input[name=id]').val()
      },
      url: 'do',
      success: function(data){
        $('#content').text(data);
      }
    });
    $('#content').html('loading...');
  )}*/
})
