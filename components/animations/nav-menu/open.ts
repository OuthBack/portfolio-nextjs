import animation from './animation-menu'
import hoverPointer from './hover-pointer'


export default function open(
    animation_duration: number,
    false_icon_hover: number,
    true_icon_hover: number,
){

    (function($){

        // Open Menu
        $('.header-text').css({
            transform: "translateX(-200%)"
        });

        $("nav .hamburguer-container").css(
            animation('rotate_and_move_left', animation_duration, false_icon_hover)
        )
        
        $("nav .times-container").css(
            animation('alternative_rotate_and_return', animation_duration, false_icon_hover)
        )

        setTimeout(() => {
            $("nav .hamburguer-container").css({
                "animation-iteration-count": 1,
                "pointer-events": 'all'
            })

            $("nav .times-container").css(
                $.extend(
                    hoverPointer(1), 
                    {"animation-iteration-count": 1}
                ))
        }, animation_duration*1000)
    }(jQuery))
}