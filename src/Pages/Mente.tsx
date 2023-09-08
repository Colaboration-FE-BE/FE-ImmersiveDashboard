import Tables from "../components/sandy/Tables";
import Filter from "../components/sandy/Filter";
import Layout from "../Layout";
const Mente = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Mente;
