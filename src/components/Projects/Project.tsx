import { IProject } from "../../types/project";

export function Project({ image, title, category }: IProject) {
  return (
    <div className="project">
      <img src={image} />
      <h3>{title}</h3>
      <p>{category}</p>
    </div>
  );
}
