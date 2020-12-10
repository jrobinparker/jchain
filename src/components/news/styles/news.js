import styled from 'styled-components';

export const Container = styled.section`
  color: black;
  display: flex;
  flex-direction: column;
  margin: 0 50px;
`;

export const Header = styled.h1`
  font-size: 50px;
`;

export const Subheader = styled.p`
  font-size: 30px;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  justify-content: space-around;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  max-height: 100%;
  margin-bottom: 6%;
  border-radius: 5px;
  cursor: pointer;
  color: black;
`;

export const Image = styled.img`
  width: auto;
  max-height: 70%;
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin-bottom: 1px;
`;

export const Date = styled.p``;
