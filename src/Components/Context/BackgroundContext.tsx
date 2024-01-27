import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Context type
type BackgroundContextType = {
  background: String;
  setBackground: Dispatch<SetStateAction<String>>;
}
// Background Context Provider Props
type BackgroundContextProviderProps = {
  children: ReactNode;
}

export const BackgroundContext = createContext< BackgroundContextType | any >({});

function BackgroundContextProvider({ children }: BackgroundContextProviderProps) {
  
  // create the state management for background color changes
  const [background, setBackground] = useState <String>("black");
  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>{ children}</BackgroundContext.Provider>
  )
}

export default BackgroundContextProvider