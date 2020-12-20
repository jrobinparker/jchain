import styled from 'styled-components';

export const Container = styled.footer`
  padding: 50px 0 50px 0;
  background: rgb(0,100,147);
  background: -moz-linear-gradient(342deg, rgba(0,100,147,1) 0%, rgba(0,0,0,1) 100%);
  background: -webkit-linear-gradient(342deg, rgba(0,100,147,1) 0%, rgba(0,0,0,1) 100%);
  background: linear-gradient(342deg, rgba(0,100,147,1) 0%, rgba(0,0,0,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#006493",endColorstr="#000000",GradientType=1);
  clip-path: ellipse(100% 95% at 48% 100%);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (orientation: portrait) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (orientation: portrait) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Header = styled.h2``;

export const Link = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 150%;

  i {
    font-size: 40px;
  }

  @media (orientation: portrait) {
    width: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Disclaimer = styled.div`
  font-size: 15px;
  margin-top: 50px;
  width: 80%;
`;
