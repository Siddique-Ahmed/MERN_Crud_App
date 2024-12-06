import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTopic from "./pages/AddTopic";
import UpdateTopic from "./pages/UpdateTopic";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addTopic" element={<AddTopic/>}/>
      <Route path="/update/:id" element={<UpdateTopic/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
