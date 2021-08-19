import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"

function NavBar(){
    return(
        <div>
            <nav>
                <Link className="btn btn-primary" to="/">Home</Link>
                <Link className="btn btn-primary" to="/bane">For you</Link>
                <Link className="btn btn-primary" to="/jokes">Pirates</Link>         
            </nav>
        </div>
    );
}

export default NavBar;