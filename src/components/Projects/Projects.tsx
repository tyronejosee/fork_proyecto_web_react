import { IProject } from "../../types/project";
import "latamcomponents/latam-project";
import { useFetch } from "../../hooks";

export function Projects() {
  const { data } = useFetch("projects");

  return (
    <section className="pt-12 px-0 pb-24">
      <h2 className="mt-0 mx-auto mb-12 max-w-[780px] text-center">
        Check out some of our awesome projects with creative ideas and great
        design.
      </h2>
      <div className="container grid gap-8 grid-cols-1 md:grid-cols-2">
        {data.map((project: IProject) => (
          <latam-project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
