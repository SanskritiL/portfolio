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



if(wScroll >= $('.mywork').offset().top){

    $('.container-fluid div').each(function(){
        $('.container-fluid img').addClass('start-animate');

    });
}




});

function github(){
    window.open('https://github.com/SanskritiL'); 
}
function linkedin(){
    window.open('https://www.linkedin.com/in/sanskriti-lamsal-11858013b/'); 
}function facebook(){
    window.open('https://www.facebook.com/sanskriti.lamsal.90'); 
}