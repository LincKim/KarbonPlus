import React from "react";
// import Navbar from "./Navbar";
import { SiMoleculer } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
// import About from "./About";
// import Display from "../display/Display";
// import {Routes, Route} from "react-router-dom";


function Home(){
    return (
        <div>
            
            {/* <input type="checkbox" id="active"/>
            <label for="active" className="menu-btn">
                </label>
            <label for="active" className="close"></label> */}

            

            
                    <h1 id="karbonHomepage">Karbon<SiMoleculer/></h1>
    

            {/* <Routes>
                <Route path="/estimates" element={ <Display/>}></Route>
                <Route path="/about" element={ <About/>}></Route>
                <Route path="/" element={<Home/>}></Route>
            </Routes>  */}


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
