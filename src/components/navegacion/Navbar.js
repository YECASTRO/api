import React from 'react'
import {Link} from 'react-router-dom'
import { LoginButton } from '../login/LoginButton'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/' exact activeClassName='active'>Inicio</Link>{" "}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/pokemon'>Pokemon</Link>
                            </li>
                            
                            <li><LoginButton/></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar