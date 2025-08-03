import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="fixed top-0 left-0 h-full w-full bg-neutral-950">
      {/* Background that persists during transition */}
      <div className="absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(63,62,128,0.2),rgba(255,255,255,0))]"></div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}  
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900"
          >
            <div className="container mx-auto px-8">
              <NavBar />
              <Home />
              <About />
              <Technologies />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
