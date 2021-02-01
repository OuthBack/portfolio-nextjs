import React, {useEffect} from 'react';


export default function Perspective() {
    if(typeof window === "object"){
        (function($){
            console.log('aa')
            $('.perspective').mousemove(function( e ){
                let x = e.pageX - this.offsetLeft;
                let y = e.pageY - this.offsetTop;

                let perspective_x = $('.perspective').width();
                let perspective_x_half = (perspective_x)/2;
                let perspective_x_max = 100*x/perspective_x;
                let angle = 10*perspective_x_max/100

                $('header').css({
                    "perspective-origin": `${perspective_x_max}% 50%`
                });

                if(angle > 5){
                    $('.perspective').css("transform", `rotateY(${2.5}deg)`);

                    console.log(angle)
                    console.log('right')

                }else if(angle < 5){
                    $('.perspective').css("transform", `rotateY(-${2.5}deg)`);

                    console.log(angle)
                    console.log('left')
                }
                
        })}
        )(jQuery)
    }
    

    return null;
}