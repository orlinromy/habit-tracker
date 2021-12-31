import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


function AddHabitForm(props) {
    const [habitDetail, setHabitDetail] = useState({id: "", habitName: "", habitFreq: 1, habitCompleted: 0});

    function handleFormChange(event) {
        
        const { name, value } = event.target;

        const id = uuidv4();

        setHabitDetail(function(prevValue) { 
            if (name === "habitFreq") {
                return {...prevValue, [name]: parseInt(value), id: id};
            }
            return {...prevValue, [name]: value, id: id} });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (habitDetail.habitName==="") return;
        props.onSubmit(habitDetail);
        setHabitDetail({id: "", habitName: "", habitFreq: 1, habitCompleted: 0});
    }

    return (<form className="habit-input-form" autocomplete="off">
        <h2>Add Habit</h2>
        <Box py={2}>
            <TextField
            id="outlined-basic"
            name="habitName"
            label="Habit name"
            placeholder="Habit name"
            variant="outlined"
            fullWidth
            onChange={handleFormChange}
            value={habitDetail.habitName}
            autoFocus
            />
        </Box>
        <Box py={2}>
            <TextField
            id="outlined-number"
            name="habitFreq"
            label="Frequency per day"
            type="number"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{ inputProps: { min: 1} }}
            onChange={handleFormChange}
            value={habitDetail.habitFreq}
            fullWidth
            />
        </Box>
        <Box py={3} display="flex" justifyContent="flex-end">
            <button className="habit-submit-button" onClick={handleSubmit}>ADD</button>
        </Box>
    </form>) 
}

export default AddHabitForm;