import React, {useEffect, useState} from "react";


function Shipping(){

    const [weight,setWeight] = useState(0)
    const [distance, setDistance] = useState(0)
    const [transportMthd,setTransportMthd] = useState("")

    let dataUrl = "https://www.carboninterface.com/api/v1/estimates"

    let  contentType = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization" : "Bearer qksb4bmwhCJqPDJpOgvLuQ"
        },
        body: JSON.stringify({
            "type": "shipping",
            "weight_value": weight,
            "weight_unit": "kg",
            "distance_value": distance,
            "distance_unit": "km",
            "transport_method": transportMthd
        })

    }


    useEffect(()=>{
        fetch(url,contentType)
        .then(response=>response.json())
        .then((data)=>{
            console.log(data)
        })

    },[handleSubmit])


function handleSubmit(e){
    e.preventDefault()
}




    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="number" value={weight} placeholder="Weight (Kgs)" onChange={(e)=>setWeight(e.target.value)}/>
                <input type="number" value={distance} placeholder="Distance (Kms)" onChange={(e)=>setDistance(e.target.value)}/>
                <input type="text" value={transportMthd} placeholder="Transport Method" onChange={(e)=>setTransportMthd(e.target.value)}/>
                <a href="#" id="submitBtn">
                    <span>Submit</span>
                    <div class="liquid"></div>
                </a>

            </form>
        </div>
    )
}

export default Shipping;