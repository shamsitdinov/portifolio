import React from "react";
import { FaTelegram } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const Footer = () => {
  const text2 = {
    anim: {
      y: 0,
      transition: {
        duration: 2,
      },
    },
    left: {
      y: 1000,
    },
  };
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <Box>
      <Icons
        as={motion.div}
        variants={text2}
        animate='anim'
        initial='left'
        transition='transition'
      >
        <motion.div
          className='boxes'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <a href='https://t.me/developer2007'>
            <FaTelegram className='icon' />
          </a>
        </motion.div>
        <motion.div
          className='boxes'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <a href='https://www.instagram.com/'>
            <LuInstagram className='icon' />
          </a>
        </motion.div>
        <motion.div
          className='boxes'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <a href='https://www.facebook.com/'>
            <FaFacebook className='icon' />
          </a>
        </motion.div>
        <motion.div
          className='boxes'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <a href='https://www.youtube.com/'>
            <FaYoutube className='icon' />
          </a>
        </motion.div>
      </Icons>
    </Box>
  );
};
const Box = styled.div`
  height: 70px;
  margin: 0px 0;
  width: 100%;
  opacity: 0.7;
  background-color: #555;
`;
const Icons = styled.div`
  display: flex;
  padding: 20px 0;
  text-align: center;
  width: 500px;
  color: white;
  font-size: 30px;
  margin: 0px 40%;
  a {
    justify-content: space-between;
    text-decoration: none;
    color: white;
    margin: 0 20px -10px;
  }

  a:hover {
    color: gold;
  }
`;

export default Footer;
