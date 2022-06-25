const Dropdown = ({filteredMenus}) => {

    return(
        <nav>
            <h1>Dynamic Dropdown</h1>
            <select className="manu"onChange={filteredMenus}>
                <option value="all-menu" >All menu</option>
                <option value="fried" >Fried</option>
                <option value="steak">Steak</option>
                <option value="soup">Soup</option>
                <option value="drink">Drink</option>
            </select>
        </nav>
    )
}

export default Dropdown;