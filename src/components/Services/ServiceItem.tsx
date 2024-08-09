import { IServiceItem } from "../../types/serviceItem";

export function ServiceItem({ image, title, description }: IServiceItem) {
  return (
    <div className="text-center">
      <img className="min-h-[230px] mx-auto mb-3" src={image} />
      <h3 className="mb-4">{title}</h3>
      <p className="mt-0 mx-auto mb-5 max-w-[316px]">{description}</p>
      <a className="text-primary-color no-underline" href="/">
        Learn More
      </a>
    </div>
  );
}
