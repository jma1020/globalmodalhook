import React from "react";
import * as Styled from "./Modal.styled";
import DeleteIcon from "../../public/images/icon-delete.svg";
import { Button, Input, Summary, Thumbnail, Title } from "./detail";

interface ModalProps {
  isModal: boolean;
  close: any;
  children: React.ReactNode;
}

const ModalComponent = ({ isModal, close, children }: ModalProps) => {
  return (
    <>
      {isModal && (
        <React.Fragment>
          <Styled.Background onClick={() => close()} />
          <Styled.ModalBox>
            <Styled.ExitButton onClick={() => close()}>
              <DeleteIcon />
            </Styled.ExitButton>
            {children}
          </Styled.ModalBox>
        </React.Fragment>
      )}
    </>
  );
};

ModalComponent.Title = Title;
ModalComponent.Input = Input;
ModalComponent.Summary = Summary;
ModalComponent.Button = Button;
ModalComponent.Thumbnail = Thumbnail;

export default ModalComponent;
