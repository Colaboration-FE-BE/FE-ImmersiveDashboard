const CardLog = () => {
  return (
    <div className=" flex justify-between gap-28 px-6 py-2.5 bg-white rounded shadow ">
      <div>
        <p className=" whitespace-nowrap">End Of Section</p>
        <h4 className="text-blue-950 text-base font-semibold leading-tight">
          Bagas
        </h4>
        <p>Sep 29,2023</p>
      </div>
      <div className="">
        <p className=" whitespace-normal">
          Quam dolor eveniet iusto dolores, molestiae rerum laudantium fugiat
          illum nihil et, ut atque dolorem necessitatibus omnis incidunt
          voluptas repellendus natus suscipit. Veritatis ipsam voluptas, placeat
          et eum, porro ratione repudiandae eaque facilis consectetur beatae rem
          aut, dicta officia earum at nihil vero placeat labore, ipsa sunt
          officiis!
        </p>
        <div className=" mt-5">
          <table>
            <tbody>
              <tr className="">
                <td className="">Changed Status :</td>
                <td>Cantinue Section</td>
                <td>
                  <img
                    src="src\assets\clock-rewind.svg"
                    className="bg-sky-500 bg-opacity-30 rounded justify-center items- p-1"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardLog;
