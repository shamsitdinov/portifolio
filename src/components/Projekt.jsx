import React from "react";
import { projekCard } from "./ProjektData";
import styled from "styled-components";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
const Projekt = () => {
  const text = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    left: {
      y: -300,
      opacity: 0,
    },
  };

  return (
    <Container>
      {projekCard.map((proje, index) => (
        <motion.div
          variants={text}
          animate='animate'
          initial='left'
          whileHover={{ scale: [null, 1.1, 1] }}
          transition={{ duration: 1 }}
          className='box'
          key={index}
        >
          <img src={proje.img} alt='' />
          <h1>{proje.name} </h1>
          <h2>{proje.title} </h2>
          <p>{proje.text} </p>
          <a href={proje.link} target='_blank' rel='noopener noreferrer'>
            <FcGlobe />
          </a>
        </motion.div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  font-family: "Courier New", Courier, monospace;
  margin: 100px auto;
  width: 90%;
  height: 100vh;
  color: white;
  display: flex;
  gap: 30px;
  .box {
    height: 530px;
    text-align: center;
    text-transform: capitalize;
    background-color: #4947478d;
    border: 1px solid white;
    border-radius: 7px;
    img {
      box-shadow: 0px 0px 12px 2px white;
      border-radius: 5px;
      height: 60%;
      width: 100%;
    }
  }
  .box:hover {
    box-shadow: 0px 0px 15px 5px gold;
  }
  a {
    color: white;
    font-size: 40px;
  }
`;

export default Projekt;
