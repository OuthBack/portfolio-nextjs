import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    IconLookup,
    IconDefinition,
    findIconDefinition
  } from '@fortawesome/fontawesome-svg-core'

export default function Menu(){
    const barLookup: IconLookup = { prefix: 'fas', iconName: 'bars' }
    const barIconDefinition: IconDefinition = findIconDefinition(barLookup) 
    const timesLookup: IconLookup = { prefix: 'fas', iconName: 'times' }
    const timesIconDefinition: IconDefinition = findIconDefinition(timesLookup) 

    if(typeof window === "object"){
        (function($){
            function hoverElement(element: string){
                $(element).hover(
                    () => {
                        if(Number($(element).css("--icon-hover")) == 1){
                            $(element).css({
                                animation: "2s rotate360 infinite linear forwards"
                            })
                        } 
                    },

                    () => {
                        if($(element).css('animation-name') != "rotate_and_move_left"
                            && Number($(element).css("--icon-hover")) == 1){
                            $(element).css({
                                "animation-play-state": "paused"
                            })
                        }
                    }
                )
            }
            hoverElement("nav .hamburguer-container");
            hoverElement("nav .times-container");

        }(jQuery))
    }

    return(
        <>
            <div className="hamburguer-container">
                <FontAwesomeIcon icon={ barIconDefinition } size="sm" />
            </div>
            <div className="times-container">
                <FontAwesomeIcon icon={ timesIconDefinition } size="sm" />
            </div>
        </>
    )
}