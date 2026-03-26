// import Navbar from "../components/Navbar";
import { History } from "lucide-react";

export default function OrderHistory() {
  return (
    <div className="px-4 py-6 space-y-4">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
        Order History
      </h1>
      <p className="text-slate-500 dark:text-slate-400">
        View your past orders and their details.
      </p>
      <section className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg shadow-primary/10 border border-slate-100 dark:border-slate-700 w-full">
        <p className="text-slate-500 dark:text-slate-400 text-center py-12">
          <History className="mx-auto mb-4 text-primary" size={48} />
          No orders found. Your past orders will appear here.
        </p>
      </section>
    </div>
  );
}
