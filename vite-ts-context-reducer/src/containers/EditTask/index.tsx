import "./style.css";
import ChevronLeft from "@assets/svgs/chevron_left.svg?react";
import { SetStateAction, useContext, useState } from "react";
import { Scene, Task } from "@models/index";
import { TasksDispatchContext } from "@contexts/Tasks";

interface Props {
    editIdxRef: React.MutableRefObject<number>;
    editTask: Task;
    setCurrentScene: React.Dispatch<SetStateAction<Scene>>;
}

export default function EditTask({
    editIdxRef,
    editTask,
    setCurrentScene,
}: Props) {
    const taskDispatch = useContext(TasksDispatchContext);
    const [editText, setEditText] = useState(editTask.name);

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
        taskDispatch({
            type: "EDIT_TASK",
            editIdx: editIdxRef.current,
            editText,
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
