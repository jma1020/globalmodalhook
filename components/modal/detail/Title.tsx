import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <>
      <h2>{children}</h2>
    </>
  );
};

export { Title };
