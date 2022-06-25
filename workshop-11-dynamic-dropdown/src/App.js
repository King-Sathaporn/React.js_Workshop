import { useState } from "react";
import MenuData from "./assets/data/MenuData";
import Dropdown from './components/Dropdown/Dropdown';
import MenuImage from './components/MenuImage/MenuImage';
import './App.css';


function App() {
  const [menus, setMenus] = useState(MenuData);
  const filteredMenus = (e) =>{
    const category = e.target.value;
    if(category === 'all-menu'){
      setMenus(MenuData);
    }
    else{
      const result = MenuData.filter((item)=>{
        return item.menu === category
      });
      setMenus(result);
    }
  }
  return (
    <div className="container">
      <Dropdown filteredMenus={filteredMenus}/>
      <div className="content">
        {menus.map((menu, index)=>{
          return <MenuImage key={index} {...menu}/>
        })}
      </div>
    </div>
  );
}

export default App;
