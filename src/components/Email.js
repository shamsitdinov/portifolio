import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
const Email = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_93s0h3b", "template_c9uacpi", form.current, {
        publicKey: "f7_qewyU8VRyC8rSK",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  const contact = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    left: {
      opacity: 0,
      y: -300,
    },
  };
  const text = {
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    left: {
      x: -300,
      opacity: 0,
    },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("animate");
    } else {
      control.start("initial");
    }
  }, [control, inView]);
  const form = useRef();

  return (
    <Btn>
      <motion.div>
        <motion.h2
          whileHover={{ scale: [null, 1, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          Contact
        </motion.h2>
      </motion.div>

      <Box
        as={motion.div}
        variants={contact}
        animate={control}
        initial='initial'
        ref={ref}
      >
        <motion.form
          ref={form}
          whileHover={{ scale: [null, 0.9, 1] }}
          transition={{ duration: 1 }}
          variants={contact}
          animate='animate'
          initial='left'
          action=''
        >
          <input type='text' name='user_name' placeholder='name' />
          <input type='email' name='user_email' id='' placeholder='email' />
          <textarea
            placeholder='your text'
            name='message'
            id=''
            cols='83'
            rows='2'
          ></textarea>
          <motion.button
            whileHover={{ scale: [null, 0.9, 1] }}
            transition={{ duration: 1 }}
            onClick={sendEmail}
          >
            Send
          </motion.button>
          <a
            href='mailto:
        exzemple@mail.ru'
          >
            send
          </a>
        </motion.form>
        <motion.iframe
          whileHover={{ scale: [null, 0.9, 1] }}
          transition={{ duration: 1 }}
          className='map'
          variants={contact}
          animate='animate'
          initial='left'
          width='700'
          height='500'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170.55501780333685!2d71.8460785641441!3d40.90454307787644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb5a2d9da9eb23%3A0x3362726db25c4cca!2zV1IzVytSQ0MsIFBhbHZhbi1LdWwnLCBBbmRpam9uIFZpbG95YXRpLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e1!3m2!1sru!2s!4v1708927635596!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        ></motion.iframe>
      </Box>
    </Btn>
  );
};
const Btn = styled.div`
  margin: 100px 0;
  h2 {
    margin: 0px 0;
    font-size: 50px;
    text-transform: capitalize;
    color: whitesmoke;
    text-align: center;
  }
`;

const Box = styled.div`
  margin: -150px 0 50px;
  background: fixed;
  form {
    border-radius: 7px;
    box-shadow: 0px 0px 13px 5px gold;
    width: 50%;
    padding: 20px 0;
    margin: 200px 5px 10px 10px;
    a {
      padding: 5px 50px;
      border: 1px solid whitesmoke;
      text-transform: capitalize;
      margin: 0 34%;
      border-radius: 5px;
      text-decoration: none;
      text-align: center;
      color: white;
    }
  }
  input {
    width: 540px;
    display: inline-block;
    margin: 20px 45px;
    color: white;
    border: none;
    border-bottom: 3px solid white;
    background: fixed;
  }
  textarea {
    text-align: center;
    padding: 50px 20px;
    box-sizing: border-box;
    color: white;
    border: 2px solid white;
    border-radius: 7px;
    background: local;
    margin: 50px 40px;
    display: block;
    resize: none;
  }
  .map {
    margin: -510px 10px 10px 10px;
    right: 10px;
    box-shadow: 0px 0px 15px 5px gold;
    border: 2px solid white;
    padding: 10px;
    border-radius: 5px;
    float: right;
    display: inline-block;
  }
  button {
    margin: 20px 45px;
    width: 540px;
    display: inline-block;
  }
  ::placeholder {
    font-size: 20px;
    text-transform: capitalize;
    color: white;
  }
`;
export default Email;
