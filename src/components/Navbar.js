import React from "react";
import { styled } from "styled-components";
import { FaReact } from "react-icons/fa";
import { motion, useTime, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import photo from "../photo/02.jpg";
const Navbar = ({ handleSearch, search, searchWord }) => {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const text = {
    anim: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    left: {
      x: -400,
      opacity: 0,
    },
  };

  const text1 = {
    anim: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    left: {
      x: 400,
      opacity: 0,
    },
  };
  const text2 = {
    anim: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    left: {
      x: 400,
      opacity: 0,
    },
  };
  return (
    <Box>
      <motion.div variants={text2}  className="animate"  
      style={{ rotate }}
       >
      <Link className='boxs' to='/'>
        <FaReact className='logo' />
      </Link>
      </motion.div>
      <ul>
        <motion.li variants={text} animate='anim' initial='left'>
          <Link className='btn' to='/'>
            Home
          </Link>
        </motion.li>
        <motion.li
          variants={text}
          animate='anim'
          initial='left'
          whileHover={{ scale: [null, 0.8, 1] }}
          transition={{ duration: 1 }}
        >
          <Link className='btn' to='about'>
            About
          </Link>
        </motion.li>
        <motion.li
          variants={text1}
          animate='anim'
          initial='left'
          whileHover={{ scale: [null, 0.8, 1] }}
          transition={{ duration: 1 }}
        >
          <Link className='btn' to='contact'>
            Contact
          </Link>
        </motion.li>
        <motion.li
          variants={text1}
          animate='anim'
          initial='left'
          whileHover={{ scale: [null, 0.8, 1] }}
          transition={{ duration: 1 }}
        >
        `  <Link className='btn' to='projekt'>
            projekt
          </Link>`
        </motion.li>
        <form onSubmit={searchWord}>
          <motion.input
            variants={text1}
            animate='anim'
            initial='left'
            whileHover={{ scale: [null, 0.9, 1] }}
            transition={{ duration: 1 }}
            value={search}
            placeholder='search'
            onChange={handleSearch}
          />
        </form>
      </ul>
      <motion.a
        variants={text1}
        animate='anim'
        initial='left'
        whileHover={{ scale: [null, 0.8, 1] }}
        transition={{ duration: 1 }}
        className='btn'
        href={photo}
        download
      >
        downaled
      </motion.a>
    </Box>
  );
};
const Box = styled.div`
  .boxs {
    margin: 10px 50px;
    width: 0px;
    height: 0px;
  }
  .animate{
    margin: 0 40px;
    padding: 1px;
    /* background-color: red; */
    width: 70px;
    height: 70px;
  }
  .example-container {
    width: 0px;
  }
  input {
    width: 300px;
    margin: 10px 0;
    border: none;
    color: aliceblue;
    border-bottom: 2px solid gold;
    background: fixed;
    padding: 5px 15px;
    float: right;
  }
  ::placeholder {
    text-transform: capitalize;
    font-size: 17px;
    color: white;
  }
  ul {
    width: 95%;
    border-bottom: 1px solid gold;
    margin: -40px auto;
    display: flex;
    justify-content: center;
  }
  li {
    list-style-type: none;
    margin: 5px 30px 20px;
  }
  .btn {
    text-align: center;
    width: 250px;
    padding: 10px 40px;
    border-radius: 7px;
    border: 1px solid goldenrod;
    font-size: 15px;
    color: whitesmoke;
    text-decoration: none;
  }
  .btn:hover {
    border: 1px solid gold;
    color: gold;
  }
  .logo {
    color: gold;
    text-align: center;
    font-size: 50px;
    margin: 9px -42px;
  }
  .logo:hover {
    opacity: 0.5;
  }
  .btn {
    padding: 10px 5px;
    width: 100px;
    text-transform: capitalize;
    margin: -14px 35px;
    float: right;
  }
`;

export default Navbar;
