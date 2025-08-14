import { memo } from "react";
import ArrowButton from "./ArrowButton.jsx";

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="">
      <h4>
        <button
          className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 focus:outline-none"
          onClick={onToggle}
        >
          {faq.question}
          <span className="ml-2 text-gray-500 text-lg">
            {isOpen ? (
              <ArrowButton
                direction="up"
                iconType="chevron"
                variant="chevronUpDown"
              />
            ) : (
              <ArrowButton
                direction="down"
                iconType="chevron"
                variant="chevronUpDown"
              />
            )}
          </span>
        </button>
      </h4>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
      </div>
    </div>
  );
};

export default memo(FAQItem);
