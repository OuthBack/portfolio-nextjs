import Menu from './icons-menu'
import React, { useState } from 'react'

export default function Nav(){

    const EmpthyJsx = () => {
        return(<></>)
    }

    const [nav, setNav] = useState( EmpthyJsx );


    function Li(Content:string){
        return(
            
            <li className='nav-item nav-pills px-4'>
                <a className='nav-link'>
                    <h2>{Content}</h2>
                </a>
            </li>
        )
    }

    const Links = () => {
        return(
            <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
                <ol className="list-menu navbar-nav">
                    {Li('HOME')}
                    {Li('OUR WORK')}
                    {Li('OUR TEAM')}
                    {Li('CONTACT')}
                </ol>
            </div>
        )
    }  

    function NavLinks(){

        function animation(
            animation_name: string, animation_duration: number,
            icon_hover: number
        ){
            return{
                "animation-duration": `${animation_duration}s`,
                "animation-name": animation_name,
                "--icon-hover": icon_hover, // 0 for false and 1 for true
                "pointer-events": 'none',
                "animation-fill-mode": "forwards",
            }
        }

        function hover_pointer(icon_hover: number){
            return{
                "--icon-hover": icon_hover,
                "pointer-events": 'all'
            }
        }

        if(typeof window === 'object'){
            const animation_duration = 2;
            const false_icon_hover = 0;
            const true_icon_hover = 1;
            
            // Click Animation
            if(!nav.props.className){
                    (function($){

                        // Open Menu
                        $('.header-text').css({
                            transform: "translateX(-200%)"
                        });
                        
                        $('header .perspective').css({
                            "--before-blur": "5px"
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
                                    hover_pointer(1), 
                                    {"animation-iteration-count": 1}
                                ))
                        }, animation_duration*1000)
                    }(jQuery))
                
                setNav(
                    previousValue => Links()
                )
            }else{
                // Close Menu
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
                            hover_pointer(1)
                        )

                        $("nav .times-container").css(
                            hover_pointer(0)
                        )
                    }, animation_duration*1000)
                    
                }(jQuery));
                
                setTimeout(() => {
                    setNav(
                        EmpthyJsx
                    )
                }, animation_duration*1000)
            }
        }
    }

    return(
        <nav 
        className="navbar navbar-expand-sm d-flex justify-content-center mx-auto w-100">
            <div onClick={ NavLinks }>
                <Menu />
            </div>
            { nav }
        </nav>
    )
}