import React from "react";
import {GiGooeyMolecule} from 'react-icons/gi';
import {MdReadMore} from 'react-icons/md'

function Display({carbonGrams, carbonKg}){

    return(
<div className="container">
  <div className="card">
    <div className="box">
      <div className="content">
        <h2> <GiGooeyMolecule/></h2>
        <h3>Your Carbon usage is:</h3>
        <p>{carbonGrams} Gramms</p>
        <p>{carbonKg} Kgs</p>
        <a href="#"><MdReadMore/></a>
        <h2> <GiGooeyMolecule/></h2>
      </div>
    </div>
  </div>
</div>
    )

}

export default Display ;