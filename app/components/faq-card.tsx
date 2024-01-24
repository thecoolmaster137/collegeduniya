import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQCard({ index }: { index: number }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border-[1px] border-gray-300 mb-4"
      key={index}
    >
      <AccordionItem
        value={`item-${index}`}
        className="border-b-0 data-[state=open]:bg-gray-100 p-2"
      >
        <AccordionTrigger>
          {` Q${index + 1}. Is it worth pursuing engineering?`}
        </AccordionTrigger>
        <AccordionContent className="grid gap-4 text-base text-gray-500">
          Yes, engineering is worth it! Engineers are in high demand and have
          great career prospects. An engineering degree can open up many
          opportunities in a diverse range of professions. A degree in
          engineering typically leads to higher salary and job satisfaction
          along with the chance for professional growth and development.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
