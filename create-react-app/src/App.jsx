import Header from "./container/Header";
import TaskList from "./container/TaskList";
import "./App.css";
import { useState } from "react";
import AddTask from "./container/AddTask";
import EditTask from "./container/EditTask";

function App() {
    const [currentScene, setCurrentScene] = useState("TASK_LIST");

    return (
        <>
            <Header />
            <main>
                {currentScene === "TASK_LIST" && (
                    <TaskList setCurrentScene={setCurrentScene} />
                )}
                {currentScene === "ADD_TASK" && <AddTask />}
                {currentScene === "EDIT_TASK" && <EditTask />}
            </main>
        </>
    );
}

export default App;
