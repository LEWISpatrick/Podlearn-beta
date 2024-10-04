import { useState } from "react";

const faqData = [
  {
    question: "How does PodLearn work?",
    answer:
      "PodLearn uses GPT 4 to generate personalized podcast content based on your chosen topic and use eleven labs to generate the audio. ",
  },
  {
    question: "Is learning while sleeping effective?",
    answer:
      "While you can't learn complex skills while sleeping, research suggests that sleep can help consolidate memories and reinforce learning. Our podcasts are designed to complement your waking study efforts.",
  },
  {
    question: "What topics can I learn about?",
    answer:
      "PodLearn can generate content on virtually any topic, from academic subjects to practical skills. If you can learn it, we can create a podcast about it!",
  },
  {
    question: "Is my data safe?",
    answer:
      "NO! We sell all of your DATA to the highest bidder. and we donate that money to black rock! to vaccinate children in africa 🙂",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-900 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-indigo-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-indigo-900">
                {item.question}
              </span>
              <span className="text-indigo-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-indigo-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
