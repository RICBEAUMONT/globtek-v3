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
    details: ['+27 87 057 5956'],
    link: 'tel:+27870575956'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@globtek.co.za'],
    link: 'mailto:info@globtek.co.za'
  },
  {
    icon: MapPin,
    title: 'Office Location',
    details: [
      '62 Smiso Nkwanyana Road',
      'Morningside, Durban, 4001',
      'South Africa'
    ]
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 8:00 - 16:30',
      'Saturday & Sunday: Closed'
    ]
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#14171c] to-[#1a1f2a] text-white overflow-hidden">
          {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[80px]"></div>
          
          <Container>
          <div className="pt-24 md:pt-32 pb-16 md:pb-24 text-center relative z-10">
              {/* Header */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full mb-6 border border-[#e43d30]/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
                </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                  Partner with<br />
                <span className="text-[#e43d30]">Industry Leaders</span>
                </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Connect with our expert team for innovative engineering solutions, technical consultations, and strategic partnerships. Our dedicated professionals are ready to assist you with your specific requirements.
                </p>
              </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info) => (
                    <div
                      key={info.title}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#e43d30]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e43d30]/10"
                    >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#e43d30]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-[#e43d30]" />
                        </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#e43d30] transition-colors">
                          {info.title}
                        </h3>
                  </div>
                  <div className="space-y-2">
                          {info.details.map((detail, i) => (
                            info.link ? (
                              <a
                                key={i}
                                href={info.link}
                          className="block text-gray-300 hover:text-[#e43d30] transition-colors text-sm"
                              >
                                {detail}
                              </a>
                            ) : (
                        <p key={i} className="text-gray-300 text-sm">{detail}</p>
                            )
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        </div>

          <Container>
          <div className="max-w-4xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full mb-6 border border-[#e43d30]/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Start Your Project
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#14171c] mb-6 tracking-tight">
                Request a <span className="text-[#e43d30]">Consultation</span>
                </h2>
              <p className="text-xl text-[#4a4a4a] leading-relaxed max-w-2xl mx-auto">
                  Our team of experts will analyze your requirements and provide a detailed response within 24 hours.
                </p>
              </div>
              
            {/* Form Container */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              <ContactForm />
            </div>
            </div>
          </Container>
      </section>

      {/* Visit Us & Business Hours Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        </div>
        
        <Container>
          <div className="max-w-7xl mx-auto relative z-10">
              {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full mb-6 border border-[#e43d30]/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                  Visit Our Offices
                </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#14171c] mb-6 tracking-tight">
                Where to <span className="text-[#e43d30]">Find Us</span>
              </h2>
              <p className="text-xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto">
                Visit any of our three office locations across South Africa or connect with us during business hours for personalized assistance.
                </p>
              </div>

            {/* Office Locations Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Durban Office */}
              <div className="bg-gradient-to-br from-[#14171c] to-[#1a1f2a] rounded-3xl p-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[60px]"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">Durban Office</h3>
                  <div className="rounded-xl overflow-hidden shadow-xl border border-white/10 mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5377730016654!2d31.0225663!3d-29.8375799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a9c8bbd0ad27%3A0x3c5b8553c84d65f1!2s62%20Smiso%20Nkwanyana%20Rd%2C%20Morningside%2C%20Durban%2C%204001!5e0!3m2!1sen!2sza!4v1710936163043!5m2!1sen!2sza"
                      className="w-full h-[200px]"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Globtek Engineering Durban Office"
                      aria-label="Map showing Globtek Engineering Durban office"
                    />
                  </div>
                  {/* Address Card */}
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#e43d30] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-white">
                        <p className="font-medium">62 Smiso Nkwanyana Road</p>
                        <p>Morningside, Durban, 4001</p>
                        <p>South Africa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mthatha Office */}
              <div className="bg-gradient-to-br from-[#14171c] to-[#1a1f2a] rounded-3xl p-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[60px]"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">Mthatha Office</h3>
                  <div className="rounded-xl overflow-hidden shadow-xl border border-white/10 mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5377730016654!2d28.7766!3d-31.5889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5d5c5c5c5c5c5%3A0x3c5b8553c84d65f1!2s7%20Sisson%20St%2C%20Mthatha%20Central%2C%20Mthatha%2C%205099%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1710936163043!5m2!1sen!2sza"
                      className="w-full h-[200px]"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Globtek Engineering Mthatha Office"
                      aria-label="Map showing Globtek Engineering Mthatha office"
                    />
                  </div>
                  {/* Address Card */}
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#e43d30] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-white">
                        <p className="font-medium">Office F2.2, ECDC Building</p>
                        <p>7 Sisson Street, Fort Gale</p>
                        <p>Mthatha Central, 5099</p>
                        <p>South Africa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cape Town Office */}
              <div className="bg-gradient-to-br from-[#14171c] to-[#1a1f2a] rounded-3xl p-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[60px]"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">Cape Town Office</h3>
                  <div className="rounded-xl overflow-hidden shadow-xl border border-white/10 mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5377730016654!2d18.4241!3d-33.9249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5d5c5c5c5c5c5%3A0x3c5b8553c84d65f1!2s11%20Christiaan%20Barnard%20St%2C%20Foreshore%2C%20Cape%20Town%2C%208001%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1710936163043!5m2!1sen!2sza"
                      className="w-full h-[200px]"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Globtek Engineering Cape Town Office"
                      aria-label="Map showing Globtek Engineering Cape Town office"
                    />
                  </div>
                  {/* Address Card */}
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#e43d30] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-white">
                        <p className="font-medium">11 Christiaan Barnard Street</p>
                        <p>Foreshore</p>
                        <p>Cape Town, 8001</p>
                        <p>South Africa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

              {/* Business Hours Section - Left Side */}
              <div className="h-full">
                <div className="bg-gradient-to-br from-[#14171c] to-[#1a1f2a] rounded-3xl p-8 relative overflow-hidden h-full">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[80px]"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-[#e43d30]/20 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[#e43d30]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Business Hours</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 border-b border-white/10">
                        <span className="font-semibold text-white">Monday - Friday</span>
                        <span className="text-[#e43d30] font-medium">8:00 - 16:30</span>
                        </div>
                      <div className="flex justify-between items-center py-4">
                        <span className="font-semibold text-white">Saturday & Sunday</span>
                          <span className="text-gray-400">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Planning Your Visit Card - Right Side */}
              <div className="h-full">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-[#14171c]">Planning Your Visit?</h4>
              </div>
                  <p className="text-[#4a4a4a] leading-relaxed">
                  We recommend scheduling an appointment to ensure our team can provide you with the best possible attention and service during your visit.
                </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
} 