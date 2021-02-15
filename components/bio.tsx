import Fade from 'react-reveal/Fade';


export default function Bio(){

    return(
        <section>
            <div className="wrap-white">
                <div className="bio wrap mx-auto d-flex 
                flex-column align-items-center justify-content-center flex-wrap">
                    <div className="background-text" data-text="front end"></div>
                    <Fade left cascade>
                        <div className="title-container">
                            <h1 className="lh-1">Desenvolvimento Front End</h1>
                        </div>
                        <div className="row align-items-start">
                            <p className="col">
                                Seja muito bem vindo ao meu portfólio, sou desenvolvedor <u>Front End e UX / UI Designer.</u>
                                <br/>
                                <br/>
                                Iniciei no desenvolvimento de sites após usar elementos dessa área em alguns de meus serviços. Desde então o interesse só cresceu e fui direcionado para o <u>Front End.</u>
                                <br/>
                                <br/>
                                <u>Como são meus projetos?</u>
                                <br/>
                                Começo o projeto com a estruturação, em seguida a prototipagem e por ultimo avanço para a programação. 
                            </p>
                            <h2 className="col-8 align-self-end">
                                <strong>
                                    <blockquote>"Seja criterioso com a qualidade. Algumas pessoas não estão acostumadas com um ambiente onde a excelência é esperada."
                                        <br/>
                                        <p className="author">- Steve Jobs</p></blockquote>
                                </strong>
                            </h2>
                        </div>
                    </Fade>
                </div>
            </div>
            
            
        </section>
    )
}