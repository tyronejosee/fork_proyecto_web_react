import { useEffect, useState } from "react";
import { StrategyCard } from "./StrategyCard";
import { IStrategyCard } from "../../types/strategyCard";
import "latamcomponents/latam-button";

export function Strategy() {
  const [strategyCards, setStrategyCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/strategyCards")
      .then((res) => res.json())
      .then((data) => setStrategyCards(data));
  }, []);

  return (
    <section className="bg-gray pt-12 px-0 pb-24">
      <div className="container items-center grid gap-10 grid-cols-1 md:grid-cols-2">
        <div className="left">
          <h2 className="mb-7">
            Here are 3 working steps to organize our projects.
          </h2>
          <p className="mb-5">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis.
          </p>
          <p>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur.
          </p>
          <latam-button label="Learn more" href="/strategy"></latam-button>
        </div>
        <div className="right">
          <div className="flex flex-col gap-10">
            {strategyCards.map((card: IStrategyCard) => (
              <StrategyCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
