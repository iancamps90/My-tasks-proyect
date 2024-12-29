import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProviderWrapper(props) {
    const [tasks, setTasks] = useState([
        { id: "1", title: "Compra la cena", completed: false },
        { id: "2", title: "Cocinar", completed: false },
        { id: "3", title: "Cenar", completed: false },
        { id: "4", title: "Lavar los platos", completed: false },
    ]);

    const addTask = (newTask) => { //funcion añadir nuevas tareas
        setTasks([newTask, ...tasks]);
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
        <TaskContext.Provider value={{ tasks, setTasks, updateTask, addTask }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProviderWrapper };
