import AppRoutes from "./routes"
import HeaderNav from "./components/HeaderNav"
import Footer from "./components/Footer"

export const App = () => {


  return (    
    <>
      <HeaderNav/>
      <AppRoutes />
      <Footer />
    </>
  )
}
