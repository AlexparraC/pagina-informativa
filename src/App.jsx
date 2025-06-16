import { motion } from "motion/react"
import HeaderNav from "./components/HeaderNav"

export const App = () => {


  return (    
    <>
      <HeaderNav />
      <div class="container mx-2 p-2">
        <motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} animate={{ rotate: 360, transition: { duration: 2 } }} class="text-3xl cursor-pointer font-bold underline text-center mt-10">
          Hello world!
        </motion.h1>
      </div>
    </>
  )
}
