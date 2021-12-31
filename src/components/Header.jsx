import { PinDropSharp } from "@material-ui/icons";
import React from "react";

function Header(props) {
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dateObj = new Date();
    const currentDate = dateObj.getDate();
    const currentMonth = monthNames[dateObj.getMonth()];
    const currentYear = dateObj.getFullYear();
    const finalDate = currentDate + " " + currentMonth + " " + currentYear;



    return <div className='header'><h1 className="home-title">Habit Tracker</h1><p>{finalDate}</p>{props.deleteMode && <div className="header-delete"><p style = {{fontSize: "24px", margin: "5px"}}>DELETE MODE</p><p style={{ margin: "1px", fontSize: "20px"}}>Click on any card to delete</p></div>}</div>
}

export default Header;