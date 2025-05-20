import { useImperativeHandle, useRef } from "react"
export default function ResultModal({ref, targetTime, remainingTime, onReset}) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedTime = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => { 
        return {
            open() {
                dialog.current.showModal();
            }
        }
    } )

    const score = Math.round((1 - timerRemaining / (targetTime *1000) )*1000);
    return (
        <dialog ref = {dialog} className="result-modal" open >
            { userLost = true && <h2> Your lost </h2> }
            {!userLost && <h2> your score: {score} </h2> }
            <p> Targe t time was <strong>{targetTime}</strong> seconds</p>
            <p> You stopped it with <strong>{formattedTime} seconds left </strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
}