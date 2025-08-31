export type AnswerContent =
  | { type: "text"; content: string }
  | { type: "code"; content: string };
export type Question = {
  id: number;
  question: string;
  answer: {
    type: "text" | "mixed" | "code";
    content: AnswerContent[];
  };
};