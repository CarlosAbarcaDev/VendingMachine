import { useState } from "react";
import Navbar from "./utils/navbar";
import Products from "./components/productsList";
import Orders from "./components/orderList";

import uuid from "react-uuid";

function App() {
  const [orders, setOrders] = useState([]);

  //Funcion que toma cada una de las ordenes
  const createOrder = (order) => {
    let orderId = {
      ...order,
      orderId: uuid(),
    };

    setOrders([...orders, orderId]);
  };

  const onDeleteOrder = (orderId) => {
    //Eliminar orderID del componente
    const deleteOrder = orders.filter((order) => order.orderId !== orderId);
    setOrders(deleteOrder);
  };

  return (
    <>
      <Navbar />
      <div className="w-full p-4 flex justify-center">
        <h1 className="text-gray-700 text-4xl">
          Order your food and enjoy....
        </h1>
      </div>
      <div className="w-full p-4 mt-4 flex flex-row">
        <div className="w-1/2 mx-4">
          <Products createOrder={createOrder} />
        </div>
        <div className="w-1/2 mx-4">
          {orders.map((order, index) => (
            <Orders
              key={index}
              orders={order}
              index={index}
              onDeleteOrder={onDeleteOrder}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
