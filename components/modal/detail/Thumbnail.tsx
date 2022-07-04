import React from "react";
import styled from "styled-components";

interface ProfileImgStyle {
  img: any;
}

interface ThumbnailProps {
  state: string | undefined;
  setState: any;
}

const Thumbnail = ({ state, setState }: ThumbnailProps) => {
  const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      console.log("이거는 i", i);
      setState(URL.createObjectURL(i));
    }
  };
  return (
    <ThumbnailContainer>
      <ProfileImg htmlFor="img" img={state} />
      <ImageInput type="file" id="img" onChange={uploadToClient} />
    </ThumbnailContainer>
  );
};

export { Thumbnail };

const ThumbnailContainer = styled.div``;

const ProfileImg = styled.label<ProfileImgStyle>`
  display: inline-block;
  padding: 70px 70px;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
  position: relative;
  background-color: #eee;
  &::after {
    display: block;
    content: "";
    background: ${(props) =>
      props.img ? null : "url(/images/img-button.png) no-repeat"};
    background-size: 50px, 50px;
    width: 50px;
    height: 50px;
    /* border-radius: 40px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ImageInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;
