function CusinesFilter(props) {

    const options = props.cuisines.cuisines.map((item) => {
        return (
            <option key={item._id} value={item.name}>{item.name}</option>
        )
    })
    const changeCuisine = (e) => {
        let newCuisine = e.target.value;
        props.setCuisineFilter(newCuisine);
    }

    return (
        <select name="cuisine" onChange={(e) => {changeCuisine(e)}}>
            <option value="">All</option>
            {options}
        </select>
    );
}

export default CusinesFilter;