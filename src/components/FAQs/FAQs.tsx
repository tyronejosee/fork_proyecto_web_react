import { IFaq } from "../../types/faq";
import "latamcomponents/latam-button";
import "latamcomponents/latam-faq";
import { useFetch } from "../../hooks";

export function FAQs() {
  const { data } = useFetch("faqs");

  return (
    <section className="bg-gray pt-12 px-0 pb-24">
      <div className="container grid grid-cols-1 gap-20 md:gap-8 lg:gap-16 lg:grid-cols-2">
        <div className="left">
          <h2 className="mb-5">
            If you don't see an answer to your question, you can send us an
            email from our contact form.
          </h2>
          <p className="mb-5">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis
            ornare.
          </p>
          <latam-button label="All FAQs" href="/faqs" />
        </div>
        <div className="right">
          <div className="flex flex-col gap-5">
            {data.map((item: IFaq) => (
              <latam-faq key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
