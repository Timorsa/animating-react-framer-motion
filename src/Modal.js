import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({ toggle, setToggle, children }) => {
    return (
        <AnimatePresence>
            {
                toggle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: '30px',
                            left: '50%',
                            transform: 'translate3d(-50%, 0, 0)'
                        }}
                    >
                        <motion.div

                            initial={{ y: 500 }}
                            animate={{ y: 0 }}
                            exit={{ y: 500 }}
                        >
                            <button onClick={() => setToggle(false)}>Close</button>
                            {children}
                        </motion.div>
                    </motion.div>

                )
            }

        </AnimatePresence>
    )
}

export default Modal;