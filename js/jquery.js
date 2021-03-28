//ready function
$(function(){
    $('.preloader').delay(1000).fadeOut('slow',function(){
        $('body').css("overflow","auto");
    });
    var li = [$('.num-box-1'), $('.num-box-2'), $('.num-box-3')]; 
    var waypoint = new Waypoint({
        element: document.getElementById('section-5'),
        handler: function(down){
            $.each(li, function (k,val){
                var value = val.attr('data-nums');
                var options = {};
                options ['toValue'] = value;
                options ['duration'] = 5000;
                val.numerator(options);
            });      
        }, offset: '70%'
    });
});