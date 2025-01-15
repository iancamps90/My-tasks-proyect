import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/task.context";
import "./CreateTask.css";
import { createId } from "../utils/utils";


function CreateTask() {

    const { addTask } = useContext(TaskContext);

    const [taskTitle, setTasksTitle] = useState(""); // variable reactiva

    //varibel ref
    const newTaskInputRef = useRef();

    const handleInput = (e) => {
        setTasksTitle(e.target.value); // modificar la variable reactiva
    }

    const handleSubmit = (e) => { //variable para el input envie informacion
        e.preventDefault();
        if (!taskTitle) return;

        const newTask = {
            id: createId(),
            title: taskTitle,
            completed: false
        }

        addTask(newTask);
        setTasksTitle("");
    } 

    //funcion focus en el input
    const focus = () => {
        newTaskInputRef.current.focus();
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                ref= {newTaskInputRef}
                className="task-title"
                placeholder="Nueva Tarea"
                value= {taskTitle}
                onChange= {handleInput}
            />
            <button className="create-btn">
                +
            </button>
        </form>
    )
}

export default CreateTask;
