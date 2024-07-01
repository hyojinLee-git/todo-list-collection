import { SCENE } from "@constants/index";
import { Scene } from "@models/index";
import { createContext, SetStateAction } from "react";

export const CurrentSceneContext = createContext<{
    currentScene: Scene;
    setCurrentScene: React.Dispatch<SetStateAction<Scene>>;
}>({
    currentScene: SCENE.taskList,
    setCurrentScene: () => {},
});

interface Props {
    children: React.ReactNode;
    currentScene: Scene;
    setCurrentScene: React.Dispatch<SetStateAction<Scene>>;
}

export const CurrentSceneProvider = ({
    children,
    currentScene,
    setCurrentScene,
}: Props) => {
    return (
        <CurrentSceneContext.Provider value={{ currentScene, setCurrentScene }}>
            {children}
        </CurrentSceneContext.Provider>
    );
};
