import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'

const variants = {
    open: {
        x: 0
    },
    closed: {
        x: '-100%'
    }
}

const Nav = ({ openNav, setOpenNav }) => {
    return (
        <MenuNav
            variants={variants}
            initial='closed'
            animate={openNav ? 'open' : 'closed'}

        >
            <button onClick={() => setOpenNav(false)}>Close</button>
            <ul>
                <li><a href="#">One</a></li>
                <li><a href="#">Two</a></li>
                <li><a href="#">Three</a></li>
                <li><a href="#">Four</a></li>
            </ul>
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
        margin: 0;
    }
    a {
        text-decoration: none;
        color: #fff;
        font-weight: 700;
    }
`

export default Nav
