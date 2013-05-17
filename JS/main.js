

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

$('#video').fancybox({
    scrolling : false,
    minWidth: 400,
    maxWidth: 1000,
    padding: 5,
    type: 'ajax',
    scrolling: 'auto',
    helpers: {
        overlay : {
            closeClick : true,  // if true, fancyBox will be closed when user clicks on the overlay
            speedOut   : 200,   // duration of fadeOut animation
            showEarly  : true,  // indicates if should be opened immediately or wait until the content is ready
            locked     : false   // if true, the content will be locked into overlay
        },
        title : {
            type : 'float' // 'float', 'inside', 'outside' or 'over'
        }
    }
});

//login
$('#newsletter').ajaxForm({
    beforeSubmit:  function(){
        return $("#newsletter").valid();
    },
    complete: function(xhr) {
        $('#newsletter').html('<div class="sent">提交成功</div>');
    }
});

$("#newsletter").validate(
{
    rules: {
        email: { required: true, email:true}
    },
    messages: {
        email: { required: '请填写邮箱', email:'请填写正确的邮箱' }
    }
});