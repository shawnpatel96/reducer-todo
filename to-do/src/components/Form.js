import React, {useState} from "react"


const Form =({dispatch})=>{
    const [newTask, setNewTask] = useState("")

    const handleChanges= event=>{
        setNewTask(event.target.value)
    }

    const handleSubmit= event =>{
        event.preventDefault();
        dispatch({type: "ADD_TASK", payload:newTask})
        setNewTask("")
      
    };
    const clearTask=(event)=>{
        event.preventDefault();
        dispatch({type:"CLEAR_TASK"})
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="newTask" 
            value={newTask} 
            onChange={handleChanges} 
            placeholder="add a task"
          
            />
            <button type="submit">ADD_TASK</button>
            <button onClick={clearTask}>Clear</button>
        </form>
    )
}

export default Form