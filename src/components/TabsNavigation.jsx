// import { motion } from "motion/react";

// function TabsNavigation({ setActive, active }) {
//   return (
//     <section className="mt-4">
//       <div className="px-4">
//         <motion.div
//           layoutId="activeTab"
//           transition={{ type: "spring", stiffness: 500, damping: 30 }}
//           className="flex bg-white dark:bg-gray-800 p-1 rounded-xl shadow-sm"
//         >
//           <button
//             onClick={() => setActive("MTN")}
//             className={`${active === "MTN" ? "bg-primary text-white" : "text-[#4c669a]"} flex-1 flex flex-col items-center justify-center py-2.5 rounded-lg  text-sm font-bold`}
//           >
//             MTN
//           </button>
//           <button
//             onClick={() => setActive("TELECEL")}
//             // className="flex-1 flex flex-col items-center justify-center py-2.5 rounded-lg  text-white shadow-sm text-sm font-bold"
//             className={`${active === "TELECEL" ? "bg-primary text-white" : "text-[#4c669a]"} flex-1 flex flex-col items-center justify-center py-2.5 rounded-lg text-[#4c669a] text-sm font-bold`}
//           >
//             TELECEL
//           </button>
//           <button
//             onClick={() => setActive("AIRTELTIGO_ISHARE")}
//             // className="flex-1 flex flex-col items-center justify-center py-2.5 rounded-lg text-[#4c669a] text-sm font-bold"
//             className={`${active === "AIRTELTIGO_ISHARE" ? "bg-primary text-white" : "text-[#4c669a]"} flex-1 flex flex-col items-center justify-center py-2.5 rounded-lg text-[#4c669a] text-sm font-bold`}
//           >
//             AT
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default TabsNavigation;

import { motion } from "motion/react";

function TabsNavigation({ setActive, active }) {
  const tabs = ["MTN", "TELECEL", "AIRTELTIGO_ISHARE"];

  return (
    <section className="mt-4">
      <div className="px-4">
        <div className="flex bg-white dark:bg-gray-800 p-1 rounded-xl shadow-sm relative">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="flex-1 cursor-pointer relative flex justify-center py-2.5 rounded-lg"
            >
              {/* Sliding pill for active tab */}
              {active === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
              <span
                className={`relative z-10 font-bold text-sm ${
                  active === tab ? "text-white" : "text-[#4c669a]"
                }`}
              >
                {tab}
                {/* AT */}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TabsNavigation;
