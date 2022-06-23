import { createContext, useState } from 'react';
import Title from './components/TitleComponent/Title';
import Content from './components/ContentComponent/Contnet';

import './App.css';

export const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState('Light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        <div className="App">
            <Title />
            <Content />
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
