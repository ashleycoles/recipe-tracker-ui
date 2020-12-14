import {gql, useQuery} from "@apollo/client";

const CUISINES = gql`
    query {
        cuisines {
            _id
            name
        }
    }
`;

function CuisinesFilter(props) {

    const {loading: cuisinesLoading, error: cuisinesError, data: cuisinesData} = useQuery(CUISINES);

    if (cuisinesLoading) return <p>Loading...</p>
    if (cuisinesError) return <p>Error: {cuisinesError}</p>

    const changeCuisine = (e) => {
        let newCuisine = e.target.value;
        props.setCuisineFilter(newCuisine);
    }

    const options = cuisinesData.cuisines.map((item) => {
        return (
            <option key={item._id} value={item.name}>{item.name}</option>
        )
    })

    return (
        <select name="cuisine" onChange={(e) => {changeCuisine(e)}}>
            <option value="">All</option>
            {options}
        </select>
    );
}

export default CuisinesFilter;