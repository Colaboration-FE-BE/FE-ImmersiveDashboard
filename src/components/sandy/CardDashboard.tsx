import { FC } from "react";

interface CardDashboardProps {
  id: string;
  title?: string;
  image?: string;
  value?: string;
}

const CardDashboard: FC<CardDashboardProps> = ({ id, title, image, value }) => {
  return (
    <div
      id={id}
      className=" grid grid-rows-1 w-36 h-32 bg-white rounded shadow p-2"
    >
      <div className=" flex gap-4">
        <div className=" flex items-center justify-center w-6 h-6 rounded-sm bg-sky-100">
          <img className="w-4 h-4 text-sky-500" src={image} />
        </div>
        <h2 className=" flex-wrap text-black text-sm font-semibold text-right ">
          {title}
        </h2>
      </div>
      <div className="">
        <p className="text-slate-500 text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default CardDashboard;
