import {useState} from 'react';
import { useQuery, gql } from '@apollo/client';

import CusinesFilter from "./CusinesFilter";
import RecipesDisplay from "./RecipesDisplay";

const CUISINES = gql`
    query {
        cuisines {
            _id
            name
        }
    }
`;

function Recipes() {
    const [cuisine, setCuisine] = useState("");

    const {loading: cuisinesLoading, error: cuisinesError, data: cuisinesData} = useQuery(CUISINES);

    if (cuisinesLoading) return <p>Loading...</p>
    if (cuisinesError) return <p>Error: {cuisinesError}</p>

    return (
        <div>
            <CusinesFilter cuisines={ cuisinesData } setCuisineFilter={setCuisine}/>
            <div className="container">
                <RecipesDisplay cuisine={cuisine} />
            </div>
        </div>
    )
}

export default Recipes;