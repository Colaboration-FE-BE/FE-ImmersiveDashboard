import React, { FC } from "react";

interface InputFormProps {
  title?: string;
}

const InputForm: FC<InputFormProps> = ({ title }) => {
  return (
    <div>
      <label className=" text-blue-800 font-semibold">{title}</label>
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-full bg-slate-200"
      />
    </div>
  );
};

export default InputForm;
