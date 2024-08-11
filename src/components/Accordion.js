import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const idPrefix = `accordion-${index}`;

  return (
    <div className="border-b border-gray-200">
      <button
        id={`${idPrefix}-button`}
        className="flex justify-between items-center w-full py-4 px-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`${idPrefix}-content`}
      >
        <span className="font-medium text-gray-900">{title}</span>
        <span className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}>
          ▼
        </span>
      </button>
      <div
        id={`${idPrefix}-content`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: `${height}` }}
      >
        <div className="p-6 bg-gray-50">{content}</div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="border-t border-gray-200">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          index={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
