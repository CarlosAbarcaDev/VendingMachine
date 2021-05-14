import { map } from "lodash";
import { data } from "../data/products";
const Products = ({ createOrder }) => {
  const onBuyIt = (item) => {
    createOrder(item);
  };
  return (
    <>
      <div className="sm:flex sm:w-full lg:grid grid-cols-2 gap-4">
        {map(data, (item, index) => {
          return (
            <div
              key={index}
              className="sm:w-full lg:w-2/3  p-4 rounded-none shadow bg-gray-800"
            >
              <div className="w-full flex flex-row">
                <div className="w-1/2 mx-4">
                  <h1 className="text-xl text-white">Name</h1>
                  <h1 className="text-xl text-gray-400">
                    {data ? item.name : "- -"}
                  </h1>
                </div>
                <div className="w-1/2 mx-4">
                  <h1 className="text-xl text-white">Time</h1>
                  <h1 className="text-xl text-gray-400">
                    {data ? item.time / 1000 : "- -"}
                  </h1>
                </div>
              </div>
              <div className="w-full flex flex-row mt-5">
                <button
                  onClick={() => onBuyIt(item)}
                  className="bg-white w-full rounded-sm"
                >
                  Buy!!
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
