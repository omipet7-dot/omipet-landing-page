import { useState, useEffect } from 'react';

// OmiPet Database with Accurate Pet Images, Descriptions, and Indian Rupee (INR) Pricing
const OmniPetDB = {
  dog: {
    title: "India's #1 Premium Dog Care & Services Network",
    subtitle: "High-protein dog food, orthopedic beds, certified medicines, verified AKC breeders, and expert K9 trainers.",
    badge: "CERTIFIED PET CARE PARTNER",
    heroImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200",
    themeColor: "#d97706",
    lightBg: "#fef3c7",
    food: [
      { id: 'd-f1', name: 'Royal Canin High Energy Adult Kibble (10kg)', price: '₹4,899', rating: '4.9 ★', desc: 'Optimal high-protein formula tailored for German Shepherds, Labradors & active dog breeds.', tag: 'Top Seller', img: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=600' },
      { id: 'd-f2', name: 'Grain-Free Fresh Salmon & Veggie Feast (5kg)', price: '₹3,250', rating: '4.8 ★', desc: 'Enriched with Omega-3 & Omega-6 fatty acids for a glowing coat and optimal joint health.', tag: '100% Organic', img: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=600' }
    ],
    accessories: [
      { id: 'd-a1', name: 'Ergonomic Reflective No-Pull Harness', price: '₹1,499', rating: '4.9 ★', desc: 'Heavy-duty breathable nylon with soft padded chest plate for secure daily walks.', tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=600' },
      { id: 'd-a2', name: 'Orthopedic Memory Foam Pet Bed (XL)', price: '₹4,299', rating: '5.0 ★', desc: 'Joint-pain relief bed with water-resistant cover and washable plush cover.', tag: 'Luxury Comfort', img: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80&w=600' }
    ],
    medicines: [
      { id: 'd-m1', name: 'VetGuard Flea & Tick Spot-On Treatment (3 Doses)', price: '₹1,150', rating: '4.9 ★', desc: 'Fast-acting topical treatment protecting against ticks, fleas, and chewing lice.', tag: 'Vet Approved', img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600' },
      { id: 'd-m2', name: 'Hip & Joint Care Glucosamine Chews (60 Tabs)', price: '₹1,850', rating: '4.8 ★', desc: 'Formulated to relieve stiffness, promote cartilage health, and boost mobility.', tag: 'Supplement', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600' }
    ],
    breeder: [
      { id: 'd-b1', name: 'Golden Champion Kennels', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200', contact: '+91 98765 01234', location: 'Delhi NCR & Bangalore', desc: 'Certified purebred Golden Retriever puppies with full health clearances and vaccinated ancestry.', rating: '4.9 ★', tag: 'Direct Breeder', fee: 'Starting ₹35,000' },
      { id: 'd-b2', name: 'Royal German Shepherd Breeders', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200', contact: '+91 98112 34567', location: 'Mumbai & Pune', desc: 'High-line working Shepherds trained for obedience, agility, and protective instinct.', rating: '4.9 ★', tag: 'Verified Lineage', fee: 'Starting ₹40,000' }
    ],
    trainer: [
      { id: 'd-t1', name: 'K9 Master Obedience & Behavior Academy', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', contact: '+91 99887 76655', location: 'Home Visits & Training Centers', desc: 'Potty training, leash pulling correction, bite inhibition, and advanced voice commands.', rating: '5.0 ★', tag: 'Expert Trainer', fee: '₹12,000 / month' },
      { id: 'd-t2', name: 'Reactive Dog Behavior Modification', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', contact: '+91 97766 55443', location: 'Virtual & In-Person', desc: 'Specialized therapy for anxious or aggressive dogs using positive reinforcement.', rating: '4.8 ★', tag: 'Specialist', fee: '₹2,500 / session' }
    ]
  },
  cat: {
    title: "Complete Feline Nutrition, Health & Breeding Hub",
    subtitle: "Gourmet wet food, scratching towers, vet-approved hairball care remedies, registered Catteries, and feline specialists.",
    badge: "PROFESSIONAL CAT CARE",
    heroImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1200",
    themeColor: "#7c3aed",
    lightBg: "#f3e8ff",
    food: [
      { id: 'c-f1', name: 'Wild Ocean Salmon & Tuna Pate (Pack of 12 Cans)', price: '₹1,899', rating: '4.9 ★', desc: 'Grain-free wet food packed with natural protein and taurine for sharp eye vision and heart health.', tag: 'Best Seller', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=600' },
      { id: 'c-f2', name: 'Adult Indoor Cat Kibble with Anti-Hairball (3kg)', price: '₹2,250', rating: '4.7 ★', desc: 'Balanced calorie control formula enriched with fiber to assist smooth hairball passage.', tag: 'Popular', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600' }
    ],
    accessories: [
      { id: 'c-a1', name: 'Multi-Level Sisal Scratching Tree with Hammock', price: '₹3,999', rating: '4.9 ★', desc: 'Heavy base cat tree with natural sisal rope scratching posts and comfortable elevated lounging perch.', tag: 'Top Rated', img: 'https://images.unsplash.com/photo-1545249390-be9c28069246?auto=format&fit=crop&q=80&w=600' },
      { id: 'c-a2', name: 'Ergonomic Covered Litter Box with Odor Filter', price: '₹2,150', rating: '4.8 ★', desc: 'Easy-to-clean hooded litter tray featuring active carbon filter for smell reduction.', tag: 'Hygiene Must', img: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=600' }
    ],
    medicines: [
      { id: 'c-m1', name: 'Feline Hairball Control & Malt Paste (100g)', price: '₹850', rating: '4.9 ★', desc: 'Tasty daily malt paste remedy for cats that safely dissolves and prevents hairball blockages.', tag: 'Essential Cat Care', img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=600' },
      { id: 'c-m2', name: 'Cat Eye Cleanser & Antibacterial Drops (50ml)', price: '₹620', rating: '4.8 ★', desc: 'Gentle soothing formula to relieve ocular irritation, tear stains, and feline eye infections.', tag: 'Vet Recommended', img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=600' }
    ],
    breeder: [
      { id: 'c-b1', name: 'Imperial Persian & Scottish Fold Cattery', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200', contact: '+91 98980 12345', location: 'Chandigarh & Delhi NCR', desc: 'Purebred Persian and Scottish Fold kittens raised in home environment with health papers.', rating: '4.9 ★', tag: 'Registered Cattery', fee: 'Starting ₹30,000' }
    ],
    trainer: [
      { id: 'c-t1', name: 'Feline Behavior & Litter Training Specialist', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200', contact: '+91 98111 22334', location: 'Home Visits & Online', desc: 'Resolving litter box aversion, scratch correction, anxiety, and multi-cat integration issues.', rating: '4.9 ★', tag: 'Cat Behaviorist', fee: '₹1,800 / session' }
    ]
  },
  small_animal: {
    title: "Complete Care for Rabbits, Hamsters, Guinea Pigs & Pocket Pets",
    subtitle: "Sun-cured Timothy hay, spacious wooden enclosures, essential Vitamin C drops, ethical rabbit & hamster breeders, and handling experts.",
    badge: "POCKET PET SPECIALIST",
    heroImage: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=1200",
    themeColor: "#059669",
    lightBg: "#d1fae5",
    food: [
      { id: 's-f1', name: 'Premium Sun-Cured Timothy Hay for Rabbits & Guinea Pigs (2.5kg)', price: '₹1,250', rating: '4.9 ★', desc: 'High-fiber, low-protein essential daily roughage for rabbits, guinea pigs, and chinchillas to keep digestive systems healthy.', tag: 'Fresh Harvest', img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=600' },
      { id: 's-f2', name: 'Fortified Multi-Grain Hamster & Dwarf Rat Pellets (1kg)', price: '₹680', rating: '4.7 ★', desc: 'Nutrient-rich balanced formula with pumpkin seeds, dried apples, and vital minerals suited for Syrian and Dwarf hamsters.', tag: 'Complete Diet', img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=600' }
    ],
    accessories: [
      { id: 's-a1', name: 'Deluxe Multi-Tier Wooden Rabbit & Small Animal Enclosure', price: '₹5,499', rating: '4.9 ★', desc: 'Spacious indoor enclosure with climbing ramps, feeding trough, and pull-out litter tray for Holland Lops and Guinea Pigs.', tag: 'Spacious Habitat', img: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=600' }
    ],
    medicines: [
      { id: 's-m1', name: 'Stabilized Vitamin C Drops for Guinea Pigs & Rabbits (100ml)', price: '₹650', rating: '4.9 ★', desc: 'Crucial daily water supplement for small animals to prevent scurvy, boost immunity, and maintain joint health.', tag: 'Daily Health', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600' }
    ],
    breeder: [
      { id: 's-b1', name: 'Heritage Rabbit & Hamster Breeders', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', contact: '+91 97110 98765', location: 'Bangalore & Hyderabad', desc: 'Ethically bred Holland Lop rabbits, Syrian hamsters, and friendly Guinea Pigs with complete care logs and health records.', rating: '4.8 ★', tag: 'Ethical Breeding', fee: 'Starting ₹6,000' }
    ],
    trainer: [
      { id: 's-t1', name: 'Rabbit & Pocket Pet Taming Guidance', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200', contact: '+91 96500 11223', location: 'Virtual Consultations', desc: 'Step-by-step guidance on litter box training rabbits and taming shy hamsters or guinea pigs for safe handling.', rating: '4.7 ★', tag: 'Pet Care Expert', fee: '₹999 / session' }
    ]
  }
};

const ROUTE_THEMES = {
  'dog_accessories': {
    primary: '#d97706',
    secondary: '#92400e',
    lightBg: '#fffbeb',
    pageBg: '#fefce8',
    heroBg: '#1c1917',
    heroSubText: '#d6d3d1',
    heroLayout: 'split-right',
    gridCols: 'repeat(auto-fill, minmax(290px, 1fr))',
    cardRadius: '16px',
    thankYouLayout: 'classic-top-bar',
    thankYouBg: '#fffbeb'
  },
  'dog_breeder': {
    primary: '#1d4ed8',
    secondary: '#1e3a8a',
    lightBg: '#eff6ff',
    pageBg: '#f1f5f9',
    heroBg: '#0f172a',
    heroSubText: '#93c5fd',
    heroLayout: 'centered-banner',
    gridCols: 'repeat(auto-fill, minmax(380px, 1fr))',
    cardRadius: '12px',
    thankYouLayout: 'split-executive',
    thankYouBg: '#eff6ff'
  },
  'dog_trainer': {
    primary: '#dc2626',
    secondary: '#991b1b',
    lightBg: '#fef2f2',
    pageBg: '#fafafa',
    heroBg: '#18181b',
    heroSubText: '#fca5a5',
    heroLayout: 'split-left',
    gridCols: 'repeat(auto-fill, minmax(360px, 1fr))',
    cardRadius: '8px',
    thankYouLayout: 'dark-ticket',
    thankYouBg: '#fef2f2'
  },
  'dog_food_medicines': {
    primary: '#0d9488',
    secondary: '#115e59',
    lightBg: '#f0fdfa',
    pageBg: '#f8fafc',
    heroBg: '#0f172a',
    heroSubText: '#94a3b8',
    heroLayout: 'light-airy',
    gridCols: 'repeat(auto-fill, minmax(320px, 1fr))',
    cardRadius: '20px',
    thankYouLayout: 'mint-pill',
    thankYouBg: '#f0fdfa'
  },
  'cat_medicines': {
    primary: '#7c3aed',
    secondary: '#5b21b6',
    lightBg: '#f5f3ff',
    pageBg: '#faf5ff',
    heroBg: '#2e1065',
    heroSubText: '#ddd6fe',
    heroLayout: 'floating-card',
    gridCols: 'repeat(auto-fill, minmax(310px, 1fr))',
    cardRadius: '22px',
    thankYouLayout: 'lavender-gradient',
    thankYouBg: '#f5f3ff'
  },
  'cat_breeder_trainer': {
    primary: '#db2777',
    secondary: '#9d174d',
    lightBg: '#fdf2f8',
    pageBg: '#fff1f2',
    heroBg: '#500724',
    heroSubText: '#fbcfe8',
    heroLayout: 'boutique-asymmetric',
    gridCols: 'repeat(auto-fill, minmax(350px, 1fr))',
    cardRadius: '24px',
    thankYouLayout: 'boutique-certificate',
    thankYouBg: '#fdf2f8'
  },
  'small_animal': {
    primary: '#059669',
    secondary: '#065f46',
    lightBg: '#ecfdf5',
    pageBg: '#f0fdf4',
    heroBg: '#064e3b',
    heroSubText: '#a7f3d0',
    heroLayout: 'nature-framed',
    gridCols: 'repeat(auto-fill, minmax(300px, 1fr))',
    cardRadius: '18px',
    thankYouLayout: 'eco-side-accent',
    thankYouBg: '#ecfdf5'
  },
  'default': {
    primary: '#d97706',
    secondary: '#b45309',
    lightBg: '#fef3c7',
    pageBg: '#f8fafc',
    heroBg: '#0f172a',
    heroSubText: '#94a3b8',
    heroLayout: 'split-right',
    gridCols: 'repeat(auto-fill, minmax(280px, 1fr))',
    cardRadius: '16px',
    thankYouLayout: 'classic-top-bar',
    thankYouBg: '#f8fafc'
  }
};

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwtuqPlCG3MPijP8YG5-J3vHcqVj56v3V2I1y3O1k-3WXqrsEIft63YGbQfppoRByo2/exec";

export default function App() {
  const [currentQueryStr, setCurrentQueryStr] = useState(
    () => window.location.search || '?pet=dog&category=accessories'
  );

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', query: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const onPopState = () => {
      setCurrentQueryStr(window.location.search || '?pet=dog&category=accessories');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProduct]);

  const params = new URLSearchParams(currentQueryStr);
  const petParam = (params.get('pet') || params.get('type') || 'dog').toLowerCase();
  const petType = OmniPetDB[petParam] ? petParam : 'dog';

  const filterCategories = (params.get('category') || '')
    .toLowerCase()
    .split(',')
    .map(c => c.trim())
    .filter(Boolean);

  const filterServices = (params.get('service') || '')
    .toLowerCase()
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  const currentData = OmniPetDB[petType] || OmniPetDB.dog;

  const getActiveThemeKey = () => {
    if (petType === 'dog') {
      if (filterCategories.includes('accessories') && filterCategories.length === 1) return 'dog_accessories';
      if (filterServices.includes('breeder') && filterServices.length === 1) return 'dog_breeder';
      if (filterServices.includes('trainer') && filterServices.length === 1) return 'dog_trainer';
      if (filterCategories.includes('food') && filterCategories.includes('medicines')) return 'dog_food_medicines';
    }
    if (petType === 'cat') {
      if (filterCategories.includes('medicines') && filterCategories.length === 1) return 'cat_medicines';
      if (filterServices.includes('breeder') && filterServices.includes('trainer')) return 'cat_breeder_trainer';
    }
    if (petType === 'small_animal') {
      return 'small_animal';
    }
    return 'default';
  };

  const activeTheme = ROUTE_THEMES[getActiveThemeKey()];

  // Guarantees pure white color on hero titles across all devices to prevent black text bugs
  const heroTitleStyle = {
    fontSize: '38px',
    fontWeight: '900',
    lineHeight: '1.2',
    marginBottom: '16px',
    color: '#ffffff'
  };

  const heroSubtitleStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    maxWidth: '540px',
    color: activeTheme.heroSubText || '#e2e8f0'
  };

  const isFilterEmpty = filterCategories.length === 0 && filterServices.length === 0;
  const showFood = isFilterEmpty || filterCategories.includes('food');
  const showAccessories = isFilterEmpty || filterCategories.includes('accessories');
  const showMedicines = isFilterEmpty || filterCategories.includes('medicines');
  const showBreeder = isFilterEmpty || filterServices.includes('breeder');
  const showTrainer = isFilterEmpty || filterServices.includes('trainer');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitParams = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        inquiry: `[${petType.toUpperCase()} - ${currentQueryStr}] ${formData.query}`
      });

      await fetch(`${GOOGLE_SCRIPT_URL}?${submitParams.toString()}`, {
        method: 'GET',
        mode: 'no-cors'
      });
    } catch (error) {
      console.log('Google Sheet Submission Error:', error);
    }

    setIsSubmitting(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHeroSection = () => {
    const layout = activeTheme.heroLayout;

    if (layout === 'centered-banner') {
      return (
        <section style={{ backgroundColor: activeTheme.heroBg, padding: '56px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '999px', backgroundColor: activeTheme.primary, color: '#fff', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', marginBottom: '16px' }}>
              {currentData.badge}
            </div>
            <h1 style={{ ...heroTitleStyle, fontSize: '40px' }}>{currentData.title}</h1>
            <p style={{ ...heroSubtitleStyle, margin: '0 auto 28px auto' }}>{currentData.subtitle}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: activeTheme.primary, color: '#fff' }}>Connect Now</a>
              <a href="#catalog" className="btn-action" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>View Directory</a>
            </div>
            <div style={{ borderRadius: '20px', overflow: 'hidden', maxHeight: '340px', border: `3px solid ${activeTheme.primary}`, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)' }}>
              <img src={currentData.heroImage} alt={currentData.title} style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </section>
      );
    }

    if (layout === 'split-left') {
      return (
        <section style={{ backgroundColor: activeTheme.heroBg, padding: '60px 24px', borderBottom: `4px solid ${activeTheme.primary}` }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap-reverse' }}>
            <div style={{ flex: '1', minWidth: '300px', maxWidth: '520px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', borderLeft: `8px solid ${activeTheme.primary}`, boxShadow: '0 20px 30px rgba(0,0,0,0.5)' }}>
                <img src={currentData.heroImage} alt={currentData.title} style={{ width: '100%', height: '330px', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <span style={{ backgroundColor: activeTheme.primary, color: '#fff', padding: '5px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: '900', letterSpacing: '1px' }}>
                EXPERT PET GUIDANCE
              </span>
              <h1 style={heroTitleStyle}>{currentData.title}</h1>
              <p style={{ ...heroSubtitleStyle, marginBottom: '24px' }}>{currentData.subtitle}</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: activeTheme.primary, color: '#fff' }}>Book Session</a>
                <a href="#catalog" className="btn-action" style={{ backgroundColor: '#27272a', color: '#fff', border: '1px solid #3f3f46' }}>Explore Services</a>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (layout === 'light-airy') {
      return (
        <section style={{ backgroundColor: activeTheme.heroBg, padding: '56px 24px', borderBottom: `2px solid ${activeTheme.primary}` }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#38bdf8', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: '800', marginBottom: '16px' }}>
                VET NUTRITION & PHARMACY
              </div>
              <h1 style={heroTitleStyle}>{currentData.title}</h1>
              <p style={{ ...heroSubtitleStyle, marginBottom: '24px' }}>{currentData.subtitle}</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: activeTheme.primary, color: '#fff' }}>Order Essentials</a>
                <a href="#catalog" className="btn-action" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}>View Catalog</a>
              </div>
            </div>
            <div style={{ flex: '1', minWidth: '300px', maxWidth: '500px' }}>
              <div style={{ borderRadius: '28px', overflow: 'hidden', border: '6px solid rgba(255,255,255,0.2)', boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.4)' }}>
                <img src={currentData.heroImage} alt={currentData.title} style={{ width: '100%', height: '310px', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (layout === 'floating-card') {
      return (
        <section style={{ background: `linear-gradient(135deg, ${activeTheme.heroBg} 0%, #1e1b4b 100%)`, padding: '56px 24px' }}>
          <div style={{ maxWidth: '1140px', margin: '0 auto', backgroundColor: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', borderRadius: '28px', padding: '36px', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '36px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1.2', minWidth: '290px' }}>
              <span style={{ backgroundColor: '#ede9fe', color: activeTheme.secondary, padding: '5px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '900' }}>
                FELINE WELLNESS CARE
              </span>
              <h1 style={heroTitleStyle}>{currentData.title}</h1>
              <p style={{ ...heroSubtitleStyle, marginBottom: '24px' }}>{currentData.subtitle}</p>
              <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: '#ffffff', color: activeTheme.secondary }}>Consult Specialist</a>
            </div>
            <div style={{ flex: '0.8', minWidth: '280px' }}>
              <img src={currentData.heroImage} alt={currentData.title} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '20px', border: '3px solid rgba(255,255,255,0.3)' }} />
            </div>
          </div>
        </section>
      );
    }

    if (layout === 'boutique-asymmetric') {
      return (
        <section style={{ backgroundColor: activeTheme.heroBg, padding: '60px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '44px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1.1', minWidth: '300px' }}>
              <div style={{ display: 'inline-block', border: `1px solid ${activeTheme.heroSubText}`, color: activeTheme.heroSubText, padding: '5px 14px', borderRadius: '999px', fontSize: '11px', fontWeight: '700', letterSpacing: '1.2px', marginBottom: '16px' }}>
                EXCLUSIVE CATTERY & BEHAVIOR STUDIO
              </div>
              <h1 style={heroTitleStyle}>{currentData.title}</h1>
              <p style={{ ...heroSubtitleStyle, marginBottom: '28px' }}>{currentData.subtitle}</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: activeTheme.primary, color: '#fff', borderRadius: '999px' }}>Request Consultation</a>
                <a href="#catalog" className="btn-action" style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', borderRadius: '999px' }}>Explore Catalog</a>
              </div>
            </div>
            <div style={{ flex: '0.9', minWidth: '300px' }}>
              <div style={{ padding: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '32px' }}>
                <img src={currentData.heroImage} alt={currentData.title} style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '24px', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (layout === 'nature-framed') {
      return (
        <section style={{ backgroundColor: activeTheme.heroBg, padding: '56px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <span style={{ backgroundColor: '#10b981', color: '#022c22', padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: '900' }}>
                {currentData.badge}
              </span>
              <h1 style={heroTitleStyle}>{currentData.title}</h1>
              <p style={{ ...heroSubtitleStyle, marginBottom: '24px' }}>{currentData.subtitle}</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: '#10b981', color: '#022c22' }}>Get Guidance</a>
                <a href="#catalog" className="btn-action" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}>View Products</a>
              </div>
            </div>
            <div style={{ flex: '1', minWidth: '300px', maxWidth: '500px' }}>
              <img src={currentData.heroImage} alt={currentData.title} style={{ width: '100%', height: '310px', objectFit: 'cover', borderRadius: '24px', border: '4px solid #34d399' }} />
            </div>
          </div>
        </section>
      );
    }

    return (
      <section style={{ backgroundColor: activeTheme.heroBg, padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '800', marginBottom: '16px', backgroundColor: 'rgba(255,255,255,0.12)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
              <span style={{ color: activeTheme.primary, marginRight: '6px', fontSize: '14px' }}>●</span> {currentData.badge}
            </div>
            <h1 style={heroTitleStyle}>{currentData.title}</h1>
            <p style={{ ...heroSubtitleStyle, marginBottom: '24px' }}>{currentData.subtitle}</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: activeTheme.primary, color: '#fff' }}>Get Consultation</a>
              <a href="#catalog" className="btn-action" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff' }}>Explore Solutions</a>
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '300px', maxWidth: '520px' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)', border: `3px solid ${activeTheme.primary}` }}>
              <img src={currentData.heroImage} alt={currentData.title} style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderThankYouPage = () => {
    const tyLayout = activeTheme.thankYouLayout;
    const resetForm = () => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', query: '' });
    };

    if (tyLayout === 'split-executive') {
      return (
        <div style={{ maxWidth: '920px', margin: '56px auto', padding: '0 24px', width: '100%', animation: 'fadeInUp 0.5s ease-out' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', backgroundColor: '#ffffff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(29, 78, 216, 0.18)', border: `1px solid ${activeTheme.primary}` }}>
            <div style={{ backgroundColor: activeTheme.primary, color: '#ffffff', padding: '44px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginBottom: '20px' }}>✓</div>
              <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1.2px', textTransform: 'uppercase', opacity: 0.85 }}>INQUIRY RECEIVED</span>
              <h1 style={{ fontSize: '30px', fontWeight: '900', margin: '10px 0 14px 0', lineHeight: '1.2' }}>Thank You, {formData.name}!</h1>
              <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.92 }}>
                Our coordination desk has successfully logged your request. A specialist will call you shortly.
              </p>
            </div>
            <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '800', color: activeTheme.primary, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '18px' }}>Request Summary</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e2e8f0', fontSize: '14px' }}>
                  <span style={{ color: '#64748b' }}>Applicant:</span>
                  <strong style={{ color: '#0f172a' }}>{formData.name}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e2e8f0', fontSize: '14px' }}>
                  <span style={{ color: '#64748b' }}>Phone:</span>
                  <strong style={{ color: '#0f172a' }}>{formData.phone}</strong>
                </div>
                <div style={{ marginTop: '14px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748b' }}>Notes:</span>
                  <p style={{ marginTop: '6px', backgroundColor: activeTheme.lightBg, padding: '12px', borderRadius: '8px', fontSize: '13px', color: '#1e293b' }}>"{formData.query}"</p>
                </div>
              </div>
              <button onClick={resetForm} className="btn-action" style={{ backgroundColor: activeTheme.primary, color: '#fff', width: '100%', marginTop: '24px' }}>
                Back to Directory
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ maxWidth: '680px', margin: '60px auto', padding: '0 24px', width: '100%', animation: 'fadeInUp 0.5s ease-out' }}>
        <div style={{ background: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', padding: '40px', textAlign: 'center', position: 'relative' }}>
          <div style={{ height: '10px', position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: activeTheme.primary }} />
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: activeTheme.lightBg, color: activeTheme.primary, fontSize: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', fontWeight: 'bold' }}>✓</div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', marginBottom: '10px' }}>
            Thank You, {formData.name}!
          </h1>
          <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto' }}>
            Your inquiry for <strong>{petType.replace('_', ' ').toUpperCase()}</strong> has been successfully registered. Our team will contact you shortly.
          </p>
          <div style={{ background: activeTheme.lightBg, border: `1px solid ${activeTheme.primary}40`, borderRadius: '16px', padding: '24px', textAlign: 'left', margin: '24px 0 28px 0' }}>
            <div style={{ fontSize: '13px', fontWeight: '800', color: activeTheme.secondary, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>Summary</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#334155', marginBottom: '12px' }}>
              <span>Category:</span>
              <strong style={{ textTransform: 'capitalize', color: '#0f172a' }}>{petType.replace('_', ' ')}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#334155', marginBottom: '12px' }}>
              <span>Phone:</span>
              <strong style={{ color: '#0f172a' }}>{formData.phone}</strong>
            </div>
            <div style={{ marginTop: '14px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', display: 'block', marginBottom: '6px' }}>Query:</span>
              <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', fontSize: '13px', color: '#334155', fontStyle: 'italic', border: '1px solid #cbd5e1' }}>
                "{formData.query}"
              </div>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="btn-action"
            style={{ backgroundColor: activeTheme.primary, color: '#fff', width: '100%', fontSize: '16px', padding: '16px' }}
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: submitted ? activeTheme.thankYouBg : activeTheme.pageBg, color: '#0f172a', transition: 'background-color 0.3s ease' }}>
      
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
        html { scroll-behavior: smooth; }
        body { color: #0f172a; line-height: 1.5; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: ${activeTheme.cardRadius};
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px -6px rgba(0,0,0,0.1);
        }

        .google-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 14px;
          background-color: #ffffff !important;
          color: #0f172a !important;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .google-input::placeholder {
          color: #64748b !important;
          opacity: 1;
        }
        .google-input:focus {
          border-color: ${activeTheme.primary};
          box-shadow: 0 0 0 3px ${activeTheme.primary}25;
        }

        .btn-action {
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-decoration: none;
          white-space: nowrap;
        }
        .btn-action:hover { opacity: 0.92; transform: translateY(-1px); }
        .btn-action:active { transform: translateY(0); }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
      `}</style>

      {/* CLEAN MARKETING HEADER WITH TOP ALIGNED BRAND ICON */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: `2px solid ${activeTheme.primary}20`, padding: '14px 24px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="https://www.omipet.in/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px', fontWeight: 'bold', backgroundColor: activeTheme.primary, flexShrink: 0 }}>
              🐾
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', letterSpacing: '-0.5px', color: '#0f172a', lineHeight: '1.1' }}>
                Omi<span style={{ color: activeTheme.primary }}>Pet</span>
              </div>
              <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '600', lineHeight: '1.2' }}>
                Care Network
              </div>
            </div>
          </a>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            {!submitted && (
              <a href="#catalog" style={{ fontSize: '13px', fontWeight: '700', color: '#475569', textDecoration: 'none', display: window.innerWidth < 480 ? 'none' : 'block' }}>
                Catalog
              </a>
            )}
            <a
              href={submitted ? '#top' : '#inquiry-form'}
              onClick={(e) => {
                if (submitted) {
                  e.preventDefault();
                  setSubmitted(false);
                }
              }}
              className="btn-action"
              style={{ backgroundColor: activeTheme.primary, color: '#fff', fontSize: '12px', padding: '9px 14px' }}
            >
              {submitted ? '← Back' : 'Inquire Now'}
            </a>
          </div>
        </div>
      </header>

      {submitted ? (
        renderThankYouPage()
      ) : (
        <main>
          {renderHeroSection()}

          <section id="catalog" style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px', width: '100%' }}>
            <div style={{ marginBottom: '32px', borderBottom: `2px solid ${activeTheme.primary}30`, paddingBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a' }}>
                Solutions for <span style={{ color: activeTheme.primary, textTransform: 'capitalize' }}>{petType.replace('_', ' ')}s</span>
              </h2>
              <span style={{ backgroundColor: activeTheme.lightBg, color: activeTheme.secondary, padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: '800' }}>
                Verified Network
              </span>
            </div>

            {showFood && currentData.food && (
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '20px' }}>🥣 Premium Food & Diets</h3>
                <div style={{ display: 'grid', gridTemplateColumns: activeTheme.gridCols, gap: '24px' }}>
                  {currentData.food.map((item) => (
                    <div key={item.id} className="card-item">
                      <div>
                        <div style={{ position: 'relative', height: '190px', background: '#f1f5f9' }}>
                          <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: activeTheme.primary, color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '12px' }}>
                            {item.tag}
                          </span>
                        </div>
                        <div style={{ padding: '18px' }}>
                          <div style={{ fontSize: '12px', fontWeight: '700', color: activeTheme.primary, marginBottom: '4px' }}>
                            {item.rating}
                          </div>
                          <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                            {item.name}
                          </h4>
                          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{item.desc}</p>
                        </div>
                      </div>
                      <div style={{ padding: '16px 18px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a' }}>{item.price}</span>
                        <button
                          onClick={() => setSelectedProduct(item)}
                          className="btn-action"
                          style={{ backgroundColor: activeTheme.lightBg, color: activeTheme.secondary, fontSize: '12px', padding: '8px 14px' }}
                        >
                          View Item
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showAccessories && currentData.accessories && (
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '20px' }}>🎾 Pet Accessories & Gear</h3>
                <div style={{ display: 'grid', gridTemplateColumns: activeTheme.gridCols, gap: '24px' }}>
                  {currentData.accessories.map((item) => (
                    <div key={item.id} className="card-item">
                      <div>
                        <div style={{ position: 'relative', height: '190px', background: '#f1f5f9' }}>
                          <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: activeTheme.primary, color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '12px' }}>
                            {item.tag}
                          </span>
                        </div>
                        <div style={{ padding: '18px' }}>
                          <div style={{ fontSize: '12px', fontWeight: '700', color: activeTheme.primary, marginBottom: '4px' }}>
                            {item.rating}
                          </div>
                          <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                            {item.name}
                          </h4>
                          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{item.desc}</p>
                        </div>
                      </div>
                      <div style={{ padding: '16px 18px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a' }}>{item.price}</span>
                        <button
                          onClick={() => setSelectedProduct(item)}
                          className="btn-action"
                          style={{ backgroundColor: activeTheme.lightBg, color: activeTheme.secondary, fontSize: '12px', padding: '8px 14px' }}
                        >
                          View Item
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showMedicines && currentData.medicines && (
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '20px' }}>💊 Certified Veterinary Health & Medicines</h3>
                <div style={{ display: 'grid', gridTemplateColumns: activeTheme.gridCols, gap: '24px' }}>
                  {currentData.medicines.map((item) => (
                    <div key={item.id} className="card-item">
                      <div>
                        <div style={{ position: 'relative', height: '190px', background: '#f1f5f9' }}>
                          <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: activeTheme.primary, color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '12px' }}>
                            {item.tag}
                          </span>
                        </div>
                        <div style={{ padding: '18px' }}>
                          <div style={{ fontSize: '12px', fontWeight: '700', color: activeTheme.primary, marginBottom: '4px' }}>
                            {item.rating}
                          </div>
                          <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                            {item.name}
                          </h4>
                          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{item.desc}</p>
                        </div>
                      </div>
                      <div style={{ padding: '16px 18px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a' }}>{item.price}</span>
                        <button
                          onClick={() => setSelectedProduct(item)}
                          className="btn-action"
                          style={{ backgroundColor: activeTheme.lightBg, color: activeTheme.secondary, fontSize: '12px', padding: '8px 14px' }}
                        >
                          View Item
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showBreeder && currentData.breeder && (
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '20px' }}>🏡 Verified Breeder Network</h3>
                <div style={{ display: 'grid', gridTemplateColumns: activeTheme.gridCols, gap: '20px' }}>
                  {currentData.breeder.map((b) => (
                    <div key={b.id} className="card-item" style={{ padding: '22px', borderTop: `4px solid ${activeTheme.primary}` }}>
                      <div>
                        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '14px' }}>
                          <img
                            src={b.avatar}
                            alt={b.name}
                            style={{ width: '58px', height: '58px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${activeTheme.primary}` }}
                          />
                          <div>
                            <span style={{ fontSize: '11px', fontWeight: '800', padding: '3px 9px', borderRadius: '6px', backgroundColor: activeTheme.lightBg, color: activeTheme.secondary, display: 'inline-block' }}>
                              {b.tag}
                            </span>
                            <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a', marginTop: '3px' }}>{b.name}</h4>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>📍 {b.location}</div>
                          </div>
                        </div>
                        <p style={{ fontSize: '13px', color: '#475569', marginBottom: '14px', lineHeight: '1.5' }}>{b.desc}</p>
                      </div>
                      <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>Contact: {b.contact}</div>
                          <div style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>{b.fee}</div>
                        </div>
                        <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: activeTheme.primary, color: '#fff', fontSize: '11px', padding: '8px 14px' }}>
                          Inquire
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showTrainer && currentData.trainer && (
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '20px' }}>🎓 Certified Pet Trainers & Behaviorists</h3>
                <div style={{ display: 'grid', gridTemplateColumns: activeTheme.gridCols, gap: '20px' }}>
                  {currentData.trainer.map((t) => (
                    <div key={t.id} className="card-item" style={{ padding: '22px', borderLeft: `4px solid ${activeTheme.primary}` }}>
                      <div>
                        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '14px' }}>
                          <img
                            src={t.avatar}
                            alt={t.name}
                            style={{ width: '58px', height: '58px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${activeTheme.primary}` }}
                          />
                          <div>
                            <span style={{ fontSize: '11px', fontWeight: '800', padding: '3px 9px', borderRadius: '6px', backgroundColor: activeTheme.lightBg, color: activeTheme.secondary, display: 'inline-block' }}>
                              {t.tag}
                            </span>
                            <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a', marginTop: '3px' }}>{t.name}</h4>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>📍 {t.location}</div>
                          </div>
                        </div>
                        <p style={{ fontSize: '13px', color: '#475569', marginBottom: '14px', lineHeight: '1.5' }}>{t.desc}</p>
                      </div>
                      <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>Contact: {t.contact}</div>
                          <div style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>{t.fee}</div>
                        </div>
                        <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: activeTheme.primary, color: '#fff', fontSize: '11px', padding: '8px 14px' }}>
                          Book
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section id="inquiry-form" style={{ backgroundColor: activeTheme.lightBg, borderTop: `1px solid ${activeTheme.primary}30`, padding: '60px 24px' }}>
            <div style={{ maxWidth: '680px', margin: '0 auto', background: '#ffffff', border: `1px solid ${activeTheme.primary}40`, borderRadius: '22px', padding: '36px', boxShadow: '0 15px 30px -10px rgba(0,0,0,0.08)' }}>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span style={{ backgroundColor: activeTheme.lightBg, color: activeTheme.secondary, padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>
                  Direct Expert Desk
                </span>
                <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#0f172a', marginTop: '8px' }}>
                  Inquire for <span style={{ color: activeTheme.primary, textTransform: 'capitalize' }}>{petType.replace('_', ' ')} Care</span>
                </h2>
                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                  Fill out the form below to connect directly with our specialists.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '6px' }}>
                    Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="google-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '6px' }}>
                    Phone Number <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="google-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '6px' }}>
                    Your Inquiry <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={`Describe your request for ${petType.replace('_', ' ')} care, products, or consultation...`}
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="google-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-action"
                  style={{ backgroundColor: activeTheme.primary, color: '#ffffff', marginTop: '8px', padding: '15px' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </section>
        </main>
      )}

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div style={{ background: '#ffffff', borderRadius: '20px', width: '100%', maxWidth: '580px', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ position: 'relative', height: '260px', background: '#f1f5f9' }}>
              <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.65)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: activeTheme.primary }}>{selectedProduct.rating}</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: activeTheme.secondary, background: activeTheme.lightBg, padding: '3px 10px', borderRadius: '999px' }}>In Stock</span>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>{selectedProduct.name}</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>{selectedProduct.desc}</p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Price</div>
                  <div style={{ fontSize: '22px', fontWeight: '900', color: '#0f172a' }}>{selectedProduct.price}</div>
                </div>

                <a
                  href="#inquiry-form"
                  onClick={() => setSelectedProduct(null)}
                  className="btn-action"
                  style={{ backgroundColor: activeTheme.primary, color: '#fff', fontSize: '13px' }}
                >
                  Order / Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer style={{ backgroundColor: '#020617', color: '#94a3b8', padding: '32px 24px', textAlign: 'center', borderTop: '1px solid #0f172a', marginTop: 'auto' }}>
        <p style={{ fontSize: '13px' }}>
          © {new Date().getFullYear()} <a href="https://www.omipet.in/" style={{ color: activeTheme.primary, fontWeight: '700', textDecoration: 'none' }}>OmiPet</a>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}