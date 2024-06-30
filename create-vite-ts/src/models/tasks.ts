export type Task = {
    name: string;
    finished: boolean;
};

export type Scene = "ADD_TASK" | "TASK_LIST" | "EDIT_TASK";
