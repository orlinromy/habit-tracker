import React from "react";

function Footer(props) {
    return (
        <div className='footer'>
            <button className={props.deleteMode ? "add-habit-disabled" : "add-habit"} onClick={() => props.onAdd(props.deleteMode)}>ADD HABIT</button>
            {(props.habitObj !== undefined && props.habitObj.length !== 0) && <button className="delete-habit" onClick={props.onDelete}>{props.deleteMode ? "EXIT DELETE MODE" : "DELETE HABIT"}</button>}
        </div>
    )
}

export default Footer;
