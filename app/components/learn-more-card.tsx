import { Card, CardContent, CardFooter } from './ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function LearnMoreCard({ index }: { index: number }) {
  return (
    <Card className="flex-col text-base mb-4">
      <CardContent className="flex gap-4 bg-gray-100/50 text-center p-4 font-semibold">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-bold text-blue-500 capitalize">JEE Advance</div>
          <div className="text-gray-500 leading-8">
            The Joint Entrance Examination Advanced (JEE-Advanced) is an
            entrance exam which is conducted by the Indian Institute of
            Technology (IITs) on all-India level
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-white w-full px-6 py-0">
        <Accordion type="single" collapsible className="w-full border-b-0">
          <AccordionItem value={`item-${index}`} className="border-b-0">
            <AccordionTrigger>Learn More</AccordionTrigger>
            <AccordionContent className="grid gap-4 text-base text-gray-500">
              <p>
                The exam qualifies candidates for admission in various
                prestigious engineering colleges across India. Previously known
                as IIT-JEE, it was renamed in 2013 and since then, it has been
                administered and regulated by the seven branches of IITs
                (Roorkee, Kharagpur, Delhi, Bombay, Kanpur, Madras and
                Guwahati). It consists of two papers with questions drawn from
                Physics, Chemistry, Mathematics and a Architecture Aptitude Test
                (AAT) for candidates aspiring to enroll in an architecture
                course
              </p>
              <p>
                <strong>Age:</strong> Should’ve appeared in Higher Secondary in
                2019, 2020, and 2021
              </p>
              <p>
                <strong>Qualification:</strong> At least 75% marks in 10+2
              </p>
              <p>
                <strong>Compulsory Subjects:</strong> Physics and Chemistry,
                along with English, Mathematics, and an optional subject
              </p>
              <p>
                <strong>Number Of Attempts:</strong> 2
              </p>
              <p>
                <strong>Subjects In Paper:</strong> Physics, Chemistry, Maths,
                and AAT (Architecture Aptitude Test)
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
}
