import styled from 'styled-components';

export const Container = styled.section`
  color: black;
  margin: 0 50px;
  height: 70vh;
  margin-bottom: 10px;
`;

export const Header = styled.h1`
  color: black;
  font-size: 50px;
`;

export const Subtitle = styled.p`
  color: black;
  font-size: 30px;
`;

export const Frame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 30vh;
`;

export const Line = styled.div`
  width: 100%;
  height: 2.5px;
  background-color: #E6E6EA;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5px;
`;

export const Point = styled.div`
  border: 2px solid rgba(0,100,147,1);
  padding: 5px;
  background-color: white;
  border-radius: 50%;
  position: relative;
`;

export const Text = styled.p`
  width: 50%;
  font-size: 20px;
  text-align: center;
`;
