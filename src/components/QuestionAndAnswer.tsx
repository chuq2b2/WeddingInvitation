import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QNAItems {
  question: string;
  answer: string;
}

interface QuestionAndAnswerProps {
  qna: QNAItems[];
}

const QuestionAndAnswer: React.FC<QuestionAndAnswerProps> = ({ qna }) => {
  return (
    <div className="w-2/3 justify-center avenir">
      {qna.map((event, index) => (
        <Accordion type="single" collapsible>
          <AccordionItem value='f{index}'>
            <AccordionTrigger className="font-bold md:text-lg">
              {index+1}. {event.question}
            </AccordionTrigger>
            <AccordionContent>
              {event.answer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};
export default QuestionAndAnswer;
