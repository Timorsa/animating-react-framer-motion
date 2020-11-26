import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Card, CardGrid, Container, Header } from "./Elements";

import Nav from './Nav';
import Menu from "./Menu";
import Modal from './Modal';
import Squares from './Squares'
import Accordion from './Accordion'

import "./App.css";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {

  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [isCardActive, setIsCardActive] = useState(true)

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  console.log(x)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <Header>
        <Menu onClick={() => setOpenNav(true)} />
        <Nav openNav={openNav} setOpenNav={setOpenNav} />
        <h1>Header</h1>
      </Header>
      <Container>
        <Squares />
        <motion.h2
          animate={{
            x: value * 10 + 'px',
          }}
        >Super Cool</motion.h2>
        <button onClick={() => setToggle(true)}>Toggle</button>
        <input type="range" name="range" min='-100' max='100' value={value} onChange={e => setValue(e.target.value)} />

        <Modal toggle={toggle} setToggle={setToggle}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>

        <Accordion />
        <CardGrid>
          <Card
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100

            }}
            style={{ background: "var(--purp)" }}
          >
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <AnimatePresence>
            {
              isCardActive &&
              (
                <motion.div exit={{ height: 0, overflow: 'hidden', opacity: 0 }} transition={{
                  opacity: {
                    duration: 0
                  }
                }}>
                  <Card
                    drag='x'
                    dragConstraints={{
                      left: 0,
                      right: 0
                    }}
                    onDragEnd={(event, info) => {
                      if (Math.abs(info.point.x) > 200)
                        setIsCardActive(false)
                    }}
                    style={{ x, opacity, background: "var(--blue)" }}>
                    <h3>Some card</h3>
                    <img src={blue} />
                  </Card>
                </motion.div>

              )
            }
          </AnimatePresence>

          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
