import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/";
import useSelectCoins from "../../hooks/useSelectCoins";
import data from "../../assets/data/coins.json";
import Swal from "sweetalert2";

const index = ({ setCryptoCurrency }) => {
  const [coins, setCoins] = useState(data);
  const [cryptos, setCryptos] = useState([]);
  const [coin, SelectCoin] = useSelectCoins("Choose your currency", coins);
  const [crypto, SelectCrypto] = useSelectCoins(
    "Choose your cryptocurrency",
    cryptos
  );

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
      );
      const data = await response.json();
      const crypto = data.Data.map((crypto) => ({
        id: crypto.CoinInfo.Name,
        name: crypto.CoinInfo.FullName,
      }));
      setCryptos(crypto);
    };
    getApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (coin === "" || crypto === "") {
      Swal.fire({
        icon: "error",
        timer: 1500,
        title: "Oops...",
        showConfirmButton: false,
        text: "Please, select a currency and a cryptocurrency",
      });
    } else {
      setCryptoCurrency({ coin, crypto });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectCoin />
      <SelectCrypto />
      <InputSubmit type="submit" value="Quote" />
    </form>
  );
};

const InputSubmit = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  margin-bottom: 20px;
  text-transform: uppercase;
  background-color: #9497ff;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #7a7dee;
  }
`;

export default index;
