import React from "react";
import { GiFootsteps } from "react-icons/gi";

function Display(){

    return(
     
      <div className="cardsItems">
        <h2 id="header-est"> Estimates</h2>

        <p id="estimateParagraph"><hr/>Select Your Estimate Category For Carbon Footprints<hr/><GiFootsteps/></p>
        <div className="containerers"  id="estimate-containers">


        {/* <div className="estimate-cards">
          <div className="estCards" id="flightCard">
            <Flight />
          </div>

          <div className="estCards" id="shippingCard">
            <Shipping />
          </div>

          <div className="estCards" id="vehicleCard">
             <Vehicle />
          </div>

          <div className="estCards" id="fuelCard">
            <Fuel />
          </div>

          <div className="estCards" id="electricCard">
            <Electricity />
          </div>
          </div> */}



          {/* <Category/> */}









          
        





        </div >



      </div>

     
    )

}

export default Display ;