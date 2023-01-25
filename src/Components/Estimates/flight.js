import React, {useEffect, useState} from "react";


function Flight(){

    const [passengers,setPessengers] = useState(0)
    const [depart_airport, setDepart_Airport] = useState('')
    const [destination_airport,setDestination_airport] = useState('')

    let dataUrl = "https://www.carboninterface.com/api/v1/estimates"

    let  contentType = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization" : "Bearer dxVK9cYv5JgfapDEKE5G4Q"
        },
        body: JSON.stringify({
            "type": "flight",
            "passengers": passengers,
            "legs": [
              {"departure_airport": depart_airport, "destination_airport": destination_airport},
              {"departure_airport": depart_airport, "destination_airport": destination_airport}
            ]
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
                <input type="number" value={passengers} placeholder="number_of_passengers" onChange={(e)=>{
                    e.preventDefault()
                    setPessengers(e.target.value)}}/>
                <input type="text" value={depart_airport} placeholder="airport_IATA_code" onChange={(e)=>{
                    e.preventDefault()
                    setDepart_Airport(e.target.value)}}/>
                <input type="text" value={destination_airport} placeholder="airport_IATA_code" onChange={(e)=>{
                    e.preventDefault()
                    setDestination_airport(e.target.value)}}/>
                {/* <a href="#" id="submitBtn" >
                    <span>Submit</span>
                    <div class="liquid"></div>
                </a> */}
                <button  onClick={(e)=>handleSubmit(e)}>Submit</button>

            </form>
        </div>
    )
}

export default Flight;