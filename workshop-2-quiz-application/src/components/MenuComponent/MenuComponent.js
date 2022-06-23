import { useContext } from "react";
import { DataContext } from "../../App";

const MenuComponent = (props) => {
    const {setState} = useContext(DataContext);

    return(
        <div className="menu-component">
            <h1>Menu Component</h1>
            <button onClick={()=>setState("quiz")}>Quiz Start</button>
        </div>
    )
}

export default MenuComponent;