$(document).ready(function(){
    $("#more").attr('onClick', 'toggleNav()');
});

function toggleNav(){
  if($(".navItem").is(":hidden"))
    $(".navItem").addClass( "show" );
  else
    $(".navItem").removeClass( "show" );
}
