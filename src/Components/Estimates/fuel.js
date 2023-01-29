import { useState } from "react";
import React from "react";
import {GiGooeyMolecule} from 'react-icons/gi';
import {MdReadMore} from 'react-icons/md'

function Fuel() {
  const [responseData, setResponseData] = useState(0);
  const [fuelType, setFuelType]= useState("")
 const [carbon_g, setCarbon_g] = useState(0)
 const [carbon_kg, setCarbon_kg] = useState(0)

  function submit(e){
    e.preventDefault()
    const data = {
          type: "fuel_combustion",
          fuel_source_type: fuelType,
          fuel_source_unit: "btu",
          fuel_source_value: responseData
        };
   fetch("https://www.carboninterface.com/api/v1/estimates",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer RvlWZDeJMeBLYPSddqEAw"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(responseData => {
            setResponseData(responseData)
            setCarbon_g(responseData.data.attributes.carbon_g)
            setCarbon_kg(responseData.data.attributes.carbon_kg)
      })
      .catch(error => console.error("Error:", error));
  } 

            const  Bituminous_Coal = "bit"
            const  Diesel_Fuel = "dfo"     
            const Jet_Fuel = "jf"
            const Kerosene = "ker"
            const Lignite_Coal = "lig"
            const Municipal_Waste = "msw"
            const Natural_Gas = "ng"
            const Petroleum_Coke = "pc"
            const Propane_Gas = "pg"
            const Residual_Fuel = "rfo"
            const Subbituminous_Coal = "sub"
            const Tire_Fuel = "tdf"
            const Waste_0il = "wo"
 
        function handleOptionChange(e){
        e.preventDefault()
            setFuelType(e.target.value)

        }

    return (
      <div>
        {/* <h2 id="header-estimate"> Estimates</h2> */}
        <div className="shipping ">
          <div className="form-box">
            <form >
              <p className="text-center"> Fuel Estimates</p>
              <div className="input-container">
                <input type="number" value={responseData} onChange={(e=>setResponseData(e.target.value))}/>
              </div>
              <div className="input-container">
                <select value={fuelType} onChange={handleOptionChange}>
                  <option>fuel type</option>
                  <option value={Bituminous_Coal}>Bituminous_Coal</option>
                  <option value={Diesel_Fuel}>Diesel_Fuel</option>
                  <option value={Jet_Fuel}>Jet Fuel</option>
                  <option value={Kerosene}>Kerosene</option>
                  <option value={Lignite_Coal}>Lignite_Coal</option>
                  <option value={Municipal_Waste}>Municipal_Waste</option>
                  <option value={Natural_Gas }>Natural_Gas</option>
                  <option value={Petroleum_Coke}>Petroleum_Coke</option>
                  <option value={Propane_Gas}>Propane_Gas</option>
                  <option value={Residual_Fuel}>Residual_Fuel</option>
                  <option value={Subbituminous_Coal}>Subbituminous_Coal</option>
                  <option value={Tire_Fuel}>Tire_Fuel</option>
                  <option value={Waste_0il}>Waste_0il</option>
                </select>
              </div>

              <button className="shipping-btn" onClick={submit}>Submit</button>
             
            </form>
          </div>
   

                <div className="cont">
                  <div className="car">
                    <div className="bx">
                        <div className="con">
                            <h2> <GiGooeyMolecule/></h2>
                            <h3>Your Fuel CO<sub>2</sub> footprint:</h3>
                            <p>{carbon_g} Gramms</p>
                            <p>{carbon_kg} Kgs</p>
                            <a href="https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions"><MdReadMore/></a>
                            <h2> <GiGooeyMolecule/></h2>
                        </div>
                      </div>
                    </div>
                  </div>



    </div>
    </div>
     
  );
  

  }
export default Fuel;
