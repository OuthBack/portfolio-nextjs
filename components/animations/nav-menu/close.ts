import animation from './animation-menu'
import hoverPointer from './hover-pointer'

export default function close(
    animation_duration: number,
    false_icon_hover: number,
    true_icon_hover: number,
){
    
    (function($){
        $('.header-text').css({
            transform: "translateX(0)"
        });
        $('header .perspective').css({
            "--before-blur": "0px",
            "pointer-events": 'none'
        });

        $("nav .hamburguer-container").css(
                animation("rotate_and_move_return", animation_duration, false_icon_hover)
            )

            
        $("nav .times-container").css(
                $.extend(
                    animation("alternative_rotate_and_move_right", animation_duration, false_icon_hover), 
                    {"animation-iteration-count": 1}
                )
            )

        $('.list-menu').css({
            animation: "2s move_right infinite linear forwards"
        });

        setTimeout(() => {
            $("nav .hamburguer-container").css(
                hoverPointer(1)
            )

            $("nav .times-container").css(
                hoverPointer(0)
            )
        }, animation_duration*1000)
        
    }(jQuery));
}