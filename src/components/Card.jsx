import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import { Link } from "react-router-dom";
function Card({ item, active }) {
  const { handleOrder } = useContext(OrderContext);
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl bg-white dark:bg-gray-800 shadow-[0_2px_8px_rgba(0,0,0,0.05)] min-w-70 overflow-hidden border border-gray-100 dark:border-gray-700">
      <div
        className="w-full h-32 bg-linear-to-br from-primary to-blue-400 p-4 flex flex-col justify-between"
        data-alt="vibrant blue abstract gradient background"
      >
        <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider w-fit px-2 py-1 rounded">
          mtn
        </span>
        <div className="text-white">
          <h4 className="text-2xl font-black">{item.package.size}GB</h4>
          <p className="text-sm opacity-90">Social Media &amp; Chat</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between p-4 pt-1 gap-4">
        <div>
          <div className="flex justify-between items-end">
            <p className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight">
              GHS {(item?.price / 100).toFixed(2)}
            </p>
            <p className="text-[#4c669a] text-xs font-medium">Valid: 90 Days</p>
          </div>
        </div>
        <Link to="/details">
          <button
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] active:scale-95 transition-transform"
            onClick={() => {
              handleOrder(item, active);
            }}
          >
            <span className="truncate">Buy Now</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
