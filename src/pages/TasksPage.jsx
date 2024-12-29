import { useContext, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent"
import { TaskContext } from "../context/task.context";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";
import "./TaskPage.css";


function TasksPage() {

    const { tasks } = useContext(TaskContext);

    // Renderizar la lista de tareas
    const taskCards = tasks.map((task) => (
        <li key={task.id}>
            <TaskCard task={task} />
        </li>

    ));

    return (
    
        <>
            
            <HeaderComponent />

            <section id="tasks-page">
                <h2 className="title" data-testid="tasks-title">
                    Tasks
                </h2>
                <ul id="tasks-list">
                    <li>
                        <CreateTask />
                    </li>
                    {taskCards}
                </ul>
            </section>
        
            
        </>
    
    );
}

export default TasksPage;
