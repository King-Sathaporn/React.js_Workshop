import {useState, createContext} from 'react'
import MenuComponen from './components/MenuComponent/MenuComponent'
import QuizComponent from './components/QuizComponent/QuizComponent'
import ScoreComponent from './components/ScoreComponent/ScoreComponent'

import "./App.css";

export const DataContext = createContext()

function App() {

  const [state, setState] = useState("menu")
  const [score, setScore] = useState(0)

  return (
    <DataContext.Provider value={{state, setState, score, setScore}}>
      <div className="App">
        <h1>Quiz Application</h1>
        {state === "menu" && <MenuComponen/>}
        {state === "quiz" && <QuizComponent/>}
        {state === "score" && <ScoreComponent/>}
    </div>
    </DataContext.Provider>
  );
}

export default App;
