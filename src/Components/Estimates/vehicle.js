import React, {useState} from "react";
// import Display from "../display/Display";
import {GiGooeyMolecule} from 'react-icons/gi';
import {MdReadMore} from 'react-icons/md'


function Vehicle(){

    const [vehicleType,setVehicleType] = useState("")
    const [distance, setDistance] = useState()

    // the  carbon data

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
            "type": "vehicle",
            "distance_unit": "mi",
            "distance_value": distance,
            "vehicle_model_id": vehicleType
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

function handleSelectedOption(e){
    e.preventDefault()
    setVehicleType(e.target.value)



}

const volvo = "b07384b4-1f6b-49c6-8250-efc92fdfe913"
const toyota ="55e8b94f-8ffa-41f8-8161-e7d9fc41261e"
const mercedes = "e19628d2-ce7e-45b3-ac67-d94dc3ad9900"
const honda ="1273a3a1-ee4c-4bd7-b961-db6011437656"
const nissan ="12af6b32-45fe-428a-a750-3fc1219fd43f"
const hyundai ="70597c72-f20a-4d6a-8494-99bb16cfd949"
const landRover = "9839a759-cb54-44b0-a928-b65f36eb1b15"
const bmw ="c7e6ba17-6641-45d5-925a-716f896a5214"
const suzuki ="5814592f-0be7-40f2-82ba-4f30df4d60cb"
const  audi = "54ba2c8a-a6d0-4ba0-becd-f81afbac46c3"
const subaru ="ef068e02-95aa-4026-9d45-d095071d8343"
const volkswagen ="88bf05c6-391e-4697-affd-a897ba701168"
const mazda = "e92e03fb-dcaf-4d37-956b-d56571bc5440"



    return(
        <div>
        <h2 id="header-estimate">Vehicle CO<sub>2</sub> Estimate</h2>
        <div className="shipping ">
            {/* <form>
                <select value={vehicleType} onChange={handleSelectedOption}>
                    <option value="" disabled selected>Vehicle make</option>
                    <option value={volvo}>Volvo</option>
                    <option value={toyota}>Toyota</option>
                    <option value={mercedes}>Mercedes</option>
                    <option value={honda}>Honda</option>
                    <option value={nissan}>Nissan</option>
                    <option value={hyundai}>Hyundai</option>
                    <option value={landRover}>Land Rover</option>
                    <option value={suzuki}>Suzuki</option>
                    <option value={subaru}>Subaru</option>
                    <option value={volkswagen}>Volkswagen</option>
                    <option value={audi}>Audi</option>
                    <option value={bmw}>BMW</option>
                    <option value={mazda}>Mazda</option>
                </select>
                <input type="number" value={distance} placeholder="Distance (Kms)" onChange={(e)=>{setDistance(e.target.value)}}/>
                {/* <a href="#" id="submitBtn" >
                    <span>Submit</span>
                    <div class="liquid"></div>
                </a> */}
                {/* </form> */} 


                <div className="form-box">
	                <form>
		                <span className="text-center">Vehicle Estimate</span>
	                    <div className="input-container">
                            <select value={vehicleType} onChange={handleSelectedOption}>
                                <option value="" disabled selected>Vehicle Model</option>
                                <option value={volvo}>Volvo</option>
                                <option value={toyota}>Toyota</option>
                                <option value={mercedes}>Mercedes</option>
                                <option value={honda}>Honda</option>
                                <option value={nissan}>Nissan</option>
                                <option value={hyundai}>Hyundai</option>
                                <option value={landRover}>Land Rover</option>
                                <option value={suzuki}>Suzuki</option>
                                <option value={subaru}>Subaru</option>
                                <option value={volkswagen}>Volkswagen</option>
                                <option value={audi}>Audi</option>
                                <option value={bmw}>BMW</option>
                                <option value={mazda}>Mazda</option>
                            </select>
		                    {/* <input type="text" required=""/> */}
		                    {/* <label>Vehicle Model</label>		 */}
	                    </div>
	                    <div className="input-container">		
		                    <input  placeholder="Distance - Kms" type="text" required="" value={distance} onChange={(e)=>{setDistance(e.target.value)}} />
		                    {/* <label>Distance Covered</label> */}
	                    </div>
		            <button type="button" className="shipping-btn" onClick={handleSubmit}>submit</button>
                </form>	
            </div>

            {/* <Display carbonKg={carbonKg} carbonGrams={carbonGrams}/> */}


            <div className="cont">
                <div className="car">
                    <div className="bx">
                        <div className="con">
                            <h2> <GiGooeyMolecule/></h2>
                            <h3>Your Vehicle CO<sub>2</sub> footprint:</h3>
                            <p>{carbonGrams} Gramms</p>
                            <p>{carbonKg} Kgs</p>
                            <a href="https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions"><MdReadMore/></a>
                            <h2> <GiGooeyMolecule/></h2>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </div>
    )
}

export default Vehicle;