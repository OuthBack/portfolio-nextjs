import animation from './animation-menu'
import hoverPointer from './hover-pointer'


export default function Open( newClassName: string ){

    function Li(Content:string, Link:string){
        return(
            
            <li className={'nav-item nav-pills px-4'}>
                <a className='nav-link' href={ Link }>
                    <h2>{ Content }</h2>
                </a>
            </li>
        )
    }

    return(
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
            <ol className={ "list-menu navbar-nav " + newClassName }>
                {Li('HOME', '#')}
                {Li('SOBRE MIM', '#bio')}
                {Li('SERVIÇOS', '#services')}
                {Li('CONTATO', '#footer')}
            </ol>
        </div>
    )

}