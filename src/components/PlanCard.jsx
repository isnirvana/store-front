import { Database, Zap } from "lucide-react";
import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import { Link } from "react-router-dom";

function PlanCard({ item, active }) {
  const { handleOrder } = useContext(OrderContext);

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
      <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Database className="material-symbols-outlined text-primary text-3xl" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-[#0d121b] dark:text-white text-lg font-bold">
              {item.package.size}GB
            </h4>
            <p className="text-[#4c669a] text-xs font-medium">
              Valid for 90 Days
            </p>
          </div>
          <p className="text-primary font-bold text-lg leading-tight">
            ₵{item.price / 100}.00
          </p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <Zap className="material-symbols-outlined text-[#4c669a] text-sm scale-80" />
            <span className="text-[#4c669a] text-[10px] font-semibold uppercase">
              High Speed 4G/5G
            </span>
          </div>
          <Link to="/details">
            <button
              onClick={() => {
                handleOrder(item, active);
              }}
              className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg text-sm font-bold active:bg-primary active:text-white transition-colors"
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
