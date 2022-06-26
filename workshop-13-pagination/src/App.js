import { useState, useEffect } from 'react';
import MenuData from './assets/data/MenuData';
import MenuComponent from './components/MenuComponent/MenuComponent';
import './App.css';


function App() {

    const [foodData, setFoodData] = useState(MenuData);
    const [foodList, setFoodList] = useState([]);
    const [page, setPage] = useState(0);

    const pagination = () =>{
        const pageSize = 4;
        const pageCount = Math.ceil(MenuData.length / pageSize);
        const newMenu = Array.from({length:pageCount},(data,index)=>{
            const initial = index * pageSize;
            const final = initial + pageSize;
            return MenuData.slice(initial,final);
        })
        return newMenu;
    }

    const handlePage = (index) =>{
        setPage(index);
    }

    useEffect(() => {
        const pageinate = pagination();
        setFoodList(pageinate);
        setFoodData(pageinate[page]);
    },[page])

    return (
        <div className="App">
            <h1>FoodCard | Pagination</h1>
            <div className='container'>
                {foodData.map((data, index) => {
                    return(
                        <MenuComponent key={index} {...data} />
                    )
                })}
            </div>
            <div className='pagination-container'>
                {foodList.map((data, index) => {
                    return(
                            <button key={index} className={`page-btn ${index === page? "active-btn":null}`} onClick={()=>handlePage(index)}>{index+1}</button>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
