import { useRef, useState} from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({title, targetTime}) {

    //const[timeStarted, setTimerStarted] = useState();
    const[timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
    

    const timer = useRef();
    const dialog = useRef();

    const timeisActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;

    if (timeisActive <=0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimerRemaining(targetTime * 1000);
    }
    function handleStart(){
            timer.current = setInterval(() => {
                setTimerRemaining(previoustime => previoustime - 10)
            }, 10);
    }
    function handleStop(){
        clearInterval(timer.current);
       dialog.current.open();
    }

   
    return(
        <>
            {<ResultModal  ref = {dialog} targetTime={targetTime} 
            remainingTime= {timerRemaining}
            onReset={handleReset}
            />}
            <section className="challenge">
                <h2>{title}</h2>
                
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}

                </p>
                <p onClick={timeisActive ? handleStop : handleStart}>
                    <button > {timeisActive ? 'Stop' : 'Start'}</button> 
                </p>
                <p className={timeisActive ? 'active' : undefined}>
                    {timeisActive ? 'Timer started' : 'Click to start the timer'}
                </p>
                
            </section>
        </>
            
    )
}