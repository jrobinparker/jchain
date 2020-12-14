import styled from 'styled-components';

export const Container = styled.section.attrs(({ className }) => ({
  className: className
}))`
  color: black;
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  opacity: 0;
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

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Item = styled.div.attrs(({ className }) => ({
  className: className
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  max-height: 100%;
  margin-bottom: 6%;
  border-radius: 5px;
  cursor: pointer;
  color: black;
  opacity: 0;

  @media (max-width: 1065px) {
      width: 40%;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 150px;
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin-bottom: 1px;
  text-align: center;
`;

export const Date = styled.p``;
