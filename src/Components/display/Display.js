import React from "react";
import Electricity from "../Estimates/electricity";
import Flight from "../Estimates/flight";
import Shipping from "../Estimates/shipping";
import Vehicle from "../Estimates/vehicle";
import Fuel from "../Estimates/fuel";

function Display(){

    return(
      <div className="cardsItems">
        <h2 id="header-estimate"> Estimates</h2>
        <div  id="estimate-containers">
        <div className="estimate-cards container ">
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
          </div>

        </div >



      </div>
    )

}

export default Display ;