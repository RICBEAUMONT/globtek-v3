import { Award, Target, Users, Lightbulb } from 'lucide-react';

const coreValues = [
  {
    title: 'Integrity, Honesty, and Professionalism',
    description: 'Operating with the highest ethical standards and professional conduct',
    icon: Award,
  },
  {
    title: 'Commitment and Accountability',
    description: 'Taking ownership of our actions and delivering on our promises',
    icon: Target,
  },
  {
    title: 'Learning and Development',
    description: 'Continuously improving and staying at the forefront of engineering innovation',
    icon: Lightbulb,
  },
  {
    title: 'Excellence in All We Do',
    description: 'Striving for the highest quality in every project and interaction',
    icon: Award,
  },
];

const globtekWay = [
  {
    title: 'Get it Right the First Time',
    description: 'Emphasizing precision and accuracy in every aspect of our work',
    focus: 'Quality, efficiency, and client satisfaction',
    impact: 'Reduced revisions, optimized timelines, and enhanced project outcomes',
  },
  {
    title: 'A Pursuit of Excellence, Innovation, and Learning',
    description: 'Continuous improvement and staying at the forefront of engineering advancements',
    focus: 'Research, development, and knowledge sharing',
    impact: 'Cutting-edge solutions and industry leadership',
  },
  {
    title: 'Demonstrated Pro-active Leadership',
    description: 'Taking initiative and guiding projects with vision and expertise',
    focus: 'Strategic planning, risk management, and team guidance',
    impact: 'Successful project delivery and client confidence',
  },
  {
    title: 'People Relationships and Networks',
    description: 'Building strong partnerships and fostering collaborative environments',
    focus: 'Team collaboration, client relationships, and industry connections',
    impact: 'Enhanced project outcomes and sustainable business growth',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Globtek
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            We aim to tackle the world's greatest challenges by inspiring creative thinkers to develop innovative solutions. 
            Globtek delivers advanced engineering solutions in naval architecture, marine, coastal, and rail industries.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Globtek Way */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            The Globtek Way
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {globtekWay.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {pillar.title}
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-500">Description</h5>
                    <p className="text-gray-600">{pillar.description}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-500">Focus</h5>
                    <p className="text-gray-600">{pillar.focus}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-500">Impact</h5>
                    <p className="text-gray-600">{pillar.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 