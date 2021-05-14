import { useState } from "react";
import Countdown from "react-countdown";

const OrderList = ({ orders, onDeleteOrder }) => {
  const [time] = useState(Date.now() + orders.time);
  return (
    <div className="w-full">
      <div className="w-full p-4 rounded shadow lg:flex lg:flex-row my-4">
        <div className="w-1/3 flex flex-row ">
          <h1 className="text-gray-800 text-xl font-bold">Name:</h1>
          <h1 className="text-gray-500 text-xl font-light mx-4">
            {orders.name}
          </h1>
        </div>
        <div className="w-1/3 flex flex-row ">
          <h1 className="text-gray-800 text-xl font-bold">Time:</h1>
          <h1 className="text-gray-500 text-xl font-light mx-4">
            {orders.time / 1000}
          </h1>
        </div>
        <div className="sm:w-full lg:w-1/3 flex flex-row ">
          {time !== "" ? (
            <Countdown date={time}>
              <button
                onClick={() => onDeleteOrder(orders.orderId)}
                className="w-1/2 my-2 rounded bg-green-500 text-white py-2"
              >
                Take it!!!!
              </button>
            </Countdown>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
