import { FC } from "react";

const ButtonKembali: FC = () => {
  return (
    <div className="w-24 h-6 justify-start items-center gap-4 inline-flex">
      <img src="src/assets/Back.svg" alt="back" className="w-6 h-6 relative" />
      <div className="text-blue-950 text-base font-semibold">Kembali</div>
    </div>
  );
};

export default ButtonKembali;
