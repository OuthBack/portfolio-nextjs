/**
 * This changes the standart 404 page
 */

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu(){
    return(
        <div className="wrap-white d-flex align-items-center justify-content-center vh-100">
            <h1 style={{ fontSize: '4rem', textAlign: 'center' }}>
                Error 404 - Page Not Found
            </h1>
        </div>
    )
}