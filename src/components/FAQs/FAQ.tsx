import { IFaq } from "../../types/faq";

export function FAQ({ question, answer }: IFaq) {
  return (
    <div className="shadow-md cursor-pointer">
      <details className="p-5 bg-white rounded">
        <summary className="bg-white text-lg font-semibold marker:text-primary-color">
          {question}
        </summary>
        <p>{answer}</p>
      </details>
    </div>
  );
}
