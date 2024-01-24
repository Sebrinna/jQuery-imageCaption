//첫번째 줄 .first
$('.first .item').on('mouseenter', function(){
  $(this).find('.area').animate({opacity:1},200);
  $(this).addClass('active');
})
.on('mouseleave',function(){
  $(this).find('.area').animate({opacity:''},400);
  $(this).removeClass('active');
})

//두번째 줄 .second
$('.second .item').on('mouseenter',function(){
  $(this).find('.area').stop().animate({left:0},400,'easeInCirc');
  $(this).addClass('active')
})
.on('mouseleave',function(){
  $(this).find('.area').stop().animate({left:'-100%'},400,'easeOutCirc');
  $(this).removeClass('active')
})

// 세번째 줄 .third -글씨만 중앙에서 나타남
$('.third .item').on('mouseenter', function(){
  $(this).find('p').stop().delay(300).animate({bottom:0},400,'easeInOutExpo');
  $(this).addClass('active');
  
})
.on('mouseleave', function(){
  $(this).find('p').stop().animate({bottom:'-60px'},400,'easeInOutExpo');
  $(this).delay(300).removeClass('active');
})

//네번째 쭐 .fourth 
$('.fourth .item').on('mouseenter', function(){
  $(this).find('.area').stop().animate({opacity:1},400,'easeInOutExpo');
  $(this).addClass('active');
})
.on('mouseleave', function(){
  $(this).find('.area').stop().animate({bottom:'-50%',opacity:''},400,'easeInOutExpo');
  $(this).removeClass('active');
})