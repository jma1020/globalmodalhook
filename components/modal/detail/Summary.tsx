import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Summary = ({ children }: TitleProps) => {
  return (
    <>
      <p>{children}</p>
    </>
  );
};

export { Summary };
