import { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [countries, setCountries] = useState([]);
    const [text, setText] = useState('');
    const [textFilter] = useState(['capital']);



    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

    useEffect(() => {
        const baseUrl = 'https://restcountries.com/v3.1/all';
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
        },[])
    
    const searchCountries = (countries) => {
        return countries.filter((item)=>{
            // eslint-disable-next-line
            return textFilter.some((filter)=>{
                if(item[filter]){
                    return item[filter].toString().toLowerCase().indexOf(text.toLowerCase()) > -1
                }
            })
        })
    }
    
    return (
        <div className="container">
            <div className='search-container'>
                <label htmlFor="search-form">
                    <input type="text" 
                    className='search-input' 
                    id="search-form" 
                    placeholder="Search a country with capital city" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </label>
            </div>
            <ul className='row'>
                {searchCountries(countries).map((item, index) => {
                    return (
                        <li key={index}>
                            <div className='card'>
                                <div className='card-title'>
                                    <img src={item.flags.svg} alt={item.name.official}/>
                                </div>
                                <div className='card-body'>
                                    <div className='card-description'>
                                        <h2>{item.name.official}</h2>
                                        <ol className='card-list'>
                                            <li>Region : <span>{item.region}</span></li>
                                            <li>Capital : <span>{item.capital}</span></li>
                                            <li>Population : <span>{formatNumber(item.population)}</span></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
