import "./App.css";
import Header from "./containers/Header";
import AddTask from "./containers/AddTask";
import EditTask from "./containers/EditTask";
import TaskList from "./containers/TaskList";
import { useRef, useState } from "react";

function App() {
    const editIdxRef = useRef(0);
    const [currentScene, setCurrentScene] = useState("TASK_LIST");
    const [tasks, setTasks] = useState([
        {
            name: "task1",
            finished: false,
        },
        {
            name: "task2",
            finished: false,
        },
    ]);

    return (
        <>
            <Header />
            <main>
                {currentScene === "TASK_LIST" && (
                    <TaskList
                        editIdxRef={editIdxRef}
                        tasks={tasks}
                        setTasks={setTasks}
                        setCurrentScene={setCurrentScene}
                    />
                )}
                {currentScene === "ADD_TASK" && (
                    <AddTask
                        setTasks={setTasks}
                        setCurrentScene={setCurrentScene}
                    />
                )}
                {currentScene === "EDIT_TASK" && (
                    <EditTask
                        editIdxRef={editIdxRef}
                        setCurrentScene={setCurrentScene}
                        setTasks={setTasks}
                        editTask={tasks[editIdxRef.current]}
                    />
                )}
            </main>
        </>
    );
}

export default App;
