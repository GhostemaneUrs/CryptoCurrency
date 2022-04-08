import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/";
import FormCrypo from "../components/Form";
import ListCrypo from "../components/List";
import MoonLoader from "react-spinners/ClipLoader";

const index = () => {
  const [loading, setLoading] = useState(false);
  const [quoteCrypo, setQuoteCrypo] = useState({});
  const [cryptocurrency, setCryptoCurrency] = useState({});

  useEffect(() => {
    if (Object.keys(cryptocurrency).length > 0) {
      setLoading(true);
      const { coin, crypto } = cryptocurrency;
      const quoteCrypo = async () => {
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
        );
        const data = await response.json();
        setQuoteCrypo(data.DISPLAY[crypto][coin]);
        setLoading(false);
      };
      quoteCrypo();
    }
  }, [cryptocurrency]);

  return (
    <Container>
      <Title>Trade your crypto instantly</Title>
      <Grid>
        <div>
          <FormCrypo setCryptoCurrency={setCryptoCurrency} />
        </div>
        {loading ? (
          <ContainerSpinner>
            <MoonLoader size={150} color={"#fff"} loading={loading} />
          </ContainerSpinner>
        ) : (
          <ListCrypo quoteCrypo={quoteCrypo} />
        )}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1400px;
`;

const ContainerSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  gap: 1rem;
  width: 100%;
  display: grid;
  margin: 0 auto;
  max-width: 900px;
  justify-content: center;
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  text-transform: uppercase;
  &::after {
    content: "";
    width: 100%;
    height: 6px;
    display: block;
    max-width: 500px;
    margin: 10px auto;
    border-radius: 6px;
    background-color: #66a2f2;
  }
`;

export default index;
