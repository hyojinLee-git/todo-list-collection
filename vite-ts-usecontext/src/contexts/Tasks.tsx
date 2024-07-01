import { Task } from "@models/index";
import { SetStateAction, createContext } from "react";

export const TasksContext = createContext<{
    tasks: Task[];
    setTasks: React.Dispatch<SetStateAction<Task[]>>;
}>({
    tasks: [],
    setTasks: () => {},
});

interface Props {
    children: React.ReactNode;
    tasks: Task[];
    setTasks: React.Dispatch<SetStateAction<Task[]>>;
}

export const TasksProvider = ({ children, tasks, setTasks }: Props) => {
    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
};
