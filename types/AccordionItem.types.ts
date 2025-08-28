import { Question } from "@/app/data/JsQuestions";

export type AccordionItemProps = {
    question : string;
    answer: Question["answer"];
    isExpanded : boolean;
    onToggle : () => void;
}