'use client';

export interface ServiceHighlight {
  title: string;
  description: string;
  icon: string;
}

interface ServiceHighlightProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceHighlight({
  title,
  description,
  icon
}: ServiceHighlightProps) {
  return (
    <div className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
} 