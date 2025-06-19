import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PartesComputador from "./pages/PartesComputador";
import TiposMantenimientoComputador from "./pages/TiposMantenimientoComputador";
import HerramientasComputador from "./pages/HerramientasComputador";

function AppRoutes(){
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/PartesComputador" element={<PartesComputador />} />
            <Route exact path="/TiposMantenimientoComputador" element={<TiposMantenimientoComputador/>} />
            <Route exact path="/HerramientasComputador" element={<HerramientasComputador />} />
        </Routes>
    )
};

export default AppRoutes;