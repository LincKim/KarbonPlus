import React from "react";
import { SiMoleculer } from "react-icons/si";

function About(){

    return(
        <div id="aboutDiv">
            <h1 id="header-about">About</h1>




            <nav className="social">
                <ul>
                    <li><a className="linkName" href="https://twitter.com/">Twitter <i class="fa fa-twitter"></i></a></li>
                    <li><a className="linkName" href="https://github.com/">Github <i class="fa fa-github"></i></a></li>
                    <li><a className="linkName" href="https://www.linkedin.com/">Linkedin <i class="fa fa-linkedin"></i></a></li>
              </ul>
            </nav>


            <div className="me">  
                <h3 id="aboutContentHeader">Karbon<SiMoleculer/></h3>

                <div className="aboutDet">
                    <p><span className="aboutDet">Welcome to our website dedicated to providing accurate and up-to-date carbon emission estimates.</span></p>
                </div>
                
                    <hr/>

                    <div className="aboutDet">
                        <p>Our mission is to raise awareness about the impact of carbon emissions on our planet and to provide information you need to reduce your carbon footprint.</p>
                    </div>

                    <hr/>

                    <div className="aboutDet">
                        <p><span className="aboutDet">We use state-of-the-art methods and technology to gather and analyze data on carbon emissions.</span></p>
                    </div>
                    
                    <hr/>

                    <div  className="aboutDet">
                        <p>We strive to make our data as transparent and accessible as possible.</p>
                    </div>
                   
                    <hr/>

                    <div  className="aboutDet">
                        <p><span>Our team is made up of experts in the fields of environmental science, data analysis, and renewable energy</span></p>
                    </div>
                    
                    <hr/>

                    <div className="aboutDet">
                        <p>Feedback and suggestions on how we can improve our estimates are welcome.</p>
                    </div>
                    
                    <hr/>
                    
                    <div className="aboutDet">
                    <p><span>Thank you for visiting our website and for your interest in reducing carbon emissions.</span></p>
                    </div>

                    <hr/>

                    <div className="aboutDet">
                        <p>Together, we can make a difference</p>
                    </div>
                    
                
                  
        </div>
    

        </div>
    ) 
}

export default About;