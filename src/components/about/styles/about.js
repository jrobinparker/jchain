import styled from 'styled-components';

export const Inner = styled.div``;

export const Container = styled.section`
  margin: 0 50px;
`;

export const Frame = styled.div.attrs(({ className }) => ({
  className: className
  }))`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 50px 0;
  justify-content: space-around;
  opacity: 0;

  &:nth-of-type(2) {
    flex-direction: row-reverse;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;

    &:nth-of-type(2) {
      flex-direction: column-reverse;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;


export const Header = styled.h1`
  color: black;
  font-size: 50px;
`;

export const Subtitle = styled.p`
  color: black;
  font-size: 30px;
`;

export const FrameHeader = styled.h1`
  color: black;
  font-size: 50px;
`;

export const FrameSubtitle = styled.p`
  color: black;
  font-size: 30px;
`;

export const Image = styled.img.attrs(({ className }) => ({
  className: className
}))`
  height: auto;
  width: 200px;
`;
