

// move the more link after picture
var windowResize = function(){
  var windowWidth = $(window).width();
  var isMobile = 1;
  if(windowWidth <= 640)
  {
      $('.cs_item').each(function(){
          var picWrap = $(this).find('div').eq(0);
          var more = $(this).find('.csLearnmore');
          more.insertAfter(picWrap);
      });
      isMobile = 1;
  }
  else if(isMobile)
  {
      $('.cs_item').each(function(){
          var textWrap = $(this).find('div').eq(1);
          var more = $(this).find('.csLearnmore');
          more.insertAfter(textWrap);
      });
      isMobile = 0;
  }
};

$(window).on('resize',windowResize).resize();