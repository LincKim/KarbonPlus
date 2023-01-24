import React from "react";
import Navbar from "./Navbar";
import {SiMoleculer} from "react-icons/si";


function Home(){
    return (
        <div>
            <input type="checkbox" id="active"/>
            <label for="active" className="menu-btn">
                <span></span></label>
            <label for="active" className="close"></label>

            <Navbar/>

            <div className="content">
            <div className="title">
                <h1>Karbon<SiMoleculer/></h1>
            </div>

            </div>

        </div>
    )
}

export default Home;

