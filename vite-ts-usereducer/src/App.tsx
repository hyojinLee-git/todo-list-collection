import "./App.css";
import { useReducer, useRef } from "react";
import { initialTasks } from "./models";
import Header from "@components/Header";
import TaskList from "@containers/TaskList";
import AddTask from "@containers/AddTask";
import EditTask from "@containers/EditTask";
import { currentSceneReducer, tasksReducer } from "./reducers";

function App() {
    const editIdxRef = useRef(0);
    const [tasks, taskDispatch] = useReducer(tasksReducer, initialTasks);
    const [currentScene, currentSceneDispatch] = useReducer(
        currentSceneReducer,
        "TASK_LIST"
    );

    return (
        <>
            <Header />
            <main>
                {currentScene === "TASK_LIST" && (
                    <TaskList
                        tasks={tasks}
                        taskDispatch={taskDispatch}
                        currentSceneDispatch={currentSceneDispatch}
                        editIdxRef={editIdxRef}
                    />
                )}
                {currentScene === "ADD_TASK" && (
                    <AddTask
                        currentSceneDispatch={currentSceneDispatch}
                        taskDispatch={taskDispatch}
                    />
                )}
                {currentScene === "EDIT_TASK" && (
                    <EditTask
                        editIdxRef={editIdxRef}
                        taskDispatch={taskDispatch}
                        currentSceneDispatch={currentSceneDispatch}
                        editTask={tasks[editIdxRef.current]}
                    />
                )}
            </main>
        </>
    );
}

export default App;
