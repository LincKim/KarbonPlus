import { useState } from "react";
import React from "react";

function Fuel() {
  const [responseData, setResponseData] = useState(0);
  const [fuelType, setFuelType]= useState("")
 
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
      .then(response => {
        console.log(response)
        console.log(response.data.attributes.carbon_g+" grams",response.data.attributes.carbon_kg+" Killograms")
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


        console.log(fuelType)
        console.log(responseData)

        function handleOptionChange(e){
        e.preventDefault()
            setFuelType(e.target.value)
        }

    return (
        <div>
        <form >
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
         
        <input type="number" value={responseData} onChange={(e=>setResponseData(e.target.value))}/>
        
        
    </form>
    <button onClick={submit}>Submit</button>
    </div>
     
  );
  

  }
export default Fuel;
