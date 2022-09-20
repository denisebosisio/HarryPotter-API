import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Image = styled.img`
  width: 40vw;
  height: 50vh;
`;

export default function Chracters() {
  const [chracters, setChracters] = useState();

  function getChracters() {
    let API = "https://hp-api.herokuapp.com/api/characters";

    axios.get(API).then((response) => {
      console.log(response.data.message);
      setChracters(response.data.message);
    });
  }

  useEffect(() => {
    document.title = "Name";
  });

  return (
    <>
      <h1>Personagens da Saga:</h1>
      <Link to="/">
        {" "}
        <p>Home</p>{" "}
      </Link>

      <button
        onClick={() => {
          getChracters();
        }}
      >
        Veja os personagens icônicos da melhor saga do mundo!
      </button>
      <Image src={chracters} alt="Imagem do personagem" />
    </>
  );
}
