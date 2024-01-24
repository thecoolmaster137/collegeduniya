import { FAQCard } from './faq-card';
import { PageHeader, PageHeaderHeading } from './page-header';

export function FAQ() {
  return (
    <section className="flex flex-col items-center pb-8">
      <PageHeader className="pb-8 items-center">
        <p className="uppercase text-center font-bold text-orange-500">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <PageHeaderHeading className="capitalize text-center md:text-left">
          FAQS
        </PageHeaderHeading>
        <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
      </PageHeader>
      <div className="container grid md:gap-4 md:grid-cols-2 max-w-5xl">
        <div>
          {Array.from({ length: 3 }).map((_, index) => (
            <FAQCard index={index} key={index} />
          ))}
        </div>
        <div>
          {Array.from({ length: 3 }).map((_, index) => (
            <FAQCard index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
