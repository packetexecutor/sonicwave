import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border border-neutral-100 rounded-lg overflow-hidden">
      <button
        className={cn(
          "w-full bg-dark hover:bg-neutral-100 transition-colors duration-300 p-4 text-left flex justify-between items-center",
          isOpen && "bg-neutral-100"
        )}
        onClick={onClick}
      >
        <span className="font-bold font-rajdhani">{question}</span>
        <i className={cn(
          "fas fa-chevron-down text-primary transition-transform duration-300",
          isOpen && "rotate-180"
        )}></i>
      </button>
      <div
        className={cn(
          "bg-neutral-100 p-4 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96" : "max-h-0 p-0 opacity-0"
        )}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-6", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
