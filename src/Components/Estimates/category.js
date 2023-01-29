import React from "react";
import {Link} from "react-router-dom";

function Category(){
    return(
        <div>
                    <details className="dropdown">
          <summary role="button">
            <a className="button">CATEGORIES</a>
          </summary>
          <ul>
            <li><Link to="/flight">Flight</Link></li>
            <li><Link to="/electricity">Electricty</Link></li>
            <li><Link to="/fuel">Fuel</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/vehicle">Vehicle</Link></li>
          </ul>
          </details>
        </div>
    )
}

export default Category;