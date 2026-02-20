import { ChevronLeft, Radio, LockKeyhole } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import OrderContext from "../context/OrderContext";
import Input from "../components/ui/input";

function DetailsPlan() {
  const { order } = useContext(OrderContext);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderDetails, setOrderDetails] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderDetails({
      order,
      phone,
      email,
      id: crypto.randomUUID(),
    });
  };

  useEffect(() => {
    console.log(orderDetails);
  }, [orderDetails]);

  if (!order?.price) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <Link to="/">
          <div className="text-primary dark:text-white flex shrink-0 items-center justify-center cursor-pointer">
            <ChevronLeft />
          </div>
        </Link>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Plan Details
        </h2>
      </header>
      <main className="flex-1 overflow-y-auto pb-32">
        <div className="px-4 pt-4">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Order Summary
          </h3>
        </div>

        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 mx-4 mt-2 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
            <Radio />
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
              {order.size}GB
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
              Valid for 90 days • High Speed 5G
            </p>
          </div>
          <div className="shrink-0">
            <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">
              ₵{(order?.price / 100).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="p-4 mx-4 mt-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex justify-between gap-x-6 py-2 border-b border-slate-50 dark:border-slate-700/50">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
              Network
            </p>
            <p className="text-slate-900 dark:text-white text-sm font-medium">
              {order?.network}
            </p>
          </div>
          <div className="flex justify-between gap-x-6 py-2 border-b border-slate-50 dark:border-slate-700/50">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
              Data Size
            </p>
            <p className="text-slate-900 dark:text-white text-sm font-medium">
              {order?.size} GB
            </p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-slate-900 dark:text-white text-base font-bold">
              Price
            </p>
            <p className="text-primary text-base font-bold">
              GHS {(order?.price / 100).toFixed(2)}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="px-4 mt-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <h3 className="text-slate-800 dark:text-white font-bold leading-tight tracking-[-0.015em] my-2">
                  Phone Number
                </h3>

                <Input
                  placeholder="Enter phone number (e.g. 0241234567)"
                  type="tel"
                  value={phone}
                  pattern="[0-9]{10}"
                  handleChange={(e) => setPhone(e.target.value)}
                />
                <h3 className="text-slate-800 dark:text-white font-bold leading-tight tracking-[-0.015em] my-2">
                  Email Address
                </h3>

                <Input
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:ring-primary focus:border-primary dark:text-white"
                  placeholder="Enter your email address "
                  type="email"
                  value={email}
                  handleChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-107.5 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                <LockKeyhole className="text-lg size-4" />
                Secure &amp; Encrypted Payment
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 active:scale-[0.98] transition-all"
              >
                Confirm &amp; Pay ₵{(order?.price / 100).toFixed(2)}
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default DetailsPlan;
