import { useState, useEffect, useContext } from "react";
import QuizData from "../../data/QuizData";
import { DataContext } from "../../App";

const QuizComponent = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const {score, setScore, setState} = useContext(DataContext);

    useEffect(() => {
        checkAnswer()
        //eslint-disable-next-line
    },[selectedAnswer])

    const checkAnswer = () => {
        if(selectedAnswer !== ""){
            if(selectedAnswer === QuizData[currentQuestion].answer){
                setScore(score + 1)
                nextQuestion()
            }else{
                nextQuestion()
            }
            
        }
    }

    const nextQuestion = () => {
        if(currentQuestion === QuizData.length-1){
            setState("score")
        }
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer("")
    }

    return (
        <div className="quiz-component">
            <h1>{QuizData[currentQuestion].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectedAnswer("A")}>{QuizData[currentQuestion].A}</button>
                <button onClick={()=>setSelectedAnswer("B")}>{QuizData[currentQuestion].B}</button>
                <button onClick={()=>setSelectedAnswer("C")}>{QuizData[currentQuestion].C}</button>
                <button onClick={()=>setSelectedAnswer("D")}>{QuizData[currentQuestion].D}</button>
            </div>
            <p>{`${currentQuestion+1}/${QuizData.length}`}</p>
        </div>
    )
}

export default QuizComponent;