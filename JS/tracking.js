$('#nav a').eq(0).bind('click',function(){
    ga('send', 'event', 'discover', 'BTN1', 'BTN1');
});
$('#nav a').eq(1).bind('click',function(){
    ga('send', 'event', 'product', 'BTN1', 'BTN1');
});
$('#nav a').eq(1).bind('click',function(){
    ga('send', 'event', 'qa', 'BTN1', 'BTN1');
});
$('#videodiv #video').bind('click',function(){
    ga('send', 'event', 'video', 'home_video1', 'home_video1');
});

$('#footeraction a').eq(0).bind('click',function(){
    ga('send', 'event', 'Official', 'BTN1', 'BTN1');
});
$('#footeraction a').eq(1).bind('click',function(){
    ga('send', 'event', 'Social', 'Sina', 'Sina');
});

$('#footeraction a').eq(2).bind('click',function(){
    ga('send', 'event', 'Social', 'Dermatologist', 'Dermatologist');
});

$('#footeraction a').eq(3).bind('click',function(){
    ga('send', 'event', 'App', 'BTN1', 'BTN1');
});

$('#bottomproduct a').eq(0).bind('click',function(){
    ga('send', 'event', 'hypersensive', 'BTN1', 'BTN1');
});
$('.dVideoWrap #video').bind('click',function(){
    ga('send', 'event', 'video', 'discover_video1', 'discover_video1');
});

$('.csLearnmore').eq(0).bind('click',function(){
    ga('send', 'event', 'SW-page', 'thermal', 'thermal');
});
$('.csLearnmore').eq(1).bind('click',function(){
    ga('send', 'event', 'SW-page', 'cleansing', 'cleansing');
});
$('.csLearnmore').eq(2).bind('click',function(){
    ga('send', 'event', 'SW-page', 'soothing', 'soothing');
});

$('.nav_discover').bind('click',function(){
    ga('send', 'event', 'discover', 'BTN2', 'BTN2');
});
$('.nav_cs').bind('click',function(){
    ga('send', 'event', 'product', 'BTN2', 'BTN2');
});
$('.nav_faq').bind('click',function(){
    ga('send', 'event', 'faq', 'BTN2', 'BTN2');
});