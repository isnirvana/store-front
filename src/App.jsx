import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import Navbar from "./components/Navbar";
import OrderProvider from "./context/OrderProvider";
import DetailsPlan from "./pages/DetailsPlan";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import OrderStatus from "./pages/OrderStatus";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white min-h-screen">
      <OrderProvider>
        <AnimatedRoutes />
      </OrderProvider>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <LayoutGroup>
        <Routes location={location}>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/details"
            element={
              <PageTransition>
                <DetailsPlan />
              </PageTransition>
            }
          />
          <Route path="order-status/:id" element={<OrderStatus />} />
        </Routes>
      </LayoutGroup>
    </AnimatePresence>
  );
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default App;
