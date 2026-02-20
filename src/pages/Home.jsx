import PlanSection from "../components/PlanSection";
import Trending from "../components/Trending";
import { useState, useEffect } from "react";
import fetchData from "../api/api.js";

export default function Home() {
  const [active, setActive] = useState("MTN");
  const [plans, setPlans] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (plans[active]) {
      setLoading(false);
      return;
    }

    async function fetchPlan() {
      setLoading(true);
      try {
        const response = await fetchData(active);
        const result = await response.json();
        setPlans((prev) => ({ ...prev, [active]: result.payload }));
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPlan();
  }, [active]);

  return (
    <>
      <Trending plans={plans} active={active} />
      <PlanSection
        plans={plans}
        loading={loading}
        active={active}
        setActive={setActive}
      />
    </>
  );
}
