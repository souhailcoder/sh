
$("#mode").on("click",function(){
 
  if($("body").hasClass('dark')){
   $("body").removeClass("dark");

    localStorage.setItem('ClassName', 'normal');
  }
  else{
  $("body").addClass("dark");
    localStorage.setItem('ClassName', 'dark');

  }
 });
$(document).ready(function(){ 

});

$( "#tgl1" ).click(function() {
  $( "#tgl1c" ).toggle();
});
$( "#tgl2" ).click(function() {
  $( "#tgl2c" ).toggle();
});
