import { ITeammate } from "../../types/teammate";

export function Teammate({ image, name, area, slogan }: ITeammate) {
  return (
    <div className="bg-white shadow-md p-5">
      <img src={image} />
      <h3 className="text-[20px]">{name}</h3>
      <p className="text-[#aab0bc] uppercase">{area}</p>
      <p>{slogan}</p>
    </div>
  );
}
