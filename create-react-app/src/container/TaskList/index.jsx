import "./style.css";
import { ReactComponent as RadioButtonUnchecked } from "../../assets/svgs/radio_button_unchecked.svg";
import { ReactComponent as CheckCircle } from "../../assets/svgs/check_circle.svg";
import { ReactComponent as EditButton } from "../../assets/svgs/edit.svg";
import { ReactComponent as DeleteButton } from "../../assets/svgs/delete.svg";
import { useState } from "react";

export default function TaskList() {
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

    const handleRadioButton = (targetIdx) => {
        setTasks((prevTasks) => {
            return prevTasks.map((prevTask, idx) => {
                return idx === targetIdx
                    ? { ...prevTask, finished: !prevTask.finished }
                    : prevTask;
            });
        });
    };

    return (
        <section className="task">
            <h2>Tasks</h2>
            <ul id="task-list">
                {tasks.map((task, idx) => (
                    <li
                        className={task.finished ? "finished" : ""}
                        key={`${task}-${idx}`}
                    >
                        <button onClick={() => handleRadioButton(idx)}>
                            {task.finished ? (
                                <CheckCircle width={20} height={20} />
                            ) : (
                                <RadioButtonUnchecked width={20} height={20} />
                            )}
                        </button>
                        <div>{task.name}</div>
                        {task.finished ? (
                            <div>
                                <button>
                                    <DeleteButton width={20} height={20} />
                                </button>
                            </div>
                        ) : (
                            <div>
                                <button className="edit-icon-btn">
                                    <EditButton width={20} height={20} />
                                </button>
                                <button className="delete-icon-btn">
                                    <DeleteButton width={20} height={20} />
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className="add-btn-wrapper">
                <button className="add-btn" id="add-task-btn">
                    Add Task
                </button>
            </div>
        </section>
    );
}
