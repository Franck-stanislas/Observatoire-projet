import React from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom";


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/"><img src='/img/logo1.png' alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar navbar-dark bg-dark" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item active">
                                <Link className="nav-link" to="/"> Accueil </Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link" to={'/work/'}> Notre travail</Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link" to={'/about/'}>A propos</Link>
                            </li>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Rechercher"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
                            </form>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header

