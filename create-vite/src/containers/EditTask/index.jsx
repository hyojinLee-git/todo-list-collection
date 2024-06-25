import "./style.css";
import ChevronLeft from "../../assets/svgs/chevron_left.svg?react";
import { useState } from "react";

export default function EditTask({
    setCurrentScene,
    setTasks,
    editIdxRef,
    editTask,
}) {
    const [editText, setEditText] = useState(editTask.name);

    const handleBackButton = () => {
        setCurrentScene("TASK_LIST");
    };

    const handleChange = (e) => {
        setEditText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editText) return;
        setTasks((prevTasks) => {
            return prevTasks.map((prevTask, idx) => {
                return idx === editIdxRef.current
                    ? { ...prevTask, name: editText }
                    : prevTask;
            });
        });
        setCurrentScene("TASK_LIST");
    };

    return (
        <section className="edit-task hide">
            <form onSubmit={handleSubmit}>
                <label>
                    <h2>Edit Task</h2>
                </label>
                <div>
                    <input
                        name="task"
                        type="text"
                        value={editText}
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
                    <button type="submit" className="edit-btn">
                        Edit
                    </button>
                </div>
            </form>
        </section>
    );
}
