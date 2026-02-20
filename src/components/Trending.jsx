// import { useEffect } from "react";
import ListCard from "./ListCard";
// import { useEffect } from "react";

function Trending({ plans, active }) {
  // if (plans.length === 0) {
  // useEffect(() => {
  //   // console.log("Trending data:", plans, loading);
  // }, [plans]);
  const trendingPlans = Object.values(plans).flat().slice(0, 5);
  console.log("Trending plans:", trendingPlans);

  return (
    <section>
      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <h3 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Trending Plans
        </h3>
        <button className="text-primary text-sm font-semibold">See all</button>
      </div>
      <ListCard trendingPlans={trendingPlans} active={active} />
    </section>
  );
}

export default Trending;
