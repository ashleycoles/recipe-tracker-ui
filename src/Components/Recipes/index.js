import { useQuery, gql } from '@apollo/client';
import CusinesFilter from "./CusinesFilter";

const RECIPES = gql`
    query {
      recipes {
        _id
        name
        ingredients {
          name
          amount
        }
      }
    }
`;

const CUISINES = gql`
    query {
        cuisines {
            _id
            name
        }
    }
`;

function Recipes() {
    const {loading: recipesLoading, error: recipesError, data: recipesData} = useQuery(RECIPES);
    const {loading: cuisinesLoading, error: cuisinesError, data: cuisinesData} = useQuery(CUISINES);


    if (recipesLoading || cuisinesLoading) return <p>Loading...</p>
    if (recipesError || cuisinesError) return <p>Error:(</p>

    const recipes = recipesData.recipes.map((item) => {
        return (
            <div key={item._id}>
            <p>{item.name}</p>
        </div>
        );
    });

    return (
        <div>
            <CusinesFilter cuisines={ cuisinesData }/>
            <div className="container">
                {recipes}
            </div>
        </div>
    )
}

export default Recipes;