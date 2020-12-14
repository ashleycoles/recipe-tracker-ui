import { useQuery, gql } from '@apollo/client';

const RECIPES = gql`
    query recipes($cuisine: String!) {
        recipes(cuisine: $cuisine)  {
            _id
            name
            ingredients {
                name
                amount
            }
        }
    }
`;


function RecipesDisplay(props) {
    const {loading: recipesLoading, error: recipesError, data: recipesData} = useQuery(RECIPES, {
        variables: { "cuisine": props.cuisine }
    });

    if (recipesLoading) return <p>Loading...</p>
    if (recipesError) return <p>Error: {recipesError}</p>

    const recipes = recipesData.recipes.map((item) => {
        return (
            <div key={item._id}>
                <p>{item.name}</p>
            </div>
        );
    });

    return (
        <div className="container">
            {recipes}
        </div>
    )
}

export default RecipesDisplay;