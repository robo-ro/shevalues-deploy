import React from 'react';

import logo from './logo_shevalues.png'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light d-inline-block align-top nav-bar" >
                <div className="container logo-container">
                <div classNAme = "img-container">
                        <img src={logo} alt=" " width={30} height={24} className="logo" />
                     
                        </div>
              </div>
               
            </nav>


        </div>
    );
};

export default NavBar;