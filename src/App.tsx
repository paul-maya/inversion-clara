/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Zap,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Preguntas', href: '#preguntas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="text-2xl font-bold tracking-tight text-accent flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <TrendingUp className="text-white w-5 h-5" />
          </div>
          <span className="font-display">INVERSIÓN CLARA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-accent/20"
          >
            Agenda una llamada
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contacto" 
                className="bg-accent text-white px-6 py-3 rounded-xl text-center font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agenda una llamada
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-1/4 -z-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6">
            Inversiones Inteligentes
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Inversión <span className="text-accent">Clara</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Invertir sin complicarte. Te ayudamos a hacer crecer tu capital con estrategias transparentes y resultados sólidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-accent/25 flex items-center justify-center gap-2"
            >
              Agenda una llamada <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#como-funciona" 
              className="bg-white border-2 border-slate-200 hover:border-accent hover:text-accent px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center"
            >
              Ver cómo funciona
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000" 
              alt="Inversiones" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-emerald-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Crecimiento</p>
                <p className="text-lg font-bold text-slate-900">+18.4%</p>
              </div>
            </div>
            <p className="text-[10px] text-slate-400">Rendimiento anual promedio de nuestros portafolios.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Diagnóstico Inicial",
      description: "Analizamos tu perfil de riesgo y objetivos financieros en una llamada personalizada de 15 minutos."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Estrategia a Medida",
      description: "Diseñamos un portafolio diversificado que se adapta a tus necesidades y horizonte de inversión."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Gestión y Crecimiento",
      description: "Ejecutamos y monitoreamos tus inversiones para que tú solo te preocupes por ver crecer tu capital."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Cómo funciona</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Nuestro proceso es simple y transparente, diseñado para que tomes el control de tu futuro financiero sin complicaciones.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center bg-white p-8 rounded-3xl border border-slate-50 shadow-sm"
            >
              <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-100 text-slate-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Gestión Patrimonial",
      description: "Administración profesional de grandes capitales con enfoque en preservación y crecimiento sostenido.",
      features: ["Portafolios personalizados", "Optimización fiscal", "Reportes mensuales"]
    },
    {
      title: "Inversión en Real Estate",
      description: "Acceso a oportunidades inmobiliarias de alto rendimiento con tickets de entrada accesibles.",
      features: ["Rentas mensuales", "Plusvalía garantizada", "Gestión integral"]
    },
    {
      title: "Asesoría de Retiro",
      description: "Planificación estratégica para asegurar tu libertad financiera en la etapa de jubilación.",
      features: ["Proyecciones actuariales", "Planes de ahorro", "Seguros de vida"]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Soluciones financieras diseñadas para cada etapa de tu vida y perfil de inversor.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="text-accent w-5 h-5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#contacto" 
                className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Saber más <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const stats = [
    { label: "Rendimiento Anual", value: "+12.5%", icon: <TrendingUp /> },
    { label: "Clientes Satisfechos", value: "+250", icon: <Users /> },
    { label: "Capital Gestionado", value: "$45M+", icon: <ShieldCheck /> }
  ];

  return (
    <section id="resultados" className="py-24 bg-accent text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-6xl md:text-7xl font-bold mb-4 font-display">{stat.value}</div>
              <div className="text-xl text-white/80 font-medium uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cuál es el monto mínimo para empezar?",
      answer: "Dependiendo del vehículo de inversión, puedes comenzar desde $1,000 USD. Nuestro objetivo es democratizar el acceso a inversiones de calidad."
    },
    {
      question: "¿Cómo garantizan la seguridad de mi capital?",
      answer: "Trabajamos con custodios regulados y diversificamos el capital en activos con respaldo real o alta liquidez, minimizando la exposición al riesgo."
    },
    {
      question: "¿Puedo retirar mi dinero en cualquier momento?",
      answer: "Contamos con opciones de liquidez diaria, mensual o anual, según el portafolio elegido. Siempre tendrás claridad sobre los plazos desde el primer día."
    },
    {
      question: "¿Tienen oficinas físicas?",
      answer: "Sí, contamos con oficinas en Ciudad de México y Madrid, aunque operamos de manera digital para clientes en toda Iberoamérica."
    }
  ];

  return (
    <section id="preguntas" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-slate-600">Resolvemos tus dudas para que inviertas con total confianza.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-100 rounded-2xl overflow-hidden"
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.answer}
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

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', contact: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', contact: '', message: '' });
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Hablemos de tu futuro</h2>
            <p className="text-xl text-slate-600 mb-12">
              Estamos listos para ayudarte a dar el siguiente paso. Completa el formulario y un asesor se pondrá en contacto contigo en menos de 24 horas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Llámanos</p>
                  <p className="text-lg font-bold">+34 900 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="text-lg font-bold">hola@inversionclara.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Oficina</p>
                  <p className="text-lg font-bold">Paseo de la Castellana, Madrid</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-600">Gracias por tu interés. Nos pondremos en contacto muy pronto.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Tu nombre"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">WhatsApp o Email</label>
                  <input 
                    type="text" 
                    required
                    placeholder="ejemplo@correo.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    value={formState.contact}
                    onChange={(e) => setFormState({...formState, contact: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">Mensaje (Opcional)</label>
                  <textarea 
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white py-5 rounded-xl font-bold text-lg shadow-lg shadow-accent/25 transition-all active:scale-[0.98]"
                >
                  Enviar Mensaje
                </button>
                <p className="text-center text-xs text-slate-400">
                  Al enviar, aceptas nuestra política de privacidad y tratamiento de datos.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-accent w-6 h-6" />
          <span className="font-display font-bold text-xl tracking-tight">INVERSIÓN CLARA</span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Inversión Clara. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Results />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
