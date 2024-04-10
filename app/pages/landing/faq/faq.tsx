"use client";
import React, { useState } from "react";

// Define types for FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// Define props types for FAQ component
interface FAQProps {
  question: string;
  answer: string;
}

// Define props types for FAQList component
interface FAQListProps {
  faqs: FAQItem[];
}

function FAQ({ question, answer }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-3xl font-thin lowercase w-[80vw]">
      <div className="flex" onClick={toggleOpen}>
        <h3 className="font-medium">{question}</h3>
        <span className="text-[#DBF72C]">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <p className="text-xl">{answer}</p>}
    </div>
  );
}

function FAQList({ faqs }: FAQListProps) {
  return (
    <div className="flex flex-col gap-10">
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default function FAQPage() {
  // Example data for FAQs
  const faqs: FAQItem[] = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      question: "Where can I get some?",
      answer: "There are many variations of passages of Lorem Ipsum available.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center mt-32 w-[100vw] bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-white">
      <h3 className="text-6xl font-bold mb-10">Frequently Asked Questions</h3>
      <FAQList faqs={faqs} />
    </section>
  );
}
