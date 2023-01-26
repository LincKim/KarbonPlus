import React, { useState } from "react";


function Electricity(){

    const [elec_Value,setElec_Value] = useState([])
    
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
    })
}

    return(
        <div className="center">
            <h2>Electricity Carbon Estimates</h2>
                <form>
                    <input type="number" value={elec_Value} placeholder="Unit(mwh)" onChange={(e)=>{
                        e.preventDefault()
                        setElec_Value(e.target.value)}}/>
                    
                    <button onClick={handleSubmit}>Submit</button>

                </form>
        </div>
    )
}

export default Electricity;