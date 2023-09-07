import Tables from "../components/sandy/Tables";
import Filter from "../components/sandy/Filter";

const Mente = () => {
  return (
    <div className="flex w-full content-center justify-center items-center">
      <div className=" content-center grid grid-cols-1 gap-20">
        <div></div>
        <div>
          <Filter />
        </div>
        <div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Mente;
