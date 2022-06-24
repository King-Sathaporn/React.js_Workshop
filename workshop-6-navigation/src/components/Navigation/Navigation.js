import { Link } from "react-router-dom";
import { FaBars} from "react-icons/fa";
import { BsArrowBarLeft } from "react-icons/bs";
import { useState } from "react";
import menuData from "../../assets/data/menuData";
import "./Navigation.css";

const Navigation =()=>{
    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = ()=>setShowMenu(!showMenu);

    return(
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to="#" className="menu-bar">
                        <FaBars onClick={toggleMenu}/>
                    </Link>
                </div>
            </div>
            <nav className={showMenu ? "navbar-menu active":"navbar-menu"}>
                <ul className="navbar-menu-item" onClick={toggleMenu}>
                    <li className="menu-text">
                        <Link to="#" className="menu-bar"><BsArrowBarLeft onClick={toggleMenu}/></Link>
                    </li>
                    {menuData.map((item, index)=>{
                        return(
                            <li key={index} className="menu-text">
                                <Link to={item.path}>{item.icon}<span>{item.name}</span></Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Navigation;