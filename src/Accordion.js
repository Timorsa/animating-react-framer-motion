import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Accordion = ({ toggle, setToggle, children }) => {
    return (
        <AnimatePresence>
            {
                toggle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}

                    >

                    </motion.div>

                )
            }

        </AnimatePresence>
    )
}

export default Accordion;