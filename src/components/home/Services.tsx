import { Cpu, Settings, Users, Shield } from 'lucide-react';

const services = [
  {
    title: 'Engineering Design',
    description: 'Comprehensive engineering solutions from concept to implementation.',
    icon: Cpu,
  },
  {
    title: 'Technical Consulting',
    description: 'Expert guidance for complex technical challenges and optimization.',
    icon: Settings,
  },
  {
    title: 'Project Management',
    description: 'Efficient project delivery with proven methodologies.',
    icon: Users,
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and validation for reliable solutions.',
    icon: Shield,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive engineering solutions tailored to your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 