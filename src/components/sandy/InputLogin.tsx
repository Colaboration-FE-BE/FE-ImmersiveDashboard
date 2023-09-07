import React, { FC } from "react";

interface InputProps {
  id: string;
  label?: string;
  name?: string;
  type: string;
  placehoder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputLogin: FC<InputProps> = ({
  id,
  label,
  name,
  type,
  placehoder,
  value,
  onChange,
}) => {
  return (
    <div className="flex-col justify-start items-start gap-2.5 flex mt-5">
      <label className="text-blue-950 text-base font-semibold">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placehoder}
        className=" w-full bg-opacity-50 bg-blue-300 rounded-2xl p-3 text-blue-950"
      />
    </div>
  );
};

export default InputLogin;
