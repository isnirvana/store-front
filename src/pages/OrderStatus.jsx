import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, Loader, X } from "lucide-react";
import { motion } from "framer-motion";

export default function OrderStatus() {
  const { id } = useParams();
  // const [status, setStatus] = useState("PROCESSING");
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getOrderStatus() {
      try {
        const response = await fetch(
          `http://192.168.43.52:3000/api/order-status/${id}`,
        );
        if (!response.ok) throw new Error("Failed to fetch order status");
        const data = await response.json();
        setOrderDetails(data);
        console.log("Order Status:", data);
      } catch (error) {
        console.error("Error fetching order status:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getOrderStatus();
  }, [id]);
  // Change this to test different states:
  // "SUCCESS" | "PROCESSING" | "FAILED"
  const status = "SUCCESS";

  const steps = [
    { label: "Order Received", key: "received" },
    { label: "Processing", key: "processing" },
    { label: "Activated", key: "activated" },
  ];

  const getStepStatus = (index) => {
    if (status === "FAILED") {
      if (index === 0) return "completed";
      if (index === 1) return "failed";
      return "pending";
    }

    if (status === "PROCESSING") {
      if (index < 2) return "completed";
      if (index === 2) return "active";
    }

    if (status === "SUCCESS") {
      return "completed";
    }

    return "pending";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-900 py-8 px-4">
        <Loader className="h-10 w-10 text-slate-900 animate-spin" />
        <h2 className="font-bold text-2xl text-slate-900 dark:text-white mt-4 mb-1">
          Checking Order Status
        </h2>
        <p>Please wait while we verify your payment...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-slate-900 py-8 px-4">
      {/* HEADER */}
      <header className="w-full max-w-md mb-6">
        <h1 className="text-xl font-bold text-center text-slate-900 dark:text-white">
          Order Status & Package Details
        </h1>
      </header>

      <main className="w-full max-w-md flex flex-col gap-6">
        {/* STATUS CARD */}
        <motion.section
          className={`rounded-3xl p-8 flex flex-col items-center text-center shadow-xl ${
            status === "FAILED"
              ? "bg-red-500 shadow-red-500/30"
              : "bg-linear-to-br from-primary to-blue-600 shadow-primary/30"
          }`}
        >
          <div className="bg-white/20 backdrop-blur-md rounded-full p-3 mb-4">
            {status === "SUCCESS" && <Check className="h-10 w-10 text-white" />}
            {status === "PROCESSING" && (
              <Loader className="h-10 w-10 text-white animate-spin" />
            )}
            {status === "FAILED" && <X className="h-10 w-10 text-white" />}
          </div>

          <h2 className="text-2xl text-white font-extrabold mb-1">
            {status === "SUCCESS" && "Payment Successful"}
            {status === "PROCESSING" && "Processing Order"}
            {status === "FAILED" && "Payment Failed"}
          </h2>

          <p className="text-white/80 text-sm">
            {status === "SUCCESS" && "Your package has been activated."}
            {status === "PROCESSING" && "We are activating your package."}
            {status === "FAILED" && "Something went wrong. Please try again."}
          </p>
        </motion.section>

        {/* PROGRESS STEPS */}
        <section className="w-full px-2">
          <div className="relative flex justify-between items-center w-full">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-slate-700 -translate-y-1/2"></div>

            {steps.map((step, index) => {
              const stepState = getStepStatus(index);

              return (
                <div
                  key={step.key}
                  className="flex flex-col items-center gap-2 z-10"
                >
                  <motion.div
                    animate={{ scale: stepState === "active" ? 1.1 : 1 }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center ring-4 ring-gray-50 dark:ring-slate-900 transition-all
                      ${
                        stepState === "completed"
                          ? "bg-primary text-white"
                          : stepState === "active"
                            ? "bg-primary text-white"
                            : stepState === "failed"
                              ? "bg-red-500 text-white"
                              : "bg-gray-300 text-gray-500"
                      }`}
                  >
                    {stepState === "completed" && <Check className="h-4 w-4" />}
                    {stepState === "active" && (
                      <Loader className="h-4 w-4 animate-spin" />
                    )}
                    {stepState === "failed" && <X className="h-4 w-4" />}
                  </motion.div>

                  <span
                    className={`text-xs font-semibold ${
                      stepState === "completed" || stepState === "active"
                        ? "text-slate-900 dark:text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* PACKAGE DETAILS */}

        {/* ORDER INFORMATION */}
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg shadow-primary/10 border border-slate-100 dark:border-slate-700 w-full">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
            Order Information
          </h3>

          <div className="space-y-4 text-sm">
            {[
              ["Order ID", "#508910"],
              ["Order Status", orderDetails?.status?.deliveryStatus || "N/A"],
              ["Phone", orderDetails?.status?.phone || "N/A"],
              ["Network", orderDetails?.status?.network || "N/A"],
              [
                "Size",
                orderDetails?.status?.size
                  ? `${orderDetails.status.size} GB`
                  : "N/A",
              ],
              ["Source", "STOREFRONT"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2"
              >
                <span className="text-slate-500 dark:text-slate-400">
                  {label}
                </span>
                <span
                  className={`font-semibold px-3 py-1 rounded-2xl text-sm ${
                    orderDetails?.status?.deliveryStatus === value
                      ? orderDetails?.status?.deliveryStatus === "pending"
                        ? "bg-orange-600/10 text-orange-600"
                        : status === "PROCESSING"
                          ? "bg-blue-600/10 text-blue-600"
                          : "bg-green-600/10 text-green-600"
                      : "text-slate-800"
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg shadow-primary/10 border border-slate-100 dark:border-slate-700 w-full">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
            Package Details
          </h3>

          <div className="flex justify-between mb-2">
            <span className="font-semibold text-slate-900 dark:text-white">
              Plan:{" "}
              {orderDetails?.status?.size
                ? `${orderDetails.status.size} GB`
                : "N/A"}
            </span>
            <span className="font-bold text-primary">
              ₵{(orderDetails?.status?.amount / 100).toFixed(2)}
            </span>
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Validity: 90 Days
          </div>
          <Link to="/" className="w-full">
            <button className="w-full bg-primary text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-all shadow-md shadow-primary/20 active:scale-[0.98]">
              Return to Store
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
