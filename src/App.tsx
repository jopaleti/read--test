import { Signup, Signin, Welcome1, Welcome2, Welcome3} from './Pages';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="bg-black w-full h-full">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome_1" element={<Welcome1 />} />
          <Route path="/welcome_2" element={<Welcome2 />} />
          <Route path="/welcome_3" element={<Welcome3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
