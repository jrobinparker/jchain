import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 20vw;
  background: #272953;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  z-index: 100;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 15px;
  left: 20px;
  z-index: 200;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    margin-bottom: 5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45.5deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45.5deg)' : 'rotate(0)'};
    }

  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
  margin-left: 15px;
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
