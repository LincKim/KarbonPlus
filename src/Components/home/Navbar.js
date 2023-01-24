import React from 'react';

function Navbar(){
    return(
        <div className="wrapper">
            <ul id="menuList">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </div>
    )
}

export default Navbar;