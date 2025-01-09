import "./TaskPage.css";
import { useContext, useEffect, useRef, useState } from "react";
import HeaderComponent from "../components/HeaderComponent"
import { TaskContext } from "../context/task.context";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";
import CompoundFooter from "../components/CompoundFooter";




function TasksPage() {

    const { tasks, getTasks, hasLoaded, hasError } = useContext(TaskContext);


    //variable contar cuantas veces se renderiza la taskpage hace n se renderice
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    //funcion cstom hook variables counters
    const useCounter = () => {
        const [counter, setCounter] = useState(1);

        const increase = () => setCounter(counter + 1);
        const decrease = () => setCounter(counter - 1);

        return { counter, increase, decrease };
    };

    const taskCounter = useCounter();
    const completedCounter = useCounter();


    useEffect(() => {
        getTasks();
    }, [])

    // Renderizar la lista de tareas
    const taskCards = tasks.map((task) => (
        <li key={task.id}>
            <TaskCard task={task} />
        </li>

    ));

    return (
        <>
            <HeaderComponent></HeaderComponent>

            <h2>{renderCount.current} </h2>
            <section id="tasks-page">
                <h2 className="title" data-testid="tasks-title">
                    Tasks
                </h2>

                <div className="counters">
                    <div className="counter">
                        <h3 className="counter-title">Tareas</h3>
                        <div className="btns">
                            <button onClick={taskCounter.decrease}> - </button>
                                
                            <h3>{taskCounter.counter}</h3>
                            <button onClick={taskCounter.increase}> + </button>
                        </div>
                    </div>
                </div>

                <div className="counters">
                    <div className="counter">
                        <h3 className="counter-title">Completadas</h3>
                        <div className="btns">
                            <button onClick={completedCounter.decrease}> - </button>

                            <h3>{completedCounter.counter}</h3>
                            <button onClick={completedCounter.increase}> + </button>
                        </div>
                    </div>
                </div>

                <ul className="task-list">
                    <li>
                        <CreateTask></CreateTask>
                    </li>
                    {hasError ? (
                        <h2 data-testid="error-msg">No se han podido obtener las tareas</h2>
                    ) : !hasLoaded ? (
                        <h2 data-testid="loading-msg">Cargando...</h2>
                    ) : (
                        taskCards
                    )}
                </ul>
            </section>

            <CompoundFooter className="footer">

                            <CompoundFooter.Title className="footer-title">
                                Task App
                            </CompoundFooter.Title>
            
                            <CompoundFooter.SocialMedia className="social-media">
                                Facebook Instagram X
                            </CompoundFooter.SocialMedia>
            
                            <CompoundFooter.Copyright className="copyright">
                                ©  Task App
                            </CompoundFooter.Copyright>
            
                        </CompoundFooter>
        </>
    );
}
export default TasksPage;
