import React, { useState } from "react";
import {GiGooeyMolecule} from 'react-icons/gi';
import {MdReadMore} from 'react-icons/md'


function Electricity(){

    const [elec_Value,setElec_Value] = useState([])
    const [carbonKg, setCarbonKg] = useState(0)
    const [carbonGrams, setCarbonGrams] = useState(0)
    
    let dataUrl = "https://www.carboninterface.com/api/v1/estimates"

    let  contentType = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization" : "Bearer dxVK9cYv5JgfapDEKE5G4Q"
        },
        body: JSON.stringify({

                "type": "electricity",
                "electricity_unit": "mwh",
                "electricity_value": elec_Value,
                "country": "gb",
                "state": ""
              
        })

    }

function handleSubmit(e){
    e.preventDefault()
    fetch(dataUrl,contentType)
    .then(response=>response.json())
    .then((data)=>{
            console.log(data)
            setCarbonKg(data.data.attributes.carbon_kg)
            setCarbonGrams(data.data.attributes.carbon_g)
    })
    setElec_Value([])
}

    return(
        <div className="shipping">
            <div className="form-box">
                
                <form>
                    <p className="text-center">Electricity Carbon Estimates</p>
                    <div className="input-container">
                        <input type="number" value={elec_Value} placeholder="Unit(mwh)" onChange={(e)=>{
                            e.preventDefault()
                            setElec_Value(e.target.value)}}/>
                    </div>
                        
                    <button className='shipping-btn' onClick={handleSubmit}>Submit</button>

                </form>
            
                
            </div>

                <div className="cont">
                    <div className="car">
                        <div className="bx">
                            <div className="con">
                                <h2> <GiGooeyMolecule/></h2>
                                <h3>Your Electricity CO<sub>2</sub> footprint:</h3>
                                <p>{carbonGrams} Gramms</p>
                                <p>{carbonKg} Kgs</p>
                                <a href="https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions"><MdReadMore/></a>
                                <h2> <GiGooeyMolecule/></h2>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Electricity;