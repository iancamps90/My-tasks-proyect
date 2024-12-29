import { useContext, useState } from "react";
import { TaskContext } from "../context/task.context";
import "./CreateTask.css";


function CreateTask() {

    const { addTask } = useContext(TaskContext);

    const [taskTitle, setTasksTitle] = useState(""); // variable reactiva

    const handleInput = (e) => {
        setTasksTitle(e.target.value); // modificar la variable reactiva
    }

    const handleSubmit = (e) => { //variable para el input envie informacion
        e.preventDefault();
        if (!taskTitle) return;

        const newTask = {
            id: 123,
            title: taskTitle,
            completed: false
        }

        addTask(newTask);
        setTasksTitle("");
    } 

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
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
