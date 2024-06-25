import Header from "./container/Header";
import TaskList from "./container/TaskList";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <main>
                <TaskList />
            </main>
        </>
    );
}

export default App;
