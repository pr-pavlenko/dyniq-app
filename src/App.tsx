import RoutesPaths from "@/router/routesPaths";
import Loader from "./layout/loader";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [showContent, setShowContent] = useState(false)
  const [circleStart, setCircleStart] = useState(false)

  const handleLoaderComplete = () => {
    // 1) CIRCLE START
    setCircleStart(true)

    // 2) Content delay (circle thoda expand ho then content)
    setTimeout(() => {
      setShowContent(true)
    }, 400)
  }

  return (
    <>
      <AnimatePresence mode="wait"> 
        {!showContent ? (
          <>
            <Loader onComplete={handleLoaderComplete} />

            {/* CIRCLE only begins AFTER loader closes */}
            {circleStart && (
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 40, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="fixed left-1/2 top-1/2 z-50 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black pointer-events-none"
              />
            )}
          </>
        ) : (
          <div className="relative min-h-screen overflow-hidden">
            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut"
              }}
              className="relative z-10"
            >
              <RoutesPaths />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App;
