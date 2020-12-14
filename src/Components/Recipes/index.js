import {useState} from 'react';

import CuisinesFilter from "./CuisinesFilter";
import RecipesDisplay from "./RecipesDisplay";


function Recipes() {
    const [cuisine, setCuisine] = useState("");

    return (
        <div>
            <CuisinesFilter setCuisineFilter={setCuisine}/>
            <div className="container">
                <RecipesDisplay cuisine={cuisine} />
            </div>
        </div>
    )
}

export default Recipes;