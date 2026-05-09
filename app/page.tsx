'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  ChevronRight, 
  Star,
  ExternalLink,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ShieldCheck,
  Globe,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import { 
  HERO_CONTENT, 
  ABOUT_CONTENT, 
  SERVICES, 
  COUNTRIES, 
  PARTNERS, 
  TEAM_MEMBERS, 
  CONTACT_INFO 
} from '@/lib/data';

// --- Sub-Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-gold tracking-tighter">
              WINGSIR-ABROAD
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-white hover:text-blue-300 transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-white hover:text-blue-300 transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-white hover:text-blue-300 transition-colors">Services</a>
            <a href="#countries" className="text-sm font-medium text-white hover:text-blue-300 transition-colors">Countries</a>
            <a href="#contact" className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/50">
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-lg font-medium text-white">Home</a>
              <a href="#about" className="block text-lg font-medium text-white">About</a>
              <a href="#services" className="block text-lg font-medium text-white">Services</a>
              <a href="#countries" className="block text-lg font-medium text-white">Countries</a>
              <a href="#contact" className="block w-full py-4 rounded-xl bg-blue-600 text-center text-white font-semibold">Contact Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className={`glass-laminated rounded-3xl p-6 shadow-2xl relative group ${className}`}
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl group-hover:bg-blue-400/30 transition-all duration-700" />
    {children}
  </motion.div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#001a33]">
    {/* Cinematic Visual Elements */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[url('https://picsum.photos/seed/map/1920/1080')] bg-cover opacity-10 mix-blend-overlay rotate-12" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a33] via-transparent to-[#001a33]" />
    </div>

    {/* Glow Animation */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/10 blur-[150px] animate-pulse" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase border border-blue-500/30">
              Trusted Global Support
            </span>
            <div className="flex -space-x-2">
              {['🇺🇸', '🇨🇦', '🇬🇧', '🇦🇺', '🇪🇺'].map((flag, idx) => (
                <div key={idx} className="w-8 h-8 rounded-full bg-navy border-2 border-blue-900 flex items-center justify-center text-xs shadow-lg">
                  {flag}
                </div>
              ))}
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1] tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Find Every</span><br />
            <span className="text-gold underline decoration-gold/30 underline-offset-4">Solution</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-xl font-medium">
            WINGSIR-ABROAD LLP is a Delhi-headquartered overseas education firm helping students study in the USA, Canada, UK, Australia, and Europe with trusted counselling and visa guidance.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            {HERO_CONTENT.ctas.map((cta, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-xl text-xs font-black transition-all shadow-xl tracking-widest uppercase ${
                  cta.primary 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/40 border border-blue-500" 
                    : "bg-white/5 text-white backdrop-blur-md border border-white/10 hover:bg-white/10"
                }`}
              >
                {cta.label}
              </motion.button>
            ))}
          </div>
          
          <div className="flex items-center gap-6 mt-12 pt-12 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-gold text-gold" />)}
              </div>
              <span className="text-white/60 text-xs font-bold">1000+ Students Trusted</span>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-6 relative sm:p-12">
            <div className="grid grid-cols-2 gap-6 scale-90 sm:scale-100">
              {HERO_CONTENT.floatingCards.slice(0, 4).map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -10, rotateZ: idx % 2 === 0 ? 2 : -2 }}
                >
                  <GlassCard className="!p-6 flex flex-col items-center justify-center text-center !bg-white/5 border-white/5 group hover:border-gold/30 transition-all cursor-default">
                    <span className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-125 block">
                      {card.icon}
                    </span>
                    <h3 className="text-white font-black text-xs sm:text-sm uppercase tracking-widest">{card.title}</h3>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
            
            {/* Visual element: Airplane/Globe conceptually */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
            >
              <Globe className="w-[400px] h-[400px] text-blue-500 animate-spin-slow" strokeWidth={0.5} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-24 bg-[#001a33] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter leading-none">
              A Legacy of <span className="text-gold">Trust & Excellence</span>
            </h2>
            <p className="text-blue-100/70 mb-8 leading-relaxed text-lg font-medium">
              {ABOUT_CONTENT.description}
            </p>
            <div className="space-y-6 mb-12">
              {ABOUT_CONTENT.additionalInfo.map((info, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0 shadow-[0_0_15px_#D4AF37]" />
                  <p className="text-blue-100/60 font-medium leading-relaxed">{info}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="p-8 rounded-[2rem] bg-gold/5 border border-gold/20 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shrink-0">
                <ShieldCheck className="text-navy" size={32} />
              </div>
              <div>
                <p className="text-white font-bold">UK Certified Counsellors</p>
                <p className="text-gold/60 text-xs font-black uppercase tracking-widest mt-1">Ethical & Professional</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full relative">
          {ABOUT_CONTENT.counters.map((counter, idx) => (
            <GlassCard key={idx} className="flex flex-col items-center justify-center py-12 !bg-white/5 border-white/5 hover:border-gold/20 transition-all">
              <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-400 to-white mb-3">
                <Counter value={counter.value} suffix={counter.suffix} />
              </span>
              <p className="text-blue-200/40 text-[10px] uppercase font-black tracking-[0.3em] text-center px-4">
                {counter.label}
              </p>
            </GlassCard>
          ))}
          
          <div className="absolute -z-10 w-full h-full bg-blue-600/5 blur-[120px] rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-24 bg-gradient-to-b from-[#001a33] to-[#002366] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Premium Global Services</h2>
        <p className="text-blue-100/60 max-w-2xl mx-auto">Providing a full spectrum of high-end education and immigration support.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {SERVICES.map((service, idx) => (
          <GlassCard key={idx} className="group hover:border-gold/30 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all shadow-xl group-hover:shadow-gold/20">
              <service.icon className="text-blue-400 group-hover:text-gold transition-colors" size={28} />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-blue-100/50 text-sm leading-relaxed">{service.description}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const CountriesSection = () => (
  <section id="countries" className="py-24 bg-[#001a33]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Destinations</h2>
        <p className="text-blue-100/60 font-medium">Your gateway to top tier global universities.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {COUNTRIES.map((country, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="group relative h-96 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image 
              src={country.imagery} 
              alt={country.name} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a33] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all" />
            
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{country.flag}</span>
                <h3 className="text-2xl font-bold text-white">{country.name}</h3>
              </div>
              <p className="text-blue-100/70 text-xs uppercase font-black tracking-widest mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                Top Courses: {country.courses}
              </p>
              <button className="w-full py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold hover:bg-gold hover:text-navy transition-all">
                Explore Programs
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);
  const isInView = typeof window !== 'undefined' ? true : false; // Placeholder for intersection observer if needed

  React.useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = (totalDuration / end) * 0.1; // Slower for larger numbers

    // Simple linear animation
    let timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const PartnerShowcase = () => (
  <section className="py-20 bg-[#001a33] border-y border-white/5 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-blue-100/40 text-xs font-black tracking-[0.3em] uppercase mb-12">Our Global Integration Partners</p>
      
      <div className="relative flex overflow-hidden group">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24 items-center"
        >
          {/* Duplicate partners for infinite scroll */}
          {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div key={idx} className="text-3xl font-black text-white/20 italic tracking-tighter transition-all hover:text-blue-400 hover:scale-110 cursor-pointer">
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const SuccessStories = () => (
  <section className="py-24 bg-[#001a33] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">Student Success Stories</h2>
        <p className="text-blue-100/40 uppercase tracking-[0.2em] text-xs font-bold">Real journeys, Real success</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <GlassCard key={i} className="!p-0 group">
            <div className="h-48 relative">
              <Image src={`https://picsum.photos/seed/student${i}/800/400`} alt="Success" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-full bg-gold text-navy text-[10px] font-black uppercase">Visa Secured</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-gold text-gold" />)}
              </div>
              <p className="text-white font-bold text-lg mb-4 italic">&quot;WINGSIR-ABROAD made my dream of studying in Canada a reality. Their legal team is unmatched!&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20" />
                <div>
                  <p className="text-white text-sm font-bold">Student Name {i}</p>
                  <p className="text-blue-100/40 text-xs">University of Toronto</p>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  
  const faqs = [
    { q: "How long does the visa process take?", a: "Typically, it depends on the country, but our expedited legal support ensures minimal delays." },
    { q: "Do you offer scholarship assistance?", a: "Yes, we have a dedicated team for scholarship guidance and documentation." },
    { q: "What countries do you support?", a: "USA, Canada, UK, Australia, Germany, France, and various other European nations." },
    { q: "Are your consultations free?", a: "Yes, we offer an initial free counselling session for all aspiring students." }
  ];

  return (
    <section className="py-24 bg-[#001a33]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-white text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-all"
              >
                <span className="text-white font-bold">{faq.q}</span>
                <ChevronRight className={`text-gold transition-transform ${openIndex === idx ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="p-6 pt-0 text-blue-100/50 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => (
  <section className="py-24 bg-gradient-to-b from-[#001a33] via-[#002366] to-[#011426]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tight">Leadership & Expert Team</h2>
        <div className="w-24 h-1.5 bg-gold mx-auto rounded-full shadow-[0_0_20px_#D4AF37]" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
        {TEAM_MEMBERS.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center group relative pt-10"
          >
            {/* Perfectly Circular HD Frame */}
            <div className="relative z-10 -mb-12">
              <div className="absolute inset-0 bg-gold/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full border-[6px] border-gold p-1.5 shadow-[0_0_40px_rgba(212,175,55,0.3)] bg-[#001a33] overflow-visible"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white/20">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Subtle highlight/spotlight effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-full" />
              </motion.div>
            </div>
            
            {/* Premium Rectangular Description Box */}
            <GlassCard className="!pt-16 !pb-10 !px-8 !rounded-2xl w-full flex flex-col items-center text-center !bg-white/5 border-gold/10 hover:border-gold/40 hover:shadow-gold/10 transition-all duration-500 shadow-2xl min-h-[340px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{member.name}</h3>
              <p className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-6 inline-block px-3 py-1 rounded bg-gold/5 border border-gold/10">
                {member.designation}
              </p>
              <div className="flex-grow">
                <p className="text-blue-100/60 text-sm leading-relaxed font-medium">
                  {member.description}
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <Linkedin size={16} className="text-blue-400/40 hover:text-blue-400 cursor-pointer" />
                <Mail size={16} className="text-blue-400/40 hover:text-blue-400 cursor-pointer" />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-24 bg-[#001a33] relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter leading-none">Connect With Our Global Experts</h2>
          <p className="text-blue-100/60 mb-12 text-lg">Reach out to start your international career journey with trusted professional support.</p>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CONTACT_INFO.numbers.slice(0, 4).map((num, idx) => (
                <GlassCard key={idx} className="!p-4 flex items-center gap-4 hover:border-blue-400 group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-400">
                    <Phone size={18} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="text-white font-bold text-sm">{num}</span>
                </GlassCard>
              ))}
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {CONTACT_INFO.emails.map((email, idx) => (
                <GlassCard key={idx} className="!p-4 flex items-center gap-4 hover:border-blue-400 group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-400">
                    <Mail size={18} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">{email}</span>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
        
        <GlassCard className="!p-10 !bg-white/5 border-gold/20 shadow-gold/5">
          <h3 className="text-2xl font-bold text-white mb-8">Send an Inquiry</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-all" />
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-all" />
            </div>
            <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-all" />
            <select className="w-full bg-[#001a33] border border-white/10 rounded-xl px-6 py-4 text-white/50 focus:outline-none focus:border-gold transition-all">
              <option>Select Destination</option>
              <option>USA</option>
              <option>Canada</option>
              <option>UK</option>
              <option>Australia</option>
              <option>Europe</option>
            </select>
            <textarea placeholder="Your Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-all" />
            <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black tracking-widest text-sm uppercase shadow-xl shadow-blue-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Send Message Now
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#000d1a] pt-24 pb-12 border-t border-gold/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <span className="text-3xl font-black text-white mb-6 block tracking-tighter">WINGSIR-ABROAD</span>
          <p className="text-blue-100/40 text-sm leading-relaxed mb-8">
            Providing expert overseas education and visa assistance since decades. Your trusted partner for global career success.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-200 hover:bg-gold hover:text-navy transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4">
            {['About Us', 'Our Services', 'Countries', 'Testimonials', 'Contact'].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="text-blue-100/50 hover:text-gold transition-colors text-sm">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Our Branches</h4>
          <ul className="space-y-4">
            {CONTACT_INFO.locations.map((loc, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <MapPin size={16} className="text-blue-500 mt-1" />
                <div>
                  <p className="text-white text-sm font-bold">{loc.name}</p>
                  <p className="text-blue-100/30 text-xs">{loc.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Subscribe</h4>
          <p className="text-blue-100/40 text-sm mb-6">Stay updated with the latest visa and education news.</p>
          <div className="flex bg-white/5 rounded-xl overflow-hidden border border-white/10">
            <input type="email" placeholder="Email Address" className="bg-transparent px-4 py-3 text-white text-sm focus:outline-none w-full" />
            <button className="bg-blue-600 px-4 text-white hover:bg-blue-700">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 text-center md:text-left gap-6">
        <p className="text-blue-100/20 text-[10px] uppercase font-black tracking-widest">
          © {new Date().getFullYear()} WINGSIR-ABROAD LLP. All rights reserved. 
        </p>
        <p className="text-gold/40 text-[10px] uppercase font-extrabold tracking-[0.2em]">
          Designed for Global Dreams
        </p>
      </div>
    </div>
    
    {/* Floating Action Buttons */}
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl"
      >
        <MessageCircle size={24} />
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl"
      >
        <Phone size={24} />
      </motion.button>
    </div>
  </footer>
);

const UniversityCarousel = () => {
  const logos = [
    "https://picsum.photos/seed/uni1/200/100",
    "https://picsum.photos/seed/uni2/200/100",
    "https://picsum.photos/seed/uni3/200/100",
    "https://picsum.photos/seed/uni4/200/100",
    "https://picsum.photos/seed/uni5/200/100",
    "https://picsum.photos/seed/uni6/200/100",
  ];

  return (
    <section className="py-12 bg-[#000d1a] border-b border-white/5 relative overflow-hidden">
      <div className="flex whitespace-nowrap gap-16 items-center">
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 shrink-0"
        >
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="relative w-32 h-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <Image src={logo} alt="Uni" fill className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="bg-[#001a33] selection:bg-gold selection:text-navy">
      <Navbar />
      <HeroSection />
      <UniversityCarousel />
      <PartnerShowcase />
      <AboutSection />
      <ServicesSection />
      <CountriesSection />
      <SuccessStories />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
