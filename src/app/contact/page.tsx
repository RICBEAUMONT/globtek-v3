import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import Container from '@/components/layout/Container';

const metadata: Metadata = {
  title: 'Contact Us | Globtek Engineering',
  description: 'Get in touch with Globtek Engineering. Contact us for inquiries about our engineering services, career opportunities, or general information.',
};

export { metadata };

interface ContactInfo {
  icon: typeof Mail;
  title: string;
  details: string[];
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (234) 567-890'],
    link: 'tel:+1234567890'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@globtek.com'],
    link: 'mailto:info@globtek.com'
  },
  {
    icon: MapPin,
    title: 'Office Location',
    details: [
      '123 Business Street',
      'City, State 12345',
      'Country'
    ]
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 1:00 PM',
      'Sunday: Closed'
    ]
  }
];

export default function ContactPage() {
  return (
    <main>
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Column - Contact Information */}
        <div className="relative bg-gradient-to-br from-[var(--color-bg-gradient-from)] to-[var(--color-bg-gradient-to)] text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,var(--color-accent)/0.05_1px,transparent_1px),linear-gradient(-45deg,var(--color-accent)/0.05_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <Container>
            <div className="pt-24 md:pt-32 pb-16 md:pb-24 lg:ml-auto lg:pr-16 xl:pr-24 max-w-[500px]">
              {/* Header */}
              <div className="mb-8 sm:mb-12">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium mb-4 sm:mb-6">
                  Contact Information
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Partner with<br />
                  <span className="text-[var(--color-accent)]">Industry Leaders</span>
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                  Connect with our expert team for innovative engineering solutions, technical consultations, and strategic partnerships. Our dedicated professionals are ready to assist you with your specific requirements.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <h2 className="text-xl font-semibold mb-2">Direct Communication Channels</h2>
                  <p className="text-gray-300 text-sm mb-6">Choose your preferred method of contact</p>
                  {contactInfo.slice(0, 2).map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 mb-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-lg bg-[var(--color-accent)]/10">
                          <info.icon className="w-6 h-6 text-[var(--color-accent)]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, i) => (
                            info.link ? (
                              <a
                                key={i}
                                href={info.link}
                                className="block text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p key={i} className="text-gray-300">{detail}</p>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark-transparent)]">
          <Container>
            <div className="pt-24 md:pt-32 pb-16 md:pb-24 lg:pl-16 xl:pl-24 max-w-[500px]">
              <div className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  Request a Consultation
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Our team of experts will analyze your requirements and provide a detailed response within 24 hours.
                </p>
              </div>
              
              <ContactForm />
            </div>
          </Container>
        </div>
      </div>

      {/* Visit Us & Business Hours Section */}
      <div className="bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-darker-transparent)] py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Visit Us */}
            <div className="space-y-8">
              {/* Section Header */}
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium mb-4">
                  Visit Our Office
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Experience Our Engineering Hub
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
                  Visit our state-of-the-art facility where innovation meets expertise. Our modern office space is designed to foster collaboration and showcase our engineering capabilities.
                </p>
              </div>

              {/* Map Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent rounded-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5377730016654!2d31.0225663!3d-29.8375799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a9c8bbd0ad27%3A0x3c5b8553c84d65f1!2s62%20Smiso%20Nkwanyana%20Rd%2C%20Morningside%2C%20Durban%2C%204001!5e0!3m2!1sen!2sza!4v1710936163043!5m2!1sen!2sza"
                    className="w-full h-[400px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Globtek Engineering Headquarters"
                    aria-label="Map showing Globtek Engineering headquarters in Durban"
                  />
                </div>
                {/* Quick Address Overlay */}
                <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                    <p className="text-sm text-gray-900 dark:text-white font-medium">
                      62 Smiso Nkwanyana Road, Morningside, Durban
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-8">
              {/* Section Header */}
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium mb-4">
                  Business Hours
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  When to Find Us
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
                  Our office maintains consistent hours to ensure we&apos;re available when you need us. Schedule a visit during our business hours to discuss your engineering needs.
                </p>
              </div>

              {/* Hours Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent rounded-2xl" />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[var(--color-bg-gradient-from)] to-[var(--color-bg-gradient-to)] shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-[var(--color-accent)]/10">
                        <Clock className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-white mb-6">
                        Operating Hours
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span className="font-medium text-white">Monday - Friday</span>
                          <span className="text-[var(--color-accent)]">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span className="font-medium text-white">Saturday</span>
                          <span className="text-[var(--color-accent)]">9:00 AM - 1:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span className="font-medium text-white">Sunday</span>
                          <span className="text-gray-400">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="p-6 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Planning Your Visit?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  We recommend scheduling an appointment to ensure our team can provide you with the best possible attention and service during your visit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
} 