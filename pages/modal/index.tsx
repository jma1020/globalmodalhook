import React, { useState } from "react";
import type { NextPage } from "next";
import useModal from "../../hooks/useModal";
import ModalComponent from "../../components/modal/Modal";

const ModalPage = () => {
  const { isModal, open, close } = useModal();

  // 임시 썸네일 이미지
  const [img, setImg] = useState("");
  const btnClick = () => {
    alert("클릭");
  };

  return (
    <div>
      <ModalComponent isModal={isModal} close={close}>
        <ModalComponent.Title>포스트 미리보기</ModalComponent.Title>
        <ModalComponent.Summary>상세 내용</ModalComponent.Summary>
        <ModalComponent.Thumbnail state={img} setState={setImg} />
        <ModalComponent.Button closeText="닫기" close={close} />
        <ModalComponent.Button
          closeText="닫기"
          close={close}
          actionText="열기"
          onClick={btnClick}
        />
      </ModalComponent>

      {/* <ModalComponent 
        isModal={isModal} 
        close={close} 
        tit='' 
        sum='', 
        onClick={btnClick}
        closeText='닫'
        actionText='열'
        state={img}
        setState={setImg}
      /> */}

      <button onClick={() => open()}>클릭미</button>
      <button onClick={() => close()}>닫힌다</button>
    </div>
  );
};

export default ModalPage;
