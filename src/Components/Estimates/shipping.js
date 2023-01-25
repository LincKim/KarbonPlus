import React, {useState} from "react";
import Display from "../Display";


function Shipping(){

    const [weight,setWeight] = useState(0)
    const [distance, setDistance] = useState(0)
    const [transportMthd,setTransportMthd] = useState("")


    const [carbonKg, setCarbonKg] = useState(0)
    const [ carbonGrams, setCarbonGrams] = useState(0)

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




function handleSubmit(e){
    e.preventDefault()
    fetch(dataUrl,contentType)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data)
        console.log(data.data.attributes.carbon_g+" grams. ",data.data.attributes.carbon_kg+" grams." )
        setCarbonKg(data.data.attributes.carbon_kg)
        setCarbonGrams(data.data.attributes.carbon_g)
    })
}




    return(
        <div>
            <form>
                <input type="number" value={weight} placeholder="Weight (Kgs)" onChange={(e)=>setWeight(e.target.value)}/>
                <input type="number" value={distance} placeholder="Distance (Kms)" onChange={(e)=>setDistance(e.target.value)}/>
                <input type="text" value={transportMthd} placeholder="Transport Method" onChange={(e)=>setTransportMthd(e.target.value)}/>
                {/* <a href="#" id="submitBtn" >
                    <span>Submit</span>
                    <div class="liquid"></div>
                </a> */}
                <button  onClick={()=>handleSubmit}>Submit</button>
            </form>

            <Display carbonKg={carbonKg} carbonGrams={carbonGrams}/>


        </div>
    )
}

export default Shipping;