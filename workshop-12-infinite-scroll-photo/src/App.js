import { useEffect, useState } from 'react';
import PhotoComponent from './components/PhotoComponent/PhotoComponent';
import './App.css';


function App() {

    const apiUrl = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetachPhotos = async () => {
        setLoading(true);
        try{
            const url = `${apiUrl}${apiKey}&page=${page}`;
            const response = await fetch(`${url}`);
            const data = await response.json();
            setPhotos((OldData=>{
                return [...OldData, ...data];
            }));
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetachPhotos();
        // eslint-disable-next-line
    },[page])

    useEffect(()=>{
       const event = window.addEventListener("scroll",()=>{
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight-200 && !loading){
            setPage((OldPage)=>{
                return OldPage+1;
            })
        }
       })
       return window.removeEventListener("scroll",event)
       // eslint-disable-next-line
    },[])

    return (
        <div className="App">
            <h1>Infinite Scroll Photo | Unsplas API</h1>
            <section className='photos'>
                <div className='display-photo'>
                    {photos.map((data, index) => {
                        return(
                            <PhotoComponent key={index} {...data}/>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default App;
