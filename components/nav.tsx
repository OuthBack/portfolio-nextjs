export default function Nav(){

    function Li(Content:string){
        return(
            <li className='nav-item nav-pills px-4'>
                <a className='nav-link'>
                    <h2>{Content}</h2>
                </a>
            </li>
        )
    }

    return(
        <nav 
        className="navbar navbar-expand-sm d-flex justify-content-center mx-auto w-100">
            <ol className="navbar-nav">
                {Li('HOME')}
                {Li('OUR WORK')}
                {Li('OUR TEAM')}
                {Li('CONTACT')}
            </ol>
        </nav>
    )
}