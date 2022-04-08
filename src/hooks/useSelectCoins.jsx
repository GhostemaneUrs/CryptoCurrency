import React, { useState } from "react";
import styled from "@emotion/styled";

const useSelectCoins = (title, coins) => {
  const [state, setState] = useState("");
  const Select = () => (
    <>
      <Title>{title}</Title>
      <SelectOptions value={state} onChange={(e) => setState(e.target.value)}>
        <option> --- Select an option --- </option>
        {coins.map((coins) => (
          <option key={coins.id} value={coins.id}>
            {coins.name}
          </option>
        ))}
      </SelectOptions>
    </>
  );

  return [state, Select];
};

const Title = styled.label`
  color: #fff;
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const SelectOptions = styled.select`
  width: 100%;
  border: none;
  padding: 14px;
  outline: none;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export default useSelectCoins;
