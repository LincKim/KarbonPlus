import React, {useEffect, useState} from "react";


function Electricity(){

    const [weight,setWeight] = useState(0)
    const [distance, setDistance] = useState(0)
    const [transportMthd,setTransportMthd] = useState("")

    let dataUrl = "https://www.carboninterface.com/api/v1/estimates"

    let  contentType = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization" : "Bearer dxVK9cYv5JgfapDEKE5G4Q"
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
        fetch(dataUrl,contentType)
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
            <form>
                <input type="number" value={weight} placeholder="Weight (Kgs)" onChange={(e)=>{
                    e.preventDefault()
                    setWeight(e.target.value)}}/>
                <input type="number" value={distance} placeholder="Distance (Kms)" onChange={(e)=>{
                    e.preventDefault()
                    setDistance(e.target.value)}}/>
                <input type="text" value={transportMthd} placeholder="Transport Method" onChange={(e)=>{
                    e.preventDefault()
                    setTransportMthd(e.target.value)}}/>
                {/* <a href="#" id="submitBtn" >
                    <span>Submit</span>
                    <div class="liquid"></div>
                </a> */}
                <button  onClick={(e)=>handleSubmit(e)}>Submit</button>

            </form>
        </div>
    )
}

export default Electricity;