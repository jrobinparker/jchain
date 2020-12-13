import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 10vw;
  background: rgb(0,100,147);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
`;

export const Group = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-top: auto;
    margin-bottom: 0;
  }
`;
