import React from "react";
import styled from "@emotion/styled";

const index = ({ quoteCrypo }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    quoteCrypo;
  return (
    <>
      <div>
        <Title>
          {quoteCrypo && quoteCrypo.PRICE
            ? "Your comparison is this"
            : "You have no comparison selected"}
        </Title>
        {quoteCrypo && quoteCrypo.PRICE && (
          <>
            <Container>
              <div>
                <Price>
                  The price is: <span>{PRICE}</span>
                </Price>
                <Texto>
                  Highest price: <span>{HIGHDAY}</span>
                </Texto>
                <Texto>
                  Lowest price: <span>{LOWDAY}</span>
                </Texto>
                <Texto>
                  Variation: <span>{CHANGEPCT24HOUR}</span>
                </Texto>
                <Texto>
                  Last update: <span>{LASTUPDATE}</span>
                </Texto>
              </div>
              <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="img-crypo"
              />
            </Container>
          </>
        )}
      </div>
    </>
  );
};

const Container = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100px;
`;

const Title = styled.h1`
  color: #fff;
  display: block;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
`;

const Price = styled.p`
  color: #fff;
  font-size: 24px;
  margin-bottom: 5px;
  span {
    font-weight: 700;
  }
`;

const Texto = styled.p`
  color: #fff;
  font-size: 24px;
  margin-bottom: 5px;
  span {
    font-weight: 700;
  }
`;

export default index;
