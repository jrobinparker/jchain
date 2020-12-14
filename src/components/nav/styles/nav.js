import styled from 'styled-components';

export const Container = styled.nav`
  z-index: 200;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  position: absolute;
`;

export const Brand = styled.a`
  margin-left: 5%;
  cursor: pointer;
`;

export const Group = styled.div`
  margin-left: auto;
  margin-right: 10%;
  width: 35%;
  display: flex;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
  }

  @media (orientation: portrait) {
    width: 50%;
  }
`;

export const Link = styled.a`
`;
