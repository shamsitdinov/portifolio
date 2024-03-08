import React from "react";
import error from '../photo/error.jpg'
import styled from "styled-components";
const Error = () => {
  return (
    <Container>
      <img src={error} style={{ width: "100%" }} alt='' />
    </Container>
  );
};
const Container = styled.div`
  margin: -150px 0 -120px 0;
  width: 100%;
  height: 80%;
`;
export default Error;
