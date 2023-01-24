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

    },[])







    return(
        <div>
            <form>
                <input type="number" value={weight} placeholder="Weight (Kgs)"/>
                <input type="number" value={distance} placeholder="Distance (Kms)"/>
                <input type="text" value={transportMthd} placeholder="Transport Method"/>
                <a href="#" id="submitBtn">
                    <span>Submit</span>
                    <div class="liquid"></div>
                </a>

            </form>
        </div>
    )
}