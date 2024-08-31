import { useFetch } from "../../hooks";
import { IServiceItem } from "../../types/serviceItem";
import "latamcomponents/latam-service";

export function Services() {
  const { data } = useFetch("services");

  return (
    <section className="bg-light-gray py-12 px-0">
      <div className="container">
        <h2 className="max-w-[655px] mt-0 mx-auto mb-16 text-center">
          The service we offer is specifically designed to meet your needs.
        </h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {data.map((service: IServiceItem) => (
            <latam-service key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
