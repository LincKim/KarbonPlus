import React from "react";
import {Link, Routes, Route, BrowserRouter} from "react-router-dom";
import Electricity from "../Estimates/electricity";
import Flight from "../Estimates/flight";
import Shipping from "../Estimates/shipping";
import Vehicle from "../Estimates/vehicle";
import Fuel from "../Estimates/fuel";
import Category from "../Estimates/category";

function Display(){

    return(
     
      <div className="cardsItems">
        <h2 id="header-estimate"> Estimates</h2>
        <div className="containerers"  id="estimate-containers">


        <div className="estimate-cards">
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



          {/* <Category/> */}









          
        





        </div >



      </div>

     
    )

}

export default Display ;