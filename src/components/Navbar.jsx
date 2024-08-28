import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid ">
                    <Link class="navbar-brand text-danger" to="/">Netflix</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="#">Link</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link text-white dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul class="dropdown-menu text-white">
                                    <li><Link class="dropdown-item text-white" to="#">Action</Link></li>
                                    <li><Link class="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;