import React, {useState} from "react";


function Flight(){

    const [passengers,setPessengers] = useState([])
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

function handleSubmit(e){
    e.preventDefault()
     
    fetch(dataUrl,contentType)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data)
    })

}

//IATA airport codes
const nairobi = 'nbo'
const london = 'lrh'
const capetown = 'cpt'
const tokyo = 'hnd'
const sanPaulo = 'san'
const mexicoCity = 'azp'
const ottawa = 'ynd'
const Dar_Es_Salaam = 'dar'
const Mombasa = 'mba'
const lagos = 'los'
const newYork = 'jfk'
const berlin = 'bml'
const beijing = 'pkx'
const hongKong = 'hkg'
const sydney = 'bwu'
const texas = 'ggg'
const seattle = 'sea'
const addis = 'add'
const kampala = 'jin'


    return(
        <div className="center"> 
            <h2>Flight Carbon Estimates</h2>
                 <form>
                    
                    <input type="number" className="flight" value={passengers} placeholder="number_of_passengers" onChange={(e)=>{
                        e.preventDefault()
                        setPessengers(e.target.value)}}/>

                    <select type="text" value={depart_airport} placeholder="airport_IATA_code" onChange={(e)=>{
                        e.preventDefault()
                        setDepart_Airport(e.target.value)}}>
                            <option value={''}>Departure Airport</option>
                            <option value={nairobi}>Nairobi</option>
                            <option value={london}>London</option>
                            <option value={capetown}>Cape Town</option>
                            <option value={tokyo}>Tokyo</option>
                            <option value={sanPaulo}>San Paulo</option>
                            <option value={mexicoCity}>Mexico City</option>
                            <option value={ottawa}>Ottawa</option>
                            <option value={Dar_Es_Salaam}>Dar es Salaam</option>
                            <option value={Mombasa}>Mombasa</option>
                            <option value={lagos}>Lagos</option>
                            <option value={newYork}>New York</option>
                            <option value={berlin}>Berlin</option>
                            <option value={hongKong}>Hong Kong</option>
                            <option value={sydney}>Sydney</option>
                            <option value={texas}>Texas</option>
                            <option value={seattle}>Seattle</option>
                            <option value={addis}>Addis Ababa</option>
                            <option value={kampala}>Kampala</option>
                            <option value={beijing}>Beijing</option>
                    </select>
                    <select type="text" value={destination_airport} placeholder="airport_IATA_code" onChange={(e)=>{
                        e.preventDefault()
                        setDestination_airport(e.target.value)}}>
                            <option value={''}>Destination Airport</option>
                            <option value={nairobi}>Nairobi</option>
                            <option value={london}>London</option>
                            <option value={capetown}>Cape Town</option>
                            <option value={tokyo}>Tokyo</option>
                            <option value={sanPaulo}>San Paulo</option>
                            <option value={mexicoCity}>Mexico City</option>
                            <option value={ottawa}>Ottawa</option>
                            <option value={Dar_Es_Salaam}>Dar es Salaam</option>
                            <option value={Mombasa}>Mombasa</option>
                            <option value={lagos}>Lagos</option>
                            <option value={newYork}>New York</option>
                            <option value={berlin}>Berlin</option>
                            <option value={hongKong}>Hong Kong</option>
                            <option value={sydney}>Sydney</option>
                            <option value={texas}>Texas</option>
                            <option value={seattle}>Seattle</option>
                            <option value={addis}>Addis Ababa</option>
                            <option value={kampala}>Kampala</option>
                            <option value={beijing}>Beijing</option>
                    </select>
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