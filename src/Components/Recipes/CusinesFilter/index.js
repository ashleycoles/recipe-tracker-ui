function CusinesFilter(props) {

    const options = props.cuisines.cuisines.map((item) => {
        return (
            <option value={item.name}>{item.name}</option>
        )
    })

    return (
        <select name="cuisine">
            {options}
        </select>
    );
}

export default CusinesFilter;