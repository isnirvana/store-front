import Card from "./Card";

function ListCard({ trendingPlans, active }) {
  return (
    <div className="flex">
      <div className="flex overflow-x-auto no-scrollbar items-stretch gap-4 p-4">
        {trendingPlans.map((item) => (
          <Card key={item.id} item={item} active={active} />
        ))}
      </div>
    </div>
  );
}

export default ListCard;
