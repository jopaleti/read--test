import {
  Signup,
  Signin,
  Welcome1,
  Welcome2,
  Welcome3,
  ManageBrand,
  Conversation,
  Google,
  Homepage
} from "./Pages/index";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import SidebarContextProvider component
import {
  SidebarContextProvider,
  BackgroundContext,
} from "./Components/Context";
import { useContext } from "react";

function App() {
  // UseContext
  const { background } = useContext(BackgroundContext);
  console.log(background);
  return (
    <div
      className={`w-full __app__container_ ${
        background == "white" ? "__app__light" : ""
      }`}
    >
      <SidebarContextProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/welcome_1" element={<Welcome1 />} />
            <Route path="/welcome_2" element={<Welcome2 />} />
            <Route path="/welcome_3" element={<Welcome3 />} />
            <Route path="/manage" element={<ManageBrand />} />
            <Route path="/conversation" element={<Conversation />} />
            <Route path="/google" element={<Google />} />
          </Routes>
        </BrowserRouter>
      </SidebarContextProvider>
    </div>
  );
}

export default App;
