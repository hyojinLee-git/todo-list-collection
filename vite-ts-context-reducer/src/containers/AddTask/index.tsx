import { SetStateAction, useContext, useState } from "react";
import ChevronLeft from "@assets/svgs/chevron_left.svg?react";
import "./style.css";
import { Scene } from "@models/index";
import { TasksDispatchContext } from "@contexts/Tasks";

interface Props {
    setCurrentScene: React.Dispatch<SetStateAction<Scene>>;
}

export default function AddTask({ setCurrentScene }: Props) {
    const taskDispatch = useContext(TasksDispatchContext);
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 20) return;
        setText(e.target.value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text) return;
        taskDispatch({ type: "ADD_TASK", newTask: text });
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
