import Image from 'next/image'

export default function Services(){

    return(
        <section>
            <div className="services d-flex flex-column align-items-center 
            justify-content-center flex-wrap w-100">
                <div className="wrap row my-auto">
                    <h1 className="col-12 mb-5">MEUS SERVIÇOS</h1>
                    <div className="col-4">
                        <h4>webdesign</h4>
                        <ul>
                            <li>Sites</li>
                            <li>UX/UI Design</li>
                            <li>Prototipagem</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4>habilidades</h4>
                        <ul>
                            <li>Html 5</li>
                            <li>Css 3</li>
                            <li>JavaScript</li>
                            <li>REACT</li>
                            <li>WordPress</li>
                            <li>PSD, PR, XD, Figma</li>

                        </ul>
                    </div>
                    <div className="col-4">
                        <h4>em breve</h4>
                        <ul>

                            <li>WebScrapping</li>
                            <li>React Native</li>

                        </ul>
                    </div>
                </div>
                <img className="img-fluid grayscale-blur w-100 h-100" src="/images/background-services.jpg" alt="Background Programming"/>
            </div>


        </section>
    )
}