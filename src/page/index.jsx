import React from "react";
import styled from "@emotion/styled/";
import crypo from "../assets/img/imagen-criptos.png";
import FormCrypo from "../components/Form";

const index = () => {
  return (
    <Container>
      <Grid>
        <Image src={crypo} alt="img-crypo" />
        <div>
          <Title>Trade your crypto instantly</Title>
          <FormCrypo />
        </div>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1400px;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  gap: 1rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  &::after {
    content: "";
    width: 100%;
    height: 6px;
    display: block;
    margin: 10px auto;
    border-radius: 6px;
    background-color: #66a2f2;
  }
`;

export default index;
