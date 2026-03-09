"use client";
import { useState } from "react";
import { faqData } from "../../lib/db";

export default function FaqSection() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            💬 Frequently Asked Questions
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Find clear answers to common questions and get the help you need
            instantly.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqData.map(({ id, question, answer }) => {
            const isOpen = activeId === id;

            return (
              <div
                key={id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-blue-50 border-blue-400 shadow-md"
                    : "bg-white border-slate-200"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {question}
                  </span>
                  <span
                    className={`text-3xl font-bold transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
