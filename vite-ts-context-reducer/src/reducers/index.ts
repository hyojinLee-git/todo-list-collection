import { TaskAction, Task } from "@models/index";

export const tasksReducer = (tasks: Task[], action: TaskAction) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...tasks, { name: action.newTask, finished: false }];
        case "EDIT_TASK":
            return tasks.map((task, idx) =>
                idx === action.editIdx
                    ? { ...task, name: action.editText }
                    : task
            );
        case "DELETE_TASK":
            return tasks.filter((_, idx) => idx !== action.deleteId);
        case "TOGGLE_TASK":
            return tasks.map((task, idx) =>
                idx === action.targetId
                    ? { ...task, finished: !task.finished }
                    : task
            );
        default:
            throw Error("Unknown action" + action);
    }
};
