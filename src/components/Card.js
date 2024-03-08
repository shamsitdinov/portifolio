import { styled } from "styled-components";
import { motion } from "framer-motion";
import { counts } from "./Data";
const Card = () => {
  const text = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    left: {
      y: -200,
      opacity: 0

    },
  };
  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     control.start("animate");
  //   } else {
  //     control.start("initial");
  //   }
  // }, [control, inView]);

  return (
    <Container>
      <motion.h2
        whileHover={{ scale: [null, 0.8, 1] }}
        transition={{ duration: 1 }}>
        about
      </motion.h2>
      <div className='box2'>
        {counts.map((count, index) => (
          <motion.div
            key={index}
            variants={text}
            animate='animate'
            initial='left'
            whileHover={{ scale: [null, 0.9, 1] }}
            transition={{ duration: 1 }}
            className='box1'
          >
            <motion.div
              className="icons"
              animate={{
                opacity: 1,
              }}
            >
              {count.imgg}
            </motion.div>
            <motion.h3
              variants={text}
              transition='transition'
              animate='animate'
              initial='left'
            >
              {count.titles}
            </motion.h3>
            <p>{count.texts} </p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 300px 0 0 0;
  .box1 {
    border: 1px solid white;
    border-radius: 7px;
    text-transform: uppercase;
    text-align: center;
    margin: 10px 10px;
    color:white;
    width: 25%;
    padding: 40px 20px;
    background-color: black;
  }
  .box2 {
    display: flex;
  }
  .box1:hover {
    box-shadow: 0px 0px 15px 6px gold;
  }
  h2 {
    font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-style: normal;
    text-transform: uppercase;
    font-size: 50px;
    left: 45%;
    position: absolute;
    margin: -150px 0;
    text-align: center;
    color: white;
  }
  h3{
    color:white;
  }
  p {
    color: gold;
    margin: 10px 0;
  }
  .icons {
    filter: drop-shadow(5px 5px 15px #fff);
    color:white;
    font-size: 50px;
  }
  button {
    width: 100%;
    margin: 50px 0;
  }
`;
export default Card;
