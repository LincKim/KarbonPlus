import React from "react";
import {GiGooeyMolecule} from 'react-icons/fa';

function Display({carbonGrams, carbonKg}){

    return(
<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2> <GiGooeyMolecule/></h2>
        <h3>Your Carbon usage is:</h3>
        <p>{carbonGrams} Gramms</p>
        <p>{carbonKg} Kgs</p>
        <a href="#">Read </a>
      </div>
    </div>
  </div>
</div>
    )

}

export default Display ;