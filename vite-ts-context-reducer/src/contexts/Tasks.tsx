import { Task, TaskAction } from "@models/index";
import { createContext } from "react";

export const TasksContext = createContext<Task[]>([]);

interface TaskProviderProps {
    children: React.ReactNode;
    tasks: Task[];
}

export const TasksProvider = ({ children, tasks }: TaskProviderProps) => {
    return (
        <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
    );
};

export const TasksDispatchContext = createContext<React.Dispatch<TaskAction>>(
    () => {}
);

interface TaskDispatchProviderProps {
    children: React.ReactNode;
    dispatch: React.Dispatch<TaskAction>;
}

export const TasksDispatchProvider = ({
    children,
    dispatch,
}: TaskDispatchProviderProps) => {
    return (
        <TasksDispatchContext.Provider value={dispatch}>
            {children}
        </TasksDispatchContext.Provider>
    );
};
