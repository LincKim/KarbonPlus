import React from "react";
import Navbar from "./Navbar";
import {SiMoleculer} from "react-icons/si";
import { useNavigate } from 'react-router-dom';



function Home(){
    return (
        <div>
            
            <input type="checkbox" id="active"/>
            <label for="active" className="menu-btn">
                <span></span></label>
            <label for="active" className="close"></label>

            <Navbar/>

            <div className="content">
            <div className="title container" >
            <h1 contenteditable>Karbon<SiMoleculer/></h1>
            </div>

            </div>

        </div>

        
    )
}

export default Home;

export const Page = () => {
    const navigate = useNavigate();
    return (
        <>
        <button>Place</button>
        <button onClick={() => navigate('summary', { replace: true})}>
            Place
            </button>
        </>
        
    )
}

/* function About(){
    return (
        <div>
            <input type="checkbox" id="active"/>
            <label for="active" className="menu-btn">
                <span></span></label>
            <label for="active" className="close"></label>

            <Navbar/>
            <div className="content">
            <div className="title"></div>
            </div>

            </div>

    )
}




function Services(){
    return (
        <div>
            <input type="checkbox" id="active"/>
            <label for="active" className="menu-btn">
                <span></span></label>
            <label for="active" className="close"></label>

            <Navbar/>
            <div className="content">
            <div className="title"></div>
            </div>

            </div>
    )
    }
    

    function Gallery(){
        return (
            <div>
                <input type="checkbox" id="active"/>
                <label for="active" className="menu-btn">
                    <span></span></label>
                    <label for="active" className="close"></label>

                    <Navbar/>
                    <div className="content">
                    <div className="title">
                    </div>
            </div>

            </div>
        )
    }
    

    function Feedback(){
        return (
            <div>
                <input type="checkbox" id="active"/>
                <label for="active" className="menu-btn">
                    <span></span></label>
                    <label for="active" className="close"></label>

                    <Navbar/>
                    <div className="content">
                    <div className="title">
            </div>
            </div>

            </div>
        )
    }
export {Home, About, Services, Gallery, Feedback}; */