import { CheckBox } from "@material-ui/icons";
import React from "react";


function Habit(props) {
    
    return (
        <div className="habit-card" onClick={() => props.onDelete(props.id)}>
            <p className="habit-title" >{props.habitName}</p>
            <button className="habit-done-button" onClick={() => {props.onDone(props.id)}}><p style={{fontSize: "20px", margin: "10px"}}>✔</p>{props.habitFreq > 1 && <p className="habit-freq">{props.habitCompleted}/{props.habitFreq} done</p>}</button>
        </div>
    )
}

export default Habit;