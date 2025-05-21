import { ReactNode, ComponentType, SVGProps } from 'react';

interface FeatureProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: ReactNode;
  description: ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
