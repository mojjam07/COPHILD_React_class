import React  from "react";
import './myStyles.css'

function Header () {
    return (
        <div className="header">
            <img className='logo-img' src="https://shorturl.at/bZOlL" alt="" />
            <ul className="list">
                <li className="list-item"><a href="#">Home</a></li>
                <li className="list-item"><a href="#">Services</a></li>
                <li className="list-item"><a href="#">Contact</a></li>
                <li className="list-item"><a href="#">Profile</a></li>
            </ul> 
        </div>
    )
}

export default Header;