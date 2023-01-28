import React, { useState } from "react";
import Navbar from "./Navbar";
import { SiMoleculer } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import About from "./About";
import Display from "../display/Display";
import {Routes, Route} from "react-router-dom";
import { Login } from "../Authentication/login";
import { Register } from "../Authentication/registration";


function Home(){
   
    const [currentForm, setCurrentForm] = useState ('Login')

     const toggleForm =(forName)=>{
             setCurrentForm(forName)
     } 
    return (
        <div>

            {
                currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
            }
            
            <input type="checkbox" id="active"/>
            <label for="active" className="menu-btn">
                </label>
            <label for="active" className="close"></label>

            <Navbar/>

            <div>
                    <h1 id="content">Karbon<SiMoleculer/></h1>
            </div>

            <Routes>
                <Route path="/estimates" element={ <Display/>}></Route>
                <Route path="/about" element={ <About/>}></Route>
                {/* <Route path="/" element={<Home/>}></Route> */}
            </Routes> 


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
