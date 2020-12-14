import styled from 'styled-components';

export const Container = styled.section.attrs(({ className }) => ({
  className: className
}))`
  color: black;
  margin: 0 50px;
  height: 70vh;
  margin-bottom: 10px;
  opacity: 0;

  @media (max-width: 900px) {
    height: 150vh;
  }
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

  @media (max-width: 750px) {
    flex-direction: column;
    height: 80vh;
  }
`;

export const Line = styled.div.attrs(({ className }) => ({
  className: className
}))`
  width: 1%;
  height: 2.5px;
  background-color: #E6E6EA;

  @media (max-width: 900px) {
  }
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 750px) {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Item = styled.div.attrs(({ className }) => ({
  className: className
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;

  @media (max-width: 750px) {
    flex-direction: row;
    width: 30vw;
  }
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
