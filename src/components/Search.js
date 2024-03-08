import React from "react";
import { useLocation } from "react-router-dom";
import { counts } from "./Data";
import styled from "styled-components";
import Error from "./Error";
import { motion } from "framer-motion";
const Search = () => {
  const location = useLocation();
  const searchResult = location.state;
  const searchData = counts.filter((count) =>
    count.titles.toLowerCase().includes(searchResult.toLowerCase())
  );
  const text = {
    anim: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    left: {
      opacity: 0,
      y: 300,
    },
  };
  return (
    <Container>
      {searchData.length ? (
        searchData.map((item, index) => (
          <motion.div
            whileHover={{ scale: [null, 0.9, 1] }}
            transition={{ duration: 1 }}
            variants={text}
            animate='anim'
            initial='left'
            className='box1'
          >
            <div>{item.imgg}</div>
            <h3>{item.titles}</h3>
            <p>{item.texts} </p>
          </motion.div>
        ))
      ) : (
        <Error />
      )}
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  margin: 191px 0;
  .box1 {
    background-color: #9391917a;
    border: 1px solid goldenrod;
    border-radius: 7px;
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto 50px;
    color: white;
    width: 50%;
    padding: 40px 20px;
  }
  .box2 {
    display: flex;
  }
  .box1:hover {
    background-color: rgba(0,0,0,0);
    box-shadow: 0px 0px 25px 5px gold;
  }
  h2 {
    text-transform: uppercase;
    font-size: 50px;
    left: 45%;
    position: absolute;
    margin: -150px 0;
    text-align: center;
    color: white;
  }
  p {
    color: white;
    margin: 10px 0;
  }
  .icons {
    color: white;
    font-size: 50px;
  }
  button {
    width: 100%;
    margin: 50px 0;
  }
`;
export default Search;
