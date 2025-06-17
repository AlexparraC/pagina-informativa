import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function AppRoutes(){
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contact" element={<Contact/>} />
        </Routes>
    )
};

export default AppRoutes;