import "./styles.css";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./routes/Search";
import Contact from "./routes/Contact"
 
export default function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  );
}
