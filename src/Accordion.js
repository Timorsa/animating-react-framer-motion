import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 }
}


const Accordion = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <article>
            <h2 role='button' onClick={() => setToggle(!toggle)}>The Heading</h2>
            <AnimatePresence>
                {
                    toggle && (
                        <motion.div
                            variants={variants}
                            style={{ overflow: 'hidden' }}
                            initial='closed'
                            animate='opened'
                            exit='closed'
                        >
                            <p>
                                I'm baby before they sold out affogato helvetica tumeric, readymade waistcoat raclette chicharrones vexillologist. Brunch fingerstache biodiesel, gluten-free street art art party dreamcatcher meh palo santo iceland ramps. Humblebrag shaman offal, ethical shabby chic tousled cronut cornhole waistcoat quinoa vegan. Post-ironic hashtag disrupt schlitz, photo booth hexagon literally celiac man bun yuccie. Hot chicken occupy hammock, asymmetrical crucifix kogi schlitz woke 3 wolf moon. Church-key celiac cred coloring book jianbing sartorial small batch next level heirloom try-hard chicharrones leggings synth. Church-key thundercats poutine normcore tousled, blog man bun post-ironic edison bulb sriracha selvage actually.
                            </p>

                        </motion.div>

                    )
                }

            </AnimatePresence>
        </article>
    )
}

export default Accordion;