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
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.h2``;

export const Link = styled.a``;

export const IconRow = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-around;
`;

export const Icon = styled.i``;

export const Disclaimer = styled.div`
  margin-top: 50px;
  width: 80%;
`;
