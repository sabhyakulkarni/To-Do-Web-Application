import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Tasks from "./Tasks";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
