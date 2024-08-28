import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Account(props) {
    return (
        <div className='container w-50'>
            <h1 className='text-center'>Account</h1>

            <div class="card text-center">
                <div class="card-header">
                    <Link className='text-decoration-none' to="/account/login">LOGIN</Link> 
                    <span>  |  </span>
                    <Link className='text-decoration-none' to="/account/register">REGISTER</Link>
                </div>
                <div class="card-body">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Account;