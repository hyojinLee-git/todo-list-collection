import { useRef, useState } from "react";
import "./App.css";
import { Scene } from "./models";
import Header from "@components/Header";
import TaskList from "@containers/TaskList";
import AddTask from "@containers/AddTask";
import EditTask from "@containers/EditTask";
import { CurrentSceneProvider } from "@contexts/CurrentScene";
import { TasksProvider } from "@contexts/Tasks";

function App() {
    const editIdxRef = useRef(0);
    const [currentScene, setCurrentScene] = useState<Scene>("TASK_LIST");
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
            <CurrentSceneProvider
                currentScene={currentScene}
                setCurrentScene={setCurrentScene}
            >
                <TasksProvider tasks={tasks} setTasks={setTasks}>
                    <Header />
                    <main>
                        {currentScene === "TASK_LIST" && (
                            <TaskList editIdxRef={editIdxRef} />
                        )}
                        {currentScene === "ADD_TASK" && <AddTask />}
                        {currentScene === "EDIT_TASK" && (
                            <EditTask
                                editIdxRef={editIdxRef}
                                editTask={tasks[editIdxRef.current]}
                            />
                        )}
                    </main>
                </TasksProvider>
            </CurrentSceneProvider>
        </>
    );
}

export default App;
