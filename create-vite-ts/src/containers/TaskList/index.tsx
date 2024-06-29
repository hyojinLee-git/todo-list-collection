import "./style.css";
import RadioButtonUnchecked from "../../assets/svgs/radio_button_unchecked.svg?react";
import CheckCircle from "../../assets/svgs/check_circle.svg?react";
import EditButton from "../../assets/svgs/edit.svg?react";
import DeleteButton from "../../assets/svgs/delete.svg?react";
import { Scene, Task } from "../../models/tasks";
import { SetStateAction } from "react";

interface Props {
    setCurrentScene: React.Dispatch<SetStateAction<Scene>>;
    tasks: Task[];
    setTasks: React.Dispatch<SetStateAction<Task[]>>;
    editIdxRef: React.MutableRefObject<number>;
}

export default function TaskList({
    setCurrentScene,
    tasks,
    setTasks,
    editIdxRef,
}: Props) {
    const handleRadioButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetIdx = Number(
            e.currentTarget.closest("li")!.getAttribute("data-idx")
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

    const handleEditTaskButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetIdx = Number(
            e.currentTarget.closest("li")!.getAttribute("data-idx")
        );
        editIdxRef.current = targetIdx;
        setCurrentScene("EDIT_TASK");
    };

    const handleDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetIdx = Number(
            e.currentTarget.closest("li")!.getAttribute("data-idx")
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
