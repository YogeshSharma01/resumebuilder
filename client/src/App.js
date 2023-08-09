import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Navbar from "./Components/Navbar/Navbar";
import Logout from "./Components/Logout/logout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Resume from "./Components/Resume/Resume";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/resume" element={<Resume/>}/>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
