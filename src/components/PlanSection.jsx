import PlanCard from "./PlanCard";
import TabsNavigation from "./TabsNavigation";
// import { useState, useEffect } from "react";
// import fetchData from "../api/api.js";
import PlanCardSkeleton from "./PlanCardSkeleton.jsx";

function PlanSection({ plans, loading, active, setActive }) {
  const data = plans[active] || [];

  if (loading) {
    return (
      <>
        <TabsNavigation setActive={setActive} active={active} />
        <section className="px-4 py-6 space-y-4">
          {[...Array(5)].map((_, index) => (
            <PlanCardSkeleton key={index} />
          ))}
        </section>
      </>
    );
  }

  return (
    <>
      <TabsNavigation setActive={setActive} active={active} />
      <section className="px-4 py-6 space-y-4">
        {data.map((item) => (
          <PlanCard key={item.id} item={item} active={active} />
        ))}
      </section>
    </>
  );
}

export default PlanSection;
