import { motion } from "framer-motion";
import handTop from "../assets/hand-top.png";
import handBotttom from "../assets/hand-bottom.png";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <motion.div className='h-screen relative overflow-hidden' initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            {/* Top hand image: slides in from the right edge */}
            <motion.div className='absolute top-0 right-0 w-1/2 z-30'
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.43, 0.13, 0.23, 0.96] // cubic-bezier easing for the slide
                }}
                onAnimationComplete={() => {
                    // Wait briefly after the animation, then hide the loader and show the app
                    setTimeout(() => onComplete(), 400)
                }}
            >
                <img src={handTop} alt="" className="w-full " />
            </motion.div>

            {/* Bottom hand image: slides in from the left edge */}
            <motion.div className='absolute bottom-0 left-0 w-1/2 z-30'
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.43, 0.13, 0.23, 0.96] // match top hand easing
                }}
            >
                <img src={handBotttom} alt="" className="w-full " />
            </motion.div>
        </motion.div>
    )
}

export default Loader;
