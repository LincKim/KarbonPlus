import React from "react";

function TableData({carbonKg, carbonGrams}){
    return(
        <tr>
            <td>{Object.keys(carbonKg)}</td>
            <td>{carbonKg.shipping}</td>
            <td>{carbonGrams.shipping}</td>
        </tr>
    )
}

export default TableData