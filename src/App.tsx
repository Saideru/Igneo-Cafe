import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Utensils, 
  GlassWater, 
  Dog, 
  Wifi, 
  Zap, 
  Clock, 
  MapPin, 
  Facebook, 
  Instagram, 
  Star,
  Menu as MenuIcon,
  X,
  ChevronRight
} from 'lucide-react';


// Image Constants based on User Mapping
const IMG_BANNER = new URL('/images/benner.jpg', import.meta.url).href;
const IMG_COFFEE1 = new URL('/images/coffee1.jpg', import.meta.url).href;
const IMG_COFFEE2 = new URL('/images/coffee2.jpg', import.meta.url).href;
const IMG_DOGGO1 = new URL('/images/doggo1.jpg', import.meta.url).href;
const IMG_DOGGO2 = new URL('/images/doggo2.jpg', import.meta.url).href;
const IMG_DOGGO3 = new URL('/images/doggo3.jpg', import.meta.url).href;
const IMG_INTERIOR1 = new URL('/images/interiordesign.jpg', import.meta.url).href;
const IMG_INTERIOR2 = new URL('/images/interiordesign2.jpg', import.meta.url).href;
const IMG_MAINLOGO = new URL('/images/mainlogo.jpg', import.meta.url).href;
const IMG_TACO1 = new URL('/images/taco1.jpg', import.meta.url).href;
const IMG_TACO2 = new URL('/images/taco2.jpg', import.meta.url).href;
const IMG_TACO3 = new URL('/images/taco3.jpg', import.meta.url).href;
// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Pet-Friendly', href: '#pet-friendly' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-crimson/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <img src={IMAGES.BRAND.LOGO} alt="Igneo Logo" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
          <span className="bebas text-2xl tracking-widest text-cream hidden sm:block">ÍGNEO</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium uppercase tracking-widest hover:text-amber transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-amber text-crimson px-6 py-2 rounded-full bebas text-lg tracking-wider hover:bg-orange hover:text-cream transition-all animate-pulse-glow">
            Reserve a Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-cream" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-crimson border-t border-cream/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium uppercase tracking-widest border-b border-cream/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-amber text-crimson px-6 py-3 rounded-full bebas text-xl tracking-wider mt-4">
              Reserve a Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect simulation via fixed attachment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url("${IMAGES.BRAND.HERO_BANNER}")`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-crimson/40 to-charcoal/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={IMAGES.BRAND.LOGO} 
          alt="Igneo Logo" 
          className="h-32 w-32 mx-auto mb-8 drop-shadow-[0_0_20px_rgba(245,166,35,0.5)]"
          referrerPolicy="no-referrer"
        />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-8xl font-black mb-4 animate-flicker leading-tight"
        >
          YOUR FIRE DOES NOT JUST BURN.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-3xl text-amber bebas tracking-[0.2em] mb-8"
        >
          IT LIGHTS THE WAY.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-cream/80 text-lg mb-12 tracking-wide"
        >
          Specialty Coffee · Tacos · Cocktails · Mandaluyong
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#menu" className="w-full sm:w-auto bg-crimson hover:bg-orange text-cream px-8 py-4 rounded-full bebas text-xl tracking-widest transition-all flex items-center justify-center gap-2 group text-center">
            See Our Menu <span className="group-hover:animate-bounce">🔥</span>
          </a>
          <a href="https://www.facebook.com/p/Igneo-Cafe-61579029898471/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-amber text-amber hover:bg-amber hover:text-crimson px-8 py-4 rounded-full bebas text-xl tracking-widest transition-all text-center">
            Find Us on Facebook
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 inline-block bg-charcoal/60 backdrop-blur-sm border border-amber/30 px-6 py-2 rounded-full text-sm font-medium text-amber"
        >
          Open Daily 10AM – 11PM
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-amber/50">
        <ChevronRight className="rotate-90" size={32} />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${IMAGES.BRAND.INTERIOR}")` }}
      >
        <div className="absolute inset-0 bg-charcoal/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 flex items-center gap-4">
              A Space of Fire <span className="text-orange">🔥</span>
            </h2>
            <p className="text-xl text-cream/90 leading-relaxed mb-12">
              ÍGNEO is more than a café — it's a creative sanctuary on Boni Ave, Mandaluyong. 
              Inspired by Spanish-Mexican culture, we serve specialty coffee, fire-crafted tacos, 
              and handcrafted cocktails in a warm, artistic space where creators, professionals, 
              and dog lovers all belong.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Coffee className="text-amber" />, label: "Specialty Coffee" },
                { icon: <Utensils className="text-orange" />, label: "Birria Tacos" },
                { icon: <GlassWater className="text-terracotta" />, label: "Craft Cocktails" },
                { icon: <Dog className="text-amber" />, label: "Pet-Friendly" }
              ].map((item, idx) => (
                <div key={idx} className="bg-charcoal/50 border border-cream/10 p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:border-amber/50 transition-colors">
                  {item.icon}
                  <span className="font-medium tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('coffee');

  const menuItems = {
    coffee: {
      title: "Café",
      description: "Premium specialty coffee served hot or iced, brewed to fuel your fire. From classic lattes to creative seasonal blends.",
      images: [IMAGES.MENU.COFFEE_1, IMAGES.MENU.COFFEE_2],
      items: []
    },
    tacos: {
      title: "Tacos",
      items: [
        { 
          name: "Quesabirria Suprema", 
          image: IMAGES.MENU.TACO_QUESABIRRIA, 
          desc: "Slow-braised beef birria with melted cheese on crispy red-stained tortillas. Our signature dish." 
        },
        { 
          name: "Lumbre Fajitas", 
          image: IMAGES.MENU.TACO_LUMBRE, 
          desc: "Sizzling fajita-style tacos with seasoned meat, melted cheese and fresh herbs." 
        },
        { 
          name: "Sardine Margarita Taco", 
          image: IMAGES.MENU.TACO_SARDINE, 
          desc: "A bold, unexpected flavor — white flour tortillas with seasoned sardine filling, salsa, and herbs." 
        }
      ]
    },
    cocktails: {
      title: "Cóctel",
      description: "Handcrafted cocktails and mocktails made with premium 1883 Maison Routin syrups. Sip something bold.",
      images: [IMAGES.MENU.COCKTAILS],
      items: []
    }
  };

  return (
    <section id="menu" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">The Menu 🔥</h2>
          <div className="w-24 h-1 bg-amber mx-auto rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(menuItems).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full bebas text-xl tracking-widest transition-all ${
                activeTab === tab 
                ? 'bg-crimson text-cream shadow-[0_0_20px_rgba(123,13,30,0.4)]' 
                : 'bg-cream/5 text-cream/60 hover:bg-cream/10'
              }`}
            >
              {menuItems[tab as keyof typeof menuItems].title}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'tacos' ? (
              <div className="grid md:grid-cols-3 gap-8">
                {menuItems.tacos.items.map((item, idx) => (
                  <div key={idx} className="group bg-cream/5 rounded-3xl overflow-hidden border border-cream/5 hover:border-amber/30 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(245,166,35,0.1)]">
                    <div className="h-64 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-amber">{item.name}</h3>
                      <p className="text-cream/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h3 className="text-4xl font-bold text-amber">{menuItems[activeTab as 'coffee' | 'cocktails'].title} & Drinks</h3>
                  <p className="text-xl text-cream/80 leading-relaxed">
                    {menuItems[activeTab as 'coffee' | 'cocktails'].description}
                  </p>
                  <div className="flex gap-4">
                    <div className="h-1 w-12 bg-orange rounded-full" />
                    <div className="h-1 w-12 bg-amber rounded-full" />
                    <div className="h-1 w-12 bg-crimson rounded-full" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {menuItems[activeTab as 'coffee' | 'cocktails'].images.map((img, idx) => (
                    <div key={idx} className={`rounded-2xl overflow-hidden ${idx === 0 && menuItems[activeTab as 'coffee' | 'cocktails'].images.length === 1 ? 'col-span-2 h-96' : 'h-64'}`}>
                      <img src={img} alt="Menu item" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const Experience = () => {
  const features = [
    { 
      icon: <Utensils className="text-orange" size={32} />, 
      title: "Art-Filled Space", 
      desc: "Colorful Mexican-inspired murals and prints covering every wall." 
    },
    { 
      icon: <Wifi className="text-amber" size={32} />, 
      title: "Work & Study Friendly", 
      desc: "Free Wi-Fi and accessible power sockets throughout." 
    },
    { 
      icon: <Dog className="text-terracotta" size={32} />, 
      title: "Pet-Friendly Patio", 
      desc: "Bring your fur babies! We have fresh water bowls and a warm welcome waiting." 
    },
    { 
      icon: <Clock className="text-crimson" size={32} />, 
      title: "Open Late", 
      desc: "We're open daily from 10AM to 11PM." 
    }
  ];

  return (
    <section className="py-24 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">Why You'll Keep Coming Back</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 bg-charcoal border border-cream/5 rounded-3xl hover:border-amber/20 transition-all"
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-cream">{f.title}</h3>
              <p className="text-cream/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PetFriendly = () => {
  return (
    <section id="pet-friendly" className="py-24 bg-amber/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src={IMAGES.PET_FRIENDLY.DOGS_GROUP} alt="Happy Dogs" className="w-full rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
              <img src={IMAGES.PET_FRIENDLY.CHIHUAHUA} alt="Chihuahua at table" className="w-full rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            </div>
            <div className="pt-12">
              <img src={IMAGES.PET_FRIENDLY.DOGS_UP} alt="Dogs looking up" className="w-full rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
              <div className="mt-4 bg-amber text-crimson p-6 rounded-3xl text-center">
                <Dog size={40} className="mx-auto mb-2" />
                <span className="bebas text-2xl tracking-widest">Pet-Friendly Patio</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Fur Babies Welcome Here 🐾</h2>
            <p className="text-xl text-cream/80 leading-relaxed mb-10">
              ÍGNEO is proudly pet-friendly. Our patio is open to your dogs, and we always have fresh water bowls waiting for them. Because every good café moment is better with your best friend.
            </p>
            <div className="flex items-center gap-4 text-amber font-bold text-lg">
              <div className="w-12 h-[2px] bg-amber" />
              <span>Pet-Friendly Patio Since Day 1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { 
      name: "Miguel R.", 
      text: "The Quesabirria Suprema is insane — the broth, the cheese pull, the tortillas. Best tacos in Mandaluyong by far.",
      rating: 5
    },
    { 
      name: "Trisha L.", 
      text: "Brought my Pom and they treated him like a VIP. Love that this place is truly dog-friendly.",
      rating: 5
    },
    { 
      name: "Carlo V.", 
      text: "Perfect WFH spot. Great coffee, fast WiFi, and the vibes are unmatched. I'm here every week.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">What People Are Saying 🔥</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-10 bg-cream/5 rounded-3xl border border-cream/5 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(r.rating)].map((_, i) => <Star key={i} size={18} className="fill-amber text-amber" />)}
              </div>
              <p className="text-lg italic text-cream/80 mb-8 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-crimson flex items-center justify-center font-bold">
                  {r.name[0]}
                </div>
                <span className="font-bold text-amber">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Visit = () => {
  return (
    <section id="visit" className="py-24 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-12">Come Feel the Fire 🔥</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-crimson p-4 rounded-2xl"><MapPin className="text-cream" /></div>
                <div>
                  <h4 className="text-xl font-bold text-amber mb-2 tracking-wide uppercase">Location</h4>
                  <p className="text-lg text-cream/80">Boni Ave, Mandaluyong, Metro Manila, Philippines</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-orange p-4 rounded-2xl"><Clock className="text-cream" /></div>
                <div>
                  <h4 className="text-xl font-bold text-amber mb-2 tracking-wide uppercase">Hours</h4>
                  <p className="text-lg text-cream/80">Open Daily: 10:00 AM – 11:00 PM</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://www.facebook.com/p/Igneo-Cafe-61579029898471/" target="_blank" rel="noopener noreferrer" className="bg-cream/5 hover:bg-amber hover:text-crimson p-4 rounded-2xl transition-all">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/igneocafe" target="_blank" rel="noopener noreferrer" className="bg-cream/5 hover:bg-amber hover:text-crimson p-4 rounded-2xl transition-all">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-[450px] rounded-3xl overflow-hidden border-4 border-cream/5 shadow-2xl">
            {/* Placeholder for Google Maps - In a real app we'd use an iframe or API */}
            <div className="w-full h-full bg-charcoal flex flex-col items-center justify-center text-center p-12">
              <MapPin size={48} className="text-amber mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold mb-4">Find Us on Boni Ave</h3>
              <p className="text-cream/60 mb-8">Click below to open in Google Maps</p>
              <a 
                href="https://www.google.com/maps/search/Igneo+Cafe+Boni+Ave+Mandaluyong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-amber text-crimson px-8 py-3 rounded-full bebas text-xl tracking-widest hover:bg-orange hover:text-cream transition-all"
              >
                Open Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-charcoal border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <img src={IMAGES.BRAND.LOGO} alt="Igneo Logo" className="h-24 w-24 mx-auto mb-8" referrerPolicy="no-referrer" />
        <h2 className="text-3xl font-bold mb-4">ÍGNEO Café Taco Cóctel</h2>
        <p className="text-amber bebas text-xl tracking-[0.3em] mb-12">"YOUR FIRE DOES NOT JUST BURN. IT LIGHTS THE WAY."</p>
        
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          <a href="#home" className="text-sm uppercase tracking-widest hover:text-amber transition-colors">Home</a>
          <a href="#menu" className="text-sm uppercase tracking-widest hover:text-amber transition-colors">Menu</a>
          <a href="#about" className="text-sm uppercase tracking-widest hover:text-amber transition-colors">About</a>
          <a href="#pet-friendly" className="text-sm uppercase tracking-widest hover:text-amber transition-colors">Pet-Friendly</a>
          <a href="#visit" className="text-sm uppercase tracking-widest hover:text-amber transition-colors">Visit Us</a>
        </div>
        
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://www.facebook.com/p/Igneo-Cafe-61579029898471/" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-amber transition-colors"><Facebook size={20} /></a>
          <a href="https://www.instagram.com/igneocafe" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-amber transition-colors"><Instagram size={20} /></a>
        </div>
        
        <p className="text-cream/30 text-xs tracking-widest">
          © 2026 ÍGNEO Café Taco Cóctel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <PetFriendly />
      <Testimonials />
      <Visit />
      <Footer />
    </div>
  );
}
