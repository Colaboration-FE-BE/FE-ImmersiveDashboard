import { FC } from "react";

interface CardMenteProps {
  class_id?: string;
  full_name?: string;
  major?: string;
  institution?: string;
  phone?: string;
  telegram?: string;
  discord?: string;
  email?: string;
}

const CardMente: FC<CardMenteProps> = ({
  class_id,
  full_name,
  major,
  institution,
  phone,
  telegram,
  discord,
  email,
}) => {
  return (
    <div className=" flex justify-between px-6 py-2.5 bg-white rounded shadow gap-50">
      <div className="justify-start items-center gap-6 inline-flex">
        <img src="src\assets\UserFoto.png" />
        <div>
          <h1 className="text-blue-950 text-xl font-bold leading-snug">
            {full_name}
          </h1>
          <p className="self-stretch text-blue-950 text-sm font-medium leading-snug">
            {class_id}
          </p>
          <p className="self-stretch text-blue-950 text-sm font-medium leading-snug">
            {major}
          </p>
          <p className="self-stretch text-blue-950 text-sm font-medium leading-snug">
            {institution}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <table className=" text-blue-950  border-collapse w-full">
          <tbody>
            <tr>
              <td className="font-semibold">Phone :</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td className="font-semibold">Telegram :</td>
              <td>{telegram}</td>
            </tr>
            <tr>
              <td className="font-semibold">Discord :</td>
              <td>{discord}</td>
            </tr>
            <tr>
              <td className="font-semibold">Email :</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardMente;
