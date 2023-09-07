import React, { FC } from "react";

interface InputFormProps {
  title?: string;
}

const InputForm: FC<InputFormProps> = ({ title }) => {
  return (
    <div>
      <label htmlFor="">{title}</label>
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-full"
      />
    </div>
  );
};

export default InputForm;
