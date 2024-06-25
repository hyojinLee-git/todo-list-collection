import { useState } from "react";
import { ReactComponent as ChevronLeft } from "../../assets/svgs/chevron_left.svg";
import "./style.css";

export default function AddTask({ setTasks, setCurrentScene }) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        setTasks((prevTasks) => [
            ...prevTasks,
            { name: text, finished: false },
        ]);
        setCurrentScene("TASK_LIST");
    };

    const handleBackButton = () => {
        setCurrentScene("TASK_LIST");
    };

    return (
        <section className="add-task">
            <form method="post" onSubmit={handleSubmit}>
                <label>
                    <h2>Add Task</h2>
                </label>
                <div>
                    <input
                        id="task"
                        type="text"
                        name="task"
                        value={text}
                        onChange={handleChange}
                    />
                </div>
                <div className="bottom-btn-wrapper">
                    <button
                        onClick={handleBackButton}
                        type="button"
                        className="back"
                    >
                        <ChevronLeft height={40} width={40} />
                    </button>
                    <button type="submit" id="add-btn">
                        Add
                    </button>
                </div>
            </form>
        </section>
    );
}
