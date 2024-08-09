import { IStrategyCard } from "../../types/strategyCard";

export function StrategyCard({ id, title, description }: IStrategyCard) {
  return (
    <div className="items-center bg-white shadow-md flex gap-5 max-2-[520px] p-5 relative [&:nth-child(2)]:left-[50px] [&:nth-child(3)]:left-[20px]">
      <div className="bg-skyblue rounded-full text-primary-color text-[22px] font-semibold py-3 px-3 w-fit">{`0${id}`}</div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
