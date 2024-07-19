import React from "react";
import './myStyles.css'

function MainContent () {
    return (
        <div className="main">
            <h1 className="main-h1">Welcome to our Services</h1>
            <h3 className="main-h3">We offer the following services:</h3>
            <ol className="service-list">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
            </ol>
        </div>
    )
}
export default MainContent;