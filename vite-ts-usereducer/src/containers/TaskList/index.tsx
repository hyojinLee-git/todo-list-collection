import "./style.css";
import CheckCircle from "@assets/svgs/check_circle.svg?react";
import UncheckCircle from "@assets/svgs/unchecked_circle.svg?react";
import DeleteButton from "@assets/svgs/delete.svg?react";
import EditButton from "@assets/svgs/edit.svg?react";
import { TaskAction, Task, CurrentSceneAction } from "@models/index";

interface Props {
    editIdxRef: React.MutableRefObject<number>;
    currentSceneDispatch: React.Dispatch<CurrentSceneAction>;
    taskDispatch: React.Dispatch<TaskAction>;
    tasks: Task[];
}

export default function TaskList({
    editIdxRef,
    currentSceneDispatch,
    taskDispatch,
    tasks,
}: Props) {
    const handleCheckBox = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetIdx = Number(
            e.currentTarget.closest("li")!.getAttribute("data-idx")
        );
        taskDispatch({ type: "TOGGLE_TASK", targetId: targetIdx });
    };

    const handleAddTaskButton = () => {
        currentSceneDispatch({ type: "CHANGE_SCENE", scene: "ADD_TASK" });
    };

    const handleEditTaskButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetIdx = Number(
            e.currentTarget.closest("li")!.getAttribute("data-idx")
        );
        editIdxRef.current = targetIdx;
        currentSceneDispatch({ type: "CHANGE_SCENE", scene: "EDIT_TASK" });
    };

    const handleDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetIdx = Number(
            e.currentTarget.closest("li")!.getAttribute("data-idx")
        );
        taskDispatch({ type: "DELETE_TASK", deleteId: targetIdx });
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
                        <button onClick={handleCheckBox}>
                            {task.finished ? (
                                <CheckCircle width={20} height={20} />
                            ) : (
                                <UncheckCircle width={20} height={20} />
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
