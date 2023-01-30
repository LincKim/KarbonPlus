import React from 'react';
// import {GiFootprint} from 'react-icons/gi';
import {Link} from "react-router-dom";
// import Display from "./Components/display/Display";
// import About from "./Components/home/About";
// import Home from './Components/home/Home';


function Navbar(){

    
    
  
    return(
        // <div className="wrapper">
            /* <ul id="menuList">
                
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                 <li>
                    <Link to="/estimates">Estimates</Link></li>   
            </ul> */

            /* <div class="wrapp">
                <div class="contain">
                    <h5 id="carbon">count your foot print, carbon ones</h5>
                </div>
            </div> */


        
            /* <h2>
                
               <p> Count your foot print.</p>
               <p style={{color:"white"}}><GiFootprint/></p>
               <p>Carbon ones!</p>
               

            </h2> */


            /* <Routes>
                <Route path="/estimates" element={ <Display/>}></Route>
                <Route path="/about" element={ <About/>}></Route>
                <Route path="/" element={<Home/>}></Route> 
            </Routes> */

        /* </div> */



            /* version 2 jsx */

            <div className="nav">
                <input type="checkbox"/>
                <span></span>
                 <span></span>
                <div className="navbarList">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">About</Link></li> 
                    <li id="overflow"><li><Link to="/estimates">Estimates</Link></li>
                                <ul className="dropdownCat">
                                <li><Link to="/electricity">Electricity</Link></li>
                                <li><Link to="shipping">Shipping</Link></li>
                                <li ><Link to="vehicle">Vehicle</Link></li>
                                <li ><Link to="fuel">Fuel</Link></li>
                                <li ><Link to="flight">Flight</Link></li>
                                </ul>
                            
                    </li>
                </div>
            </div>

    
       
    )
};


export default Navbar;
