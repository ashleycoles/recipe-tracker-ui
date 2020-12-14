import { useQuery, gql } from '@apollo/client';

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

function Recipes() {
    const {loading, error, data} = useQuery(RECIPES);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error:(</p>

    return data.recipes.map((item) => {
        return (
            <div key={item._id}>
            <p>{item.name}</p>
        </div>
        );
    });
}

export default Recipes;