import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'

const variants = {
    open: {
        x: 0,

    },
    closed: {
        x: '-100%',
        transition: {
            delay: 1
        }
    }
}

const liVariants = {
    open: {
        y: 0,
        opacity: 1,
   
    },
    closed: {
        y: -20,
        opacity: 0,

    },
}

const ulVariants = {
    open: {
        transition: {
            staggerChildren: .3,
        },

    },
    closed: {
    },

}

const links = [
    'one', 'two', 'three', 'four'
]

const Nav = ({ openNav, setOpenNav }) => {
    return (
        <MenuNav
            variants={variants}
            initial='closed'
            animate={openNav ? 'open' : 'closed'}
            transition={{
                damping: 300
            }}
        >
            <button onClick={() => setOpenNav(false)}>Close</button>
            <motion.ul
                variants={ulVariants}
            >
                {links.map(link => (
                    <motion.li key={link} variants={liVariants}><a href="#">{link}</a></motion.li>
                ))}

            </motion.ul>
        </MenuNav>
    )
}

const MenuNav = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--black);
    padding: 5rem;
    ul {
        list-style: none;
        padding: 0;
        margin: 0;   
        font-size: 2rem;
    }
    li {
        padding: 0;
        margin: 0 0 1rem;
    }
    a {
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        border-bottom: 2px transparent solid;
        transition: .3s ease border;
        &:hover{
            border-bottom: 2px var(--blue) solid;

        }
    }
`

export default Nav
