import React, { useEffect, useState, CSSProperties } from "react";
import Navbar from "./components/Navbar";
import { styled } from "styled-components";
import GlobalStyled from "./components/Global";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Email from "./components/Email";
import { Route, Routes, useNavigate } from "react-router-dom";
import Search from "./components/Search";
import photo from "./photo/pexels-francesco-ungaro-998641.jpg";
import { RingLoader } from "react-spinners";
import Projekt from "./components/Projekt";
import Main from "./components/Main";
const App = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "300px auto",
    borderColor: "red",
  };
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const searchWord = (e) => {
    if (search.trim().length !== 0) {
      navigate("./search", { state: search });
    }
    e.preventDefault();
    setSearch("");
  };
  let [loadingg, setLoadingg] = useState(true);
  let [color, setColor] = useState("#114ae6");
  return (
    <>
      {loading ? (
        <RingLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      ) : (
        <Container>
          <GlobalStyled>
            <Navbar
              handleSearch={handleSearch}
              search={search}
              searchWord={searchWord}
            />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/projekt' element={<Projekt />} />
              <Route path='/about' element={<Card />} />
              <Route path='/search' element={<Search />} />
              <Route path='/contact' element={<Email />} />
              <Route path='/contact' element={<Email />} />
            </Routes>
            <Footer />
          </GlobalStyled>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  min-width: 100vh;
  /* background-color: black; */
`;

export default App;
