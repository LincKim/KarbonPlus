import React from 'react';
import {GiFootprint} from 'react-icons/gi';

function Navbar(){

    
    /* let btn1 = document.querySelector('.btn-1');
    let btn2 = document.querySelector('.btn-1');
    let btn3 = document.querySelector('.btn-1');
    
    let btnsArray = [btn1, btn2, btn3];
    
    btnsArray.forEach(btn => {
    
       btn.addEventListener('click', (event)=> {
        event.preventDefault();
       }); */
    
    
  
    return(
        <div className="wrapper">
            <ul id="menuList">
                
                <li ><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                 <li><a href="#">Estimates</a></li> 

                
                
            </ul>

            {/* <div class="wrapp">
      <div class="contain">
        <h5 id="carbon">count your foot print, carbon ones</h5>
      </div>
    </div> */}

            <h2>
                
               <p> Count your foot print.</p>
               <p style={{color:"white"}}><GiFootprint/></p>
               <p>Carbon ones!</p>
               

            </h2>

    
        </div>
    )
};


export default Navbar;
