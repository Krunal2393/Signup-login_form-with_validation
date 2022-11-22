import "./App.css";
import Login from "./Components/Login";
import Mainpage from "./Components/Mainpage";
import Signup from "./Components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Route, Link, Routes } from "react-router-dom";
import { useForm } from "react-hook-form";
import Home from "./Components/Home";

function App() {
  return (
    <>
       <Mainpage/>
        <Routes>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
        </Routes>
      

      {/* <Mainpage/>
      <Signup/>
      <Login/> */}
    </>
  );
}

export default App;
