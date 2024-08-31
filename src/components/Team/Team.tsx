import checkIcon from "../../assets/images/icons/check.svg";
import userIcon from "../../assets/images/icons/user.svg";
import trophyIcon from "../../assets/images/icons/trophy.svg";
import { ITeammate } from "../../types/teammate";
import "latamcomponents/latam-team";
import { useFetch } from "../../hooks";

export function Team() {
  const { data } = useFetch("team");

  return (
    <section className="bg-gray pt-12 px-0 pb-24">
      <div className="container grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr_auto]">
        <div className="info">
          <h2>We are proud of our design team</h2>
          <p>
            Just sit back and relax while we take care of your business needs
            for you.
          </p>
        </div>
        <div className="flex flex-wrap gap-24">
          <div className="flex flex-col items-center text-center md:gap-3 flex-1">
            <div className="bg-skyblue p-4 w-fit rounded-full">
              <img className="h-[26px]" src={checkIcon} alt="" />
            </div>
            <h3 className="text-[41px]">1000+</h3>
            <p>Completed Projects</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-skyblue p-4 w-fit rounded-full">
              <img className="h-[26px]" src={userIcon} alt="" />
            </div>
            <h3 className="text-[41px]">50k</h3>
            <p>Happy cutomers</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-skyblue p-4 w-fit rounded-full">
              <img className="h-[26px]" src={trophyIcon} alt="" />
            </div>
            <h3 className="text-[41px]">20k</h3>
            <p>Awards won</p>
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 col-span-full md:grid-cols-2 lg:grid-cols-4">
          {data.map((item: ITeammate) => (
            <latam-team key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
