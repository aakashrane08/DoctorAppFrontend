import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Surgeries from "./pages/Surgeries";
import Doctors from "./pages/Doctors";
import LabTests from "./pages/LabTests";
import Medicines from "./pages/Medicines";
import MyProfile from "./components/core/MyProfile";
import About from "./components/common/About";

function App() {
  return (
    <div className=" w-screen min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/surgeries" element={<Surgeries/>}></Route>
        <Route path="/doctors" element={<Doctors/>}></Route>
        <Route path="/labtests" element={<LabTests/>}></Route>
        <Route path="/medicines" element={<Medicines/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/myprofile" element={<MyProfile/>}></Route>
        <Route path="*">ERROR</Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
