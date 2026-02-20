import { useState } from "react";
import OrderContext from "./OrderContext";

function OrderProvider({ children }) {
  const [order, setOrder] = useState({});

  const handleOrder = ({ price, package: packageSize }, active) => {
    setOrder({
      network: active,
      price,
      size: packageSize.size,
    });
  };

  const contextValue = {
    order,
    handleOrder,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;
