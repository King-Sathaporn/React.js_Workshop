import { useContext } from "react";
import { DataContext } from "../../App";
import QuizData from "../../data/QuizData";

const ScoreComponent = () => {

    const {score, setState, setScore} = useContext(DataContext);

    const reStart = () => {
        setState("menu");
        setScore(0);
    }

    return (
        <div className="score-component">
            <h1>Score Component</h1>
            <h2>{score}/{QuizData.length}</h2>
            <button onClick={()=>reStart()}>Quiz again</button>
        </div>
    )
}

export default ScoreComponent;