import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { inView, motion, useAnimation, useInView } from "framer-motion";
import photo from "../photo/bbb.avif";
import photo1 from "../photo/top12.jpg";
import photoo from "../photo/rrr.jpg";
import photo2 from "../photo/ooo-removebg-preview.png";

const Main = () => {
  const text = {
    anim: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    left: {
      y: -400,
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
      x: -400,
      opacity: 0,
    },
  };
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("anim");
    } else {
      control.start("left");
    }
  }, [control, inView]);
  const text2 = {
    anim: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    left: {
      y: -300,
      opacity: 0,
    },
  };

  return (
    <Container>
      <motion.div
        variants={text}
        animate='anim'
        initial='left'
        className='devolper-card'
      >
        <div className='my'>
          <motion.h1
            whileHover={{ scale: [null, 0.9, 1] }}
            transition={{ duration: 1 }}
          >
            Frontend Developer <br /> & UI Designer <br />
            <Link className='btn' to='contact'>
              contat
            </Link>
            <Link className='btn' to='about'>
              about
            </Link>
          </motion.h1>
          <a
          className="log"
            href='https://github.com/shamsitdinov/shamsitdinov'
            target='_blank'
            rel='noopener noreferrer'
          >
            <motion.img
              whileHover={{ scale: [null, 0.9, 1] }}
              transition={{ duration: 1 }}
              className='devolper'
              src={photo2}
              alt=''
            />
          </a>
        </div>
      </motion.div>

      <Box>
        <motion.div>
          <motion.img
            variants={inView}
            animate='anim'
            initial='left'
            whileHover={{ scale: [null, 0.9, 1] }}
            transition={{ duration: 1 }}
            src='https://cdn.sanity.io/images/tlr8oxjg/production/1ca7b34a8d5308a03ae186dfe72caabce0327fe2-1456x816.png?w=3840&q=80&fit=clip&auto=format'
            alt=''
          />
        </motion.div>
        <div className='div1'></div>
        <div className='div2'></div>

        <div className='text-card'>
          <motion.p
            variants={inView}
            animate='anim'
            initial='left'
            whileHover={{ scale: [null, 0.9, 1] }}
            transition={{ duration: 1 }}
          >
            <h2>my portfolio </h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            cumque, delectus molestiae neque consequatur nobis est explicabo
            ipsum natus, mollitia esse voluptate quisquam. Earum optio
            cupiditate nemo, consequatur quasi numquam, deleniti delectus fuga
            minima minus, maiores ratione natus quos doloremque praesentium.
            Dicta consequuntur, magnam labore a, aperiam esse iure
            exercitationem optio fugit non odit cumque officiis voluptatem!
            Soluta itaque unde neque libero at ducimus incidunt tenetur?
            Provident quasi nisi ratione distinctio sed omnis consectetur rem!
            Quisquam nobis odit illum dolor quia incidunt officiis sunt
            dignissimos velit architecto! Sint fugit, quod delectus impedit
            cumque, velit voluptatum rerum earum ab quis suscipit! Provident
            quasi nisi ratione distinctio sed omnis consectetur rem! Quisquam
            nobis odit illum dolor quia incidunt officiis sunt dignissimos velit
            architecto! Sint fugit, quod delectus impedit cumque, velit
            voluptatum rerum earum ab quis suscipit! Provident quasi nisi
            ratione distinctio sed omnis consectetur rem! Quisquam nobis odit
            illum dolor quia incidunt officiis sunt
          </motion.p>
        </div>
      </Box>

      {/* //////////////////////// */}

      <Boxs animate={control} initial='initial' variants={inView}>
        <motion.div className='textt'>
          <motion.p
            variants={inView}
            animate='anim'
            initial='left'
            whileHover={{ scale: [null, 0.9, 1] }}
            transition={{ duration: 1 }}
          >
            <h2>my portfolio </h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            cumque, delectus molestiae neque consequatur nobis est explicabo
            ipsum natus, mollitia esse voluptate quisquam. Earum optio
            cupiditate nemo, consequatur quasi numquam, deleniti delectus fuga
            minima minus, maiores ratione natus quos doloremque praesentium.
            Dicta consequuntur, magnam labore a, aperiam esse iure
            exercitationem optio fugit non odit cumque officiis voluptatem!
            Soluta itaque unde neque libero at ducimus incidunt tenetur?
            Provident quasi nisi ratione distinctio sed omnis consectetur rem!
            Quisquam nobis odit illum dolor quia incidunt officiis sunt
            dignissimos velit architecto! Sint fugit, quod delectus impedit
            cumque, velit voluptatum rerum earum ab quis suscipit! Provident
            quasi nisi ratione distinctio sed omnis consectetur rem! Quisquam
            nobis odit illum dolor quia incidunt officiis sunt dignissimos velit
            architecto! Sint fugit, quod delectus impedit cumque, velit
            voluptatum rerum earum ab quis suscipit! Provident quasi nisi
            ratione distinctio sed omnis consectetur rem! Quisquam nobis odit
            illum dolor quia incidunt officiis sunt
          </motion.p>
        </motion.div>
        <div className='imgg'>
          <motion.img
            variants={inView}
            animate='anim'
            initial='left'
            whileHover={{ scale: [null, 0.9, 1] }}
            transition={{ duration: 1 }}
            src={photo}
            alt=''
          />
        </div>
      </Boxs>
    </Container>
  );
};
const Container = styled.div`
  min-width: 100vh;
  padding: 10px;
  margin: 0 auto;
  h2 {
    text-transform: capitalize;
    color: white;
  }
  .devolper-card {
    text-align: center;
    color: white;
    padding: 0 20px;
    margin: 0 auto;
    min-height: 110vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${photoo});
    border-radius: 2px;
    box-shadow: inset -21px 61px 41px #000000, inset 21px -91px 91px #000000;
  }
  .my {
    display: flex;
    padding: 50px 30px;
    width: 75%;
    margin: 100px auto;
    height: 100vh;
    color: aliceblue;
    h1 {
      text-align: left;
      font-family: "Ibarra Real Nova", serif;
      font-optical-sizing: auto;
      font-style: normal;
      font-weight: 100;
      margin: 90px 10px;
      font-size: 60px;
    }
    .log{
      border: none;
    }
  }
  .btn {
    text-transform: uppercase;
    margin: 0px 20px;
    padding: 10px 40px;
    height: 40px;
    border-radius: 7px;
    border: 1px solid goldenrod;
    font-size: 15px;
    color: #ffffff;
    text-decoration: none;
  }
  .devolper {
    margin: 50px 0;
    width: 500px;
    border-radius: 500px;
  }
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  margin: 100px -150px 0 10px;
  color: white;
  img {
    float: right;
    border-radius: 7px;
    margin: 0px 0 0 0;
    width: 48%;
    height: 500px;
  }
  .div1 {
    border-radius: 5px;
    position: absolute;
    left: 50%;
    width: 5px;
    height: 1250px;
    background-color: #ffffff;
  }
  .div2 {
    top: 600px;
    left: 727px;
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: white;
  }
  .text-card {
    margin: 150px 0px 0 0px;
    width: 48%;
    height: 500px;
    color: aliceblue;
    padding: 0px 0px 0 0px;
    p {
      font-size: 25px;
    }
  }
`;
const Boxs = styled.div`
  width: 100%;
  margin: 100px 20px 100px 10px;
  color: white;
  img {
    display: inline-block;
    border-radius: 7px;
    margin: 150px 0 0 0px;
    width: 48%;
    height: 500px;
  }
  .textt {
    width: 48%;
    height: 500px;
    float: right;
    color: aliceblue;
    margin: 150px 0px 0 0px;
    padding: 0px 0px 0 0px;
    p {
      font-size: 25px;
    }
  }
`;

export default Main;

// import React from 'react'

// const Main = () => {
//   return (
//     <div>Main</div>
//   )
// }

// export default Main
