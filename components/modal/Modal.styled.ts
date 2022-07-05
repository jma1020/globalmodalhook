import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: #555;
`;

export const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, -50%);
  padding: 3rem;
  background-color: white;
  border-radius: 1rem;
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
