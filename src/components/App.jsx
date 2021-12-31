import React, {useState, useRef} from "react";
import Header from "./Header";
import Habit from "./Habit";
import Footer from "./Footer";
import Modal from './CreateHabitModal';
import AddHabitForm from "./AddHabitForm";
import Grow from '@material-ui/core/Grow';


function App() {
    const modal = useRef(null);

    const [habitList, setHabitList] = useState([]);   

    const [habitDone, setHabitDone] = useState([]);

    const [deleteMode, setDeleteMode] = useState(false);

    function handleDoneClick(id) {
        const index = habitList.findIndex(habit => habit.id === id)
        const item = habitList[index];
        habitList[index].habitCompleted = habitList[index].habitCompleted + 1;

        if (habitList[index].habitCompleted === habitList[index].habitFreq) {
            setHabitDone(prevItem => [...prevItem, {...item}]);
            setHabitList((prevValue) => {
                return prevValue.filter((habit) => {
                  return habit.id !== id;
                });
              });
        } else {
            setHabitList([...habitList]);
        }

    }

    function handleAddHabit() {
        if (deleteMode) return;
        modal.current.open();
    }

    function handleDeleteModeToggle() {
        setDeleteMode(prevValue => !prevValue);
    }
    
    function handleDelete(id) {
        if (deleteMode) {
        
            if (habitList.findIndex(habit => id === habit.id) !== -1) {
                setHabitList((prevValue) => {return prevValue.filter(habit => habit.id !== id )})
            } else if (habitDone.findIndex(habit => id === habit.id) !== -1) {
                setHabitDone((prevValue) => {return prevValue.filter(habit => habit.id !== id )})
            }
            habitList.length + habitDone.length === 1 && handleDeleteModeToggle();
        }
        
    }

    function handleHabitSubmit(habitDetail) {
        setHabitList(prevItem => [...prevItem, {...habitDetail}]); 
        modal.current.close();
    }


    return (
        <div className='habit-app'> 
        <Header deleteMode={deleteMode}/>
        <div className="habit-area">
        <h2>Ongoing</h2>
        {habitList.length === 0 && habitDone.length === 0 ? <p className="no-habit">You have not created any habits yet</p> : habitList.map((habit) => (<Habit key={habit.id} id={habit.id} isDeleteMode={deleteMode} habitName={habit.habitName} habitIcon={habit.habitIcon} habitFreq={habit.habitFreq} habitCompleted={habit.habitCompleted} onDone={handleDoneClick} onDelete={handleDelete} />))}
        {!(habitList.length === 0 & habitDone.length === 0) && <h2>Done</h2>} 
        {habitDone.length !== 0 && habitDone.map((habit) => (<Habit key={habit.id} id={habit.id} isDeleteMode={deleteMode} onDelete={handleDelete} habitName= {habit.habitName} habitIcon={habit.habitIcon} habitFreq={habit.habitFreq} habitCompleted={habit.habitCompleted}/>))}
        </div>
        <Footer onAdd={handleAddHabit} onDelete={handleDeleteModeToggle} habitObj={[...habitList, ...habitDone]} deleteMode={deleteMode}/>
        <Modal ref={modal}><AddHabitForm onSubmit={handleHabitSubmit} /></Modal>
        </div>
    )
}

export default App;