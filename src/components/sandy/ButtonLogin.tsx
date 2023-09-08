import React, { FC } from "react";

interface ButtonLoginProps {
  id: string;
  label?: string;
  onClick?: React.MouseEventHandler;
}

const ButtonLogin: FC<ButtonLoginProps> = ({ id, label, onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="w-35 h-10 mt-8 px-6 py-4 bg-blue-950 rounded-3xl justify-center items-center gap-2.5 inline-flex text-white text-base font-semibold">
      {label}
    </button>
  );
};

export default ButtonLogin;
