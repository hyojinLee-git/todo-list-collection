export type Scene = "TASK_LIST" | "ADD_TASK" | "EDIT_TASK";

export type Task = { name: string; finished: boolean };

export const initialTasks = [
    {
        name: "task1",
        finished: false,
    },
];

export type TaskAction =
    | { type: "ADD_TASK"; newTask: string }
    | { type: "EDIT_TASK"; editIdx: number; editText: string }
    | { type: "DELETE_TASK"; deleteId: number }
    | { type: "TOGGLE_TASK"; targetId: number };

export type CurrentSceneAction = { type: "CHANGE_SCENE"; scene: Scene };
