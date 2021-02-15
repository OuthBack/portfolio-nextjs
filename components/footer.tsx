import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from 'react-reveal/Fade';


export default function Footer(){
    return(
        <section>
            <div className="wrap-white">
                <Fade left cascade>
                    <div className="wrap mx-auto footer">
                    <h1>Pronto para decolar seu negócio?</h1>
                        <ul className="d-flex align-items-center">
                            <li className="col-4">Brasil | Porecatu - PR</li>
                            <li className="col-4">+55 43 99684-1994</li>
                            <li className="col-4">riquessan@gmail.com</li>
                        </ul>
                        <div>
                            <h1>Siga-me nas redes sociais</h1>
                            <a href="">
                                <FontAwesomeIcon icon={["fab", "youtube"]} />
                            </a>
                            <a href="https://www.facebook.com/rique.santosfigueredo/">
                                <FontAwesomeIcon icon={["fab", "facebook"]} />
                            </a>
                            <a href="https://www.instagram.com/riquessan/?hl=pt-br">
                                <FontAwesomeIcon icon={["fab", "instagram"]} />
                            </a>
                            <a href="https://www.discord.com/invite/2X7H3fX">
                                <FontAwesomeIcon icon={["fab", "discord"]} />
                            </a>
                            <a href="https://github.com/OuthBack">
                                <FontAwesomeIcon icon={["fab", "github"]} />
                            </a>
                        </div>  
                    </div>
                </Fade>
            </div>
        </section>
    )
}