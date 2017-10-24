$(document).ready(function(){
  $('button[type=submit]').click(function(){
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: 
      data:{
        id:$('input[name=id]').val()
      },
      url: 'do',
      success: function(data){
        $('#content').text(data);
      }
    });
    $('#content').html('loading...');
  )}
}
