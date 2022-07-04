import { MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps {
  closeText: string;
  close?: any;
  actionText?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ closeText, close, actionText, onClick }: ButtonProps) => {
  return (
    <BtnContainer>
      <button onClick={() => close()}>{closeText}</button>
      {actionText && <button onClick={onClick}>{actionText}</button>}
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export { Button };
