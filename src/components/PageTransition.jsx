import {AnimatePresence, motion} from "framer-motion";
import PropTypes from "prop-types";

export const PageTransition = ({children}) => {
    return (
        <AnimatePresence>
            <div>
                <motion.div
                    initial={{opacity: 1}}
                    animate={{opacity: 0, transition: {delay: 1, duration: 0.4, ease: "easeInOut"}}}
                    className="h-screen w-screen fixed bg-gray-800 top-0 pointer-events-none z-40"
                />
                {children}
            </div>
        </AnimatePresence>
    );
}

PageTransition.propTypes = {
    children: PropTypes.node.isRequired
};