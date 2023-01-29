import React, {useState} from "react";
// import Display from "../display/Display";
// import TableData from "../analytics/tabledata";
import {GiGooeyMolecule} from 'react-icons/gi';
import {MdReadMore} from 'react-icons/md'


function Shipping(){

    //takes in the user inputs to give back the estimate

    const [weight,setWeight] = useState("")
    const [distance, setDistance] = useState("")
    const [transportMthd,setTransportMthd] = useState("")


    // sets the carbon estimate data to a state variable

    const [carbonKg, setCarbonKg] = useState(0)
    const [ carbonGrams, setCarbonGrams] = useState(0)


    // takes in the result data to be used in creating a analysis table

    let shippingC02kgs = {shipping: `${carbonKg}`}
    let shippingC02g = {shipping: `${carbonGrams}`}

    console.log(shippingC02g)
    console.log(shippingC02kgs)

    // the fetch url

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

    function handleSelectedOption(e){
        e.preventDefault()
        setTransportMthd(e.target.value)
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

        setWeight("")
        setDistance("")
        setTransportMthd("")
    }

    const ship = "ship"
    const truck = "truck"
    const plane = "plane"
    const train = "train"






    return(

        <div>
        {/* <h2 id="header-estimate"> Estimates</h2> */}
        <div className="shipping">
            {/* <form>
                <input type="text" value={weight} placeholder="Weight (Kgs)" onChange={(e)=>setWeight(e.target.value)}/>
                <input type="text" value={distance} placeholder="Distance (Kms)" onChange={(e)=>setDistance(e.target.value)}/>
                <input type="text" value={transportMthd} placeholder="Transport Method" onChange={(e)=>setTransportMthd(e.target.value)}/>

                <button  onClick={handleSubmit}>Submit</button>
            </form> */}

            <div className="form-box card">
	            <form>
		            <p className="text-center">Shipping Estimate</p>
	                <div className="input-container">
                        <input type="text" value={weight} placeholder="Cargo(Kgs)" onChange={(e)=>setWeight(e.target.value)}/>
		                {/* <label>Cargo Weight</label>		 */}
	                </div>
	                <div className="input-container">		
                        <input placeholder="Distance(Kms)" type="text" value={distance} onChange={(e)=>setDistance(e.target.value)}/>
		                {/* <label>Travel Distance</label> */}
	                </div>
                    <div className="input-container">
                       <select value={transportMthd}onChange={handleSelectedOption}>
                            <option value="" disabled selected>Transport</option>
                            <option value={truck}>Truck</option>
                            <option value={plane}>Plane</option>
                            <option value={ship}>Ship</option>
                            <option value={train}>Train</option>
                       </select>
		                {/* <label>Transport</label>		 */}
	                </div>
                    <button className="shipping-btn"  onClick={handleSubmit}>Submit</button>
		       
                </form>	
            </div>

            {/* <Display carbonKg={carbonKg} carbonGrams={carbonGrams}/> */}

            <div className="cont">
                <div className="car">
                    <div className="bx">
                        <div className="con">
                            <h2> <GiGooeyMolecule/></h2>
                            <h3>Your Shipping CO<sub>2</sub> footprint:</h3>
                            <p>{carbonGrams} Gramms</p>
                            <p>{carbonKg} Kgs</p>
                            <a href="https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions"><MdReadMore/></a>
                            <h2> <GiGooeyMolecule/></h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* <TableData carbonGrams={shippingC02g} carbonKg={shippingC02kgs}/> */}


        </div>
        </div>
    )
}

export default Shipping;