import "./style.css";
import { ReactComponent as RadioButtonUnchecked } from "../../assets/svgs/radio_button_unchecked.svg";
import { ReactComponent as CheckCircle } from "../../assets/svgs/check_circle.svg";
import { ReactComponent as EditButton } from "../../assets/svgs/edit.svg";
import { ReactComponent as DeleteButton } from "../../assets/svgs/delete.svg";
import { useState } from "react";

export default function TaskList({ setCurrentScene }) {
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

    const handleRadioButton = (e) => {
        const targetIdx = Number(
            e.currentTarget.closest("li").getAttribute("data-idx")
        );
        setTasks((prevTasks) => {
            return prevTasks.map((prevTask, idx) => {
                return idx === targetIdx
                    ? { ...prevTask, finished: !prevTask.finished }
                    : prevTask;
            });
        });
    };

    const handleAddTaskButton = () => {
        setCurrentScene("ADD_TASK");
    };

    const handleEditTaskButton = () => {
        setCurrentScene("EDIT_TASK");
    };

    const handleDeleteButton = (e) => {
        const targetIdx = Number(
            e.currentTarget.closest("li").getAttribute("data-idx")
        );
        setTasks((prevTasks) => {
            return prevTasks.filter((_, idx) => targetIdx !== idx);
        });
    };

    return (
        <section className="task">
            <h2>Tasks</h2>
            <ul id="task-list">
                {tasks.map((task, idx) => (
                    <li
                        data-idx={idx}
                        className={task.finished ? "finished" : ""}
                        key={`${task}-${idx}`}
                    >
                        <button onClick={handleRadioButton}>
                            {task.finished ? (
                                <CheckCircle width={20} height={20} />
                            ) : (
                                <RadioButtonUnchecked width={20} height={20} />
                            )}
                        </button>
                        <div>{task.name}</div>
                        {task.finished ? (
                            <div>
                                <button onClick={handleDeleteButton}>
                                    <DeleteButton width={20} height={20} />
                                </button>
                            </div>
                        ) : (
                            <div>
                                <button
                                    onClick={handleEditTaskButton}
                                    className="edit-icon-btn"
                                >
                                    <EditButton width={20} height={20} />
                                </button>
                                <button
                                    onClick={handleDeleteButton}
                                    className="delete-icon-btn"
                                >
                                    <DeleteButton width={20} height={20} />
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className="add-btn-wrapper">
                <button
                    onClick={handleAddTaskButton}
                    className="add-btn"
                    id="add-task-btn"
                >
                    Add Task
                </button>
            </div>
        </section>
    );
}
