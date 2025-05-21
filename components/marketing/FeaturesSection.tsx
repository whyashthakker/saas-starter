import { ComponentType, SVGProps, ReactNode } from 'react';
import { Feature } from './Feature';

export interface FeatureItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: ReactNode;
  description: ReactNode;
}

export function FeaturesSection({ items }: { items: FeatureItem[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <Feature key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
