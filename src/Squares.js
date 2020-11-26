import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { shuffle } from 'lodash'

const COLORS = [
    'var(--red)',
    'var(--blue)',
    'var(--black)',
    'var(--green)',
    'var(--purp)',

]


const Squares = () => {

    const [colorsList, setColorsList] = useState(COLORS)

    return (
        <div>
            <button onClick={() => setColorsList(shuffle(COLORS))}>Shuffle</button>
            {
                colorsList.map(color => (
                    <motion.div
                        key={color}
                        positionTransition
                        transition={{
                            damping: 550
                        }}
                        style={{
                            background: color,
                            height: 100,
                            width: 100
                        }} />
                ))
            }
        </div>
    )
}

export default Squares
