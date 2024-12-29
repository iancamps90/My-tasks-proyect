import { createContext, useState, useContext } from "react";

const TaskContext = createContext();

function TaskProviderWrapper(props) {
    const [tasks, setTasks] = useState([]);
    const [hasLoaded, setLoaded] = useState(false);
    const [hasError, setError] = useState(false);

    const API_URL = "https://ca9a4b517ef87c1e54b2.free.beeceptor.com/api/tasks/"; // VARIABLE DE URL DE LA API

    // FUNCION LLAMADA A LA API y obtener las tareas
    const getTasks = async () => {
        if (hasLoaded) return;

        try {
            console.log("Get Tasks");
            const response = await fetch(API_URL);
            const data = await response.json();
            setTasks(data.reverse());
            setLoaded(true);
            setError(false);
        } catch (e) {
            setError(true);
        }
    };

    const addTask = async (newTask) => { //funcion añadir nuevas tareas
        try {
            await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newTask)
            })
            setTasks([newTask, ...tasks]);
            setError(false);
        } catch (e) {
            setError(true);
        }
    };


    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id !== updatedTask.id) {
                return task; // Si no es la tarea que queremos actualizar, la dejamos igual
            }
            return updatedTask; // Si es la tarea que queremos actualizar, la reemplazamos
        });
        setTasks(updatedTasks); // Actualizamos el estado con las tareas modificadas
    };

    return (
        <TaskContext.Provider value={
            {
                tasks,
                setTasks,
                updateTask,
                addTask,
                getTasks,
                hasLoaded,
                hasError
            }
        }>
            {props.children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProviderWrapper };
