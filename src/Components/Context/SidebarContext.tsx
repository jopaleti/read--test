import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Context types
type SidebarContextInterface = {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
// Type for the context provider props
type SidebarContextProviderProps = {
    children: ReactNode;
}
export const SidebarContext = createContext<SidebarContextInterface | any>({});

function SidebarContextProvider({ children }: SidebarContextProviderProps) {

    // create the sidebar state
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    return <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>{ children }</SidebarContext.Provider>;
}

export default SidebarContextProvider;
