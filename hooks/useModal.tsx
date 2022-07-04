import React, { useState } from "react";
import ModalComponent from "../components/modal/Modal";

function useModal() {
  const [isModal, setIsModal] = useState(false);

  const open = () => {
    setIsModal(true);
  };
  const close = () => {
    setIsModal(false);
  };

  return { isModal, open, close };
}

export default useModal;
