var d = 0; //delay
var ry,tz,s; //transform params

// animation time
$(".animate").on("mouseenter",function(){
    // fading out the thumbnails with style
    $(".animation img").each(function(){
        d  = Math.random()*1000; //1ms to 1000ms delay
        $(this).delay(d).animate({opacity:0},{
            step: function(n){
                s = 1-n;
                $(this).css("transform", "scale("+s+")");
            },
            duration: 1000,
        })
    }).promise().done(function(){
        storm();
    })
})

function storm(){
    $(".animation img").each(function(){
        d=Math.random()*1000;
        $(this).delay(d).animate({opacity:1}, {
            step: function(n){
                ry = (1-n)*360;
                tz = (1-n)*1000;
                $(this).css("transform", "rotateY("+ry+"deg)translateZ("+tz+"px)");
            },
            duration:3000,
            easing: 'easeOutQuint',
        })
    })
}