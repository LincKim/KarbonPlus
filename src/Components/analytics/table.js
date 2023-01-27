import React from "react";
import TableData from "./tabledata";


function Table(){
     return(
        <div>
            <table>
                <tbody>
                    <tr id="table-header">
                        <th>Category</th>
                        <th>CO<sub>2</sub> Estimate kgs</th>
                        <th>C0<sub>2</sub> Estimate Grams</th>

                    </tr>
                    {/* each searched item*/}
                    <TableData/>
                </tbody>
            </table>
            
        </div>
     )
}

export default Table;