$(window).scroll(function(){
 
 var wScroll = $(this).scrollTop();
 //console.log(wScroll);
  
  $('.logo').css({
   'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });
  
 $('.stickgirl').css({
     'transform': 'translate(0px, -'+ wScroll/10 +'%)'
 });

var num = $('.general-info').offset().top;
if(wScroll >= $('.general-info').offset().top){

   
    $('.row div').each(function(i){
         setTimeout(function(){
          
         
      $('.row div').eq(i).addClass('is-showing');

         }, 150 * (i+1));

    });
}




});