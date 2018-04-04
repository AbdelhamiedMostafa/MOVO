$(document).ready(function(){
    $("#more").attr('onClick', 'toggleNav()');
});

function toggleNav(){
  if($(".navItem").is(":hidden")){
    $(".navItem").addClass( "show" );
    $("nav").css("background-color","#555555aa");
  }
  else{
    $(".navItem").removeClass( "show" );
    $("nav").css("background-color","transparent");
  }
}
