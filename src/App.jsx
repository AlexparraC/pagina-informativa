import AppRoutes from "./routes"
import HeaderNav from "./components/HeaderNav"
import Footer from "./components/Footer"
import { Contacto } from "./components/Contacto"

export const App = () => {


  return (    
    <>
      <HeaderNav/>
      <AppRoutes />
      <Contacto/>
      <Footer />
    </>
  )
}
