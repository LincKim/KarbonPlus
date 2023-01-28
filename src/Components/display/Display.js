import React from "react";
import Electricity from "../Estimates/electricity";
import Flight from "../Estimates/flight";
import Shipping from "../Estimates/shipping";
import Vehicle from "../Estimates/vehicle";
import Fuel from "../Estimates/fuel";

function Display(){

    return(
      <div className="cardsItems container mt-4">
        <h2 id="header-estimate"> Estimates</h2>
        <div className="estimate-cards row" id="estimate-containers">

        <div>
          <Flight />
        </div>

        <div>
          <Shipping />
        </div>

        <div>
          <Vehicle />
        </div>

        <div>
          <Fuel />
        </div>

        <div>
          <Electricity />
        </div>

      </div>



      </div>
    )

}

export default Display ;