import "./App.css";
import Header from "@components/Header";
import AddTask from "@containers/AddTask";
import EditTask from "@containers/EditTask";
import TaskList from "@containers/TaskList";
import { TasksDispatchProvider, TasksProvider } from "@contexts/Tasks";
import { useRef, useReducer, useState } from "react";
import { Scene, initialTasks } from "./models";
import { tasksReducer } from "./reducers";

function App() {
    const editIdxRef = useRef(0);
    const [tasks, taskDispatch] = useReducer(tasksReducer, initialTasks);
    const [currentScene, setCurrentScene] = useState<Scene>("TASK_LIST");

    return (
        <>
            <Header />
            <TasksProvider tasks={tasks}>
                <TasksDispatchProvider dispatch={taskDispatch}>
                    <main>
                        {currentScene === "TASK_LIST" && (
                            <TaskList
                                setCurrentScene={setCurrentScene}
                                editIdxRef={editIdxRef}
                            />
                        )}
                        {currentScene === "ADD_TASK" && (
                            <AddTask setCurrentScene={setCurrentScene} />
                        )}
                        {currentScene === "EDIT_TASK" && (
                            <EditTask
                                editIdxRef={editIdxRef}
                                setCurrentScene={setCurrentScene}
                                editTask={tasks[editIdxRef.current]}
                            />
                        )}
                    </main>
                </TasksDispatchProvider>
            </TasksProvider>
        </>
    );
}

export default App;
