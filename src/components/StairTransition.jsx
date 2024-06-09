import {AnimatePresence} from "framer-motion";
import {StairsElement} from "./StairsElement.jsx";

export const StairTransition = () => {
    return (
        <>
            <AnimatePresence mode="wait">
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
                    <StairsElement/>
                </div>
            </AnimatePresence>
        </>
    );
}