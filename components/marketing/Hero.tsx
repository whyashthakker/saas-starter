import { ReactNode } from 'react';

interface HeroProps {
  title: ReactNode;
  subtitle: ReactNode;
  cta?: ReactNode;
}

export function Hero({ title, subtitle, cta }: HeroProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900">{title}</h1>
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        {cta && <div className="mt-8 flex justify-center">{cta}</div>}
      </div>
    </section>
  );
}
