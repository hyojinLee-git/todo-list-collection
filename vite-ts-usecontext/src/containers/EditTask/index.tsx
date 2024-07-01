import "./style.css";
import ChevronLeft from "@assets/svgs/chevron_left.svg?react";
import { useContext, useState } from "react";
import { Task } from "@models/index";
import { CurrentSceneContext } from "@contexts/CurrentScene";
import { TasksContext } from "@contexts/Tasks";

interface Props {
    editIdxRef: React.MutableRefObject<number>;
    editTask: Task;
}

export default function EditTask({ editIdxRef, editTask }: Props) {
    const [editText, setEditText] = useState(editTask.name);
    const { setCurrentScene } = useContext(CurrentSceneContext);
    const { setTasks } = useContext(TasksContext);

    const handleBackButton = () => {
        setCurrentScene("TASK_LIST");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 20) return;
        setEditText(e.target.value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
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
