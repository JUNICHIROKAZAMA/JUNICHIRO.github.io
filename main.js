
'use strict'
{
$(function(){
    const windowWidth = $(window).width();
    const placeNum = $('.nav a').length;        // ページの総数 //
    const placeId = location.search.replace('?id=','');  //urlページid//
    let slidePosition = 0;     //スライドの位置width的考え//
    let slideNum = 1;          //スライド番目//

  function mySlide(type){

    if(type === 'prev'){
      slidePosition -= windowWidth;
      slideNum--;
   
    if(slideNum === 1){
      $('[data-slide = "prev"]').fadeOut();
    }
  }

  if(type === 'next'){
    slidePosition += windowWidth;
    slideNum++;

    if(slideNum <= placeNum){
      $('[data-slide = "prev"]').fadeIn();
    }else{
      slidePosition = 0; 
      slideNum = 1;
      $('[data-slide = "prev"]').fadeOut();
    }
  }
  $('.main').animate({
    scrollLeft:slidePosition
  });
  $('.nav a').removeClass('is-active');
  $('.nav a').eq(slideNum - 1).addClass('is-active');
  }


  if(windowWidth <= 768 ){
    $('[data-slide]').click(function(){
      let slideType = $(this).attr('data-slide');
      mySlide(slideType);
    });
  }else{
    if($('body').attr('id') === 'page-top'){
      setInterval(function(){
        const random = Math.floor(Math.random() * placeNum);
        $('.thumbnail li').removeClass('is-active');
        $('.thumbnail li').eq(random).addClass('is-active');
      },1500);
    }
  }



  // 詳細ページの値入れ //
    if($('body').attr('id') === 'page-place') {
      $('.place-img img').attr('src','./img/place/' + placeId + '.jpg');
      $('[data-place]').each(function(index,el){
        let keyName = $(this).attr('data-place');
        if($(this)[0].tagName == 'A' ){
          $(this).attr('href',place[placeId - 1][keyName]);
        }else{
           $(this).text(place[placeId - 1][keyName]);
        }
      });
      setTimeout(function(){
        $('.loader-wrap').remove();
    },1000);
    }


});
}
