import { useState } from 'react';
import ContentComponent from './components/ContentComponent/ContentComponent.js';
import data from './assets/data/data.js'
import './App.css';


function App() {
  const [content, setContent] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Web development tools</h3>
        <section>
          {content.map((data) => {
            return <ContentComponent key={data.id} {...data}/>
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
