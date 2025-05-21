import { ReactNode } from 'react';

export interface FaqItem {
  question: ReactNode;
  answer: ReactNode;
}

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 divide-y divide-gray-200">
        {items.map((item, index) => (
          <details key={index} className="py-4">
            <summary className="font-medium text-gray-900 cursor-pointer">
              {item.question}
            </summary>
            <p className="mt-2 text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
