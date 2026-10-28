import  { useState, useEffect } from 'react';

// OmiPet Database with Accurate Pet Images, Descriptions, and Indian Rupee (INR) Pricing
const OmniPetDB = {
  dog: {
    title: "India's #1 Premium Dog Care & Services Network",
    subtitle: "High-protein dog food, orthopedic beds, certified medicines, verified AKC breeders, and expert K9 trainers.",
    badge: "CANINE EXCELLENCE",
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
      { id: 'd-b1', name: 'Golden Champion Kennels', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200', contact: '+91 98765 01234', location: 'Delhi NCR & Bangalore', desc: 'Certified purebred Golden Retriever puppies with full health clearances and vaccinated ancestry.', rating: '4.9 ★', tag: 'KCI Certified', fee: 'Starting ₹35,000' },
      { id: 'd-b2', name: 'Royal German Shepherd Breeders', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200', contact: '+91 98112 34567', location: 'Mumbai & Pune', desc: 'High-line working Shepherds trained for obedience, agility, and protective instinct.', rating: '4.9 ★', tag: 'Verified Pedigree', fee: 'Starting ₹40,000' }
    ],
    trainer: [
      { id: 'd-t1', name: 'K9 Master Obedience & Behavior Academy', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', contact: '+91 99887 76655', location: 'Home Visits & Training Centers', desc: 'Potty training, leash pulling correction, bite inhibition, and advanced voice commands.', rating: '5.0 ★', tag: 'Master Trainer', fee: '₹12,000 / month' },
      { id: 'd-t2', name: 'Reactive Dog Behavior Modification', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', contact: '+91 97766 55443', location: 'Virtual & In-Person', desc: 'Specialized therapy for anxious or aggressive dogs using positive reinforcement.', rating: '4.8 ★', tag: 'Specialist', fee: '₹2,500 / session' }
    ]
  },
  cat: {
    title: "Premium Feline Nutrition, Health & Purebred Network",
    subtitle: "Gourmet wet food, scratching towers, vet-approved hairball care remedies, registered Catteries, and feline specialists.",
    badge: "FELINE SANCTUARY",
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
      { id: 'c-b1', name: 'Imperial Persian & Scottish Fold Cattery', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200', contact: '+91 98980 12345', location: 'Chandigarh & Delhi NCR', desc: 'TICA and FFI registered lineage. Purebred Persian and Scottish Fold kittens raised in home environment.', rating: '4.9 ★', tag: 'TICA Registered', fee: 'Starting ₹30,000' }
    ],
    trainer: [
      { id: 'c-t1', name: 'Feline Behavior & Litter Training Specialist', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200', contact: '+91 98111 22334', location: 'Home Visits & Online', desc: 'Resolving litter box aversion, scratch correction, anxiety, and multi-cat integration issues.', rating: '4.9 ★', tag: 'Cat Behaviorist', fee: '₹1,800 / session' }
    ]
  },
  small_animal: {
    title: "Complete Care for Rabbits, Hamsters, Guinea Pigs & Pocket Pets",
    subtitle: "Sun-cured Timothy hay, spacious wooden enclosures, essential Vitamin C drops, ethical rabbit & hamster breeders, and handling experts.",
    badge: "POCKET PET CARE",
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

// URL Testing Switcher Presets
const TESTING_PRESETS = [
  { label: '🐶 Dog Accessories', search: '?pet=dog&category=accessories' },
  { label: '🐕 Dog Breeder Info', search: '?pet=dog&service=breeder' },
  { label: '🎓 Dog Trainer Info', search: '?pet=dog&service=trainer' },
  { label: '🍗 Dog Food & Medicines', search: '?pet=dog&category=food,medicines' },
  { label: '🐱 Cat Medicines', search: '?pet=cat&category=medicines' },
  { label: '🐾 Cat Breeder & Trainer', search: '?pet=cat&service=breeder,trainer' },
  { label: '🐰 Small Animals (All)', search: '?pet=small_animal' }
];

// Google Script Deployment Web App URL (Google Sheet ID: 1g3m9J4kuE30kYJqDjwQvL67N4sbvhP0JfahZMD8n2yc)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwtuqPlCG3MPijP8YG5-J3vHcqVj56v3V2I1y3O1k-3WXqrsEIft63YGbQfppoRByo2/exec";

const styles = {
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8fafc',
    color: '#0f172a'
  },
  topUrlBar: {
    backgroundColor: '#0f172a',
    padding: '10px 16px',
    borderBottom: '1px solid #1e293b'
  },
  topUrlInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    overflowX: 'auto'
  },
  urlButtonList: {
    display: 'flex',
    gap: '8px'
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '16px 24px',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  headerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  brandTitle: {
    fontSize: '22px',
    fontWeight: '900',
    letterSpacing: '-0.5px'
  },
  brandSubtitle: {
    fontSize: '11px',
    color: '#64748b',
    fontWeight: '600'
  },
  heroSection: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '60px 24px'
  },
  heroContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap'
  },
  heroTag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '800',
    marginBottom: '16px',
    letterSpacing: '0.5px'
  },
  heroTitle: {
    fontSize: '38px',
    fontWeight: '900',
    color: '#ffffff',
    lineHeight: '1.2',
    marginBottom: '16px'
  },
  heroSubtitle: {
    fontSize: '16px',
    color: '#94a3b8',
    lineHeight: '1.6',
    maxWidth: '540px'
  },
  heroImageCard: {
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)',
    border: '4px solid rgba(255,255,255,0.1)'
  },
  catalogSection: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '48px 24px',
    width: '100%'
  },
  categoryHeading: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: '20px'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px'
  },
  cardTag: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '700',
    padding: '4px 10px',
    borderRadius: '12px',
    backdropFilter: 'blur(4px)'
  },
  cardFooter: {
    padding: '16px',
    borderTop: '1px solid #f1f5f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  serviceCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  serviceBadge: {
    fontSize: '11px',
    fontWeight: '800',
    padding: '4px 8px',
    borderRadius: '6px',
    backgroundColor: '#fef3c7',
    color: '#b45309',
    display: 'inline-block'
  },
  formSection: {
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e2e8f0',
    padding: '60px 24px'
  },
  formContainer: {
    maxWidth: '680px',
    margin: '0 auto',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '20px',
    padding: '36px',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)'
  },
  modalContent: {
    background: '#ffffff',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '600px',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    position: 'relative'
  },
  thankYouContainer: {
    maxWidth: '680px',
    margin: '60px auto',
    padding: '0 24px',
    width: '100%',
    animation: 'fadeInUp 0.5s ease-out'
  },
  thankYouCard: {
    background: '#ffffff',
    borderRadius: '24px',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
    padding: '40px',
    textAlign: 'center',
    position: 'relative'
  },
  thankYouHeader: {
    height: '10px',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  successBadge: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#dcfce7',
    color: '#16a34a',
    fontSize: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px auto',
    fontWeight: 'bold',
    boxShadow: '0 10px 20px -5px rgba(22, 163, 74, 0.3)',
    animation: 'bounceScale 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },
  summaryBox: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'left',
    marginBottom: '28px',
    marginTop: '20px'
  },
  summaryTitle: {
    fontSize: '13px',
    fontWeight: '800',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    marginBottom: '16px',
    paddingBottom: '8px',
    borderBottom: '1px solid #e2e8f0'
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#334155',
    marginBottom: '12px'
  }
};

export default function App() {
  const [currentQueryStr, setCurrentQueryStr] = useState(
    () => window.location.search || '?pet=dog'
  );
  
  // UI States (Removed Email Field)
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', query: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const applyPresetURL = (presetSearch) => {
    setCurrentQueryStr(presetSearch);
    setSubmitted(false); // Return to view mode when clicking a preset
    if (window.history.pushState) {
      window.history.pushState(null, '', presetSearch);
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentQueryStr(window.location.search || '?pet=dog');
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Lock body scroll when Modal is active
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
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
    .map(category => category.trim())
    .filter(Boolean);
  const filterServices = (params.get('service') || '')
    .toLowerCase()
    .split(',')
    .map(service => service.trim())
    .filter(Boolean);
  const currentData = OmniPetDB[petType] || OmniPetDB.dog;

  // URL Display Logic
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

      const params = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        inquiry: formData.query
      });

      await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
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
  return (
    <div style={styles.appContainer}>
      
      {/* CUSTOM CSS INJECTION WITH FIXED INPUT & PLACEHOLDER STYLING */}
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
        html { scroll-behavior: smooth; }
        body { background-color: #f8fafc; color: #0f172a; line-height: 1.5; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounceScale {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); }
        }

        .test-url-btn {
          background: #1e293b;
          color: #cbd5e1;
          border: 1px solid #334155;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .test-url-btn:hover { background: #334155; color: #ffffff; }
        .test-url-btn.active { background: #f59e0b; color: #020617; border-color: #f59e0b; }

        .card-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -6px rgba(0,0,0,0.08);
        }

        /* FIXED GOOGLE FORM INPUT & PLACEHOLDER COLORS */
        .google-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 14px;
          background-color: #ffffff !important;
          color: #0f172a !important;
          outline: none;
          transition: border-color 0.2s;
        }
        .google-input::placeholder {
          color: #64748b !important;
          opacity: 1;
        }
        .google-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
          background-color: #ffffff !important;
          color: #0f172a !important;
        }

        .btn-action {
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.1s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
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

      {/* TOP URL TESTING SWITCHER TOOLBAR WITH MAIN WEBSITE LINK */}
      <div style={styles.topUrlBar}>
        <div style={styles.topUrlInner}>
          <a 
            href="https://www.omipet.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: '11px', color: '#f59e0b', fontWeight: '800', textDecoration: 'none', background: '#334155', padding: '4px 10px', borderRadius: '4px', whiteSpace: 'nowrap' }}
          >
            🌐 www.omipet.in
          </a>
          <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '700', whiteSpace: 'nowrap' }}>
            | Quick Filter Test:
          </span>

          <div style={styles.urlButtonList}>
            {TESTING_PRESETS.map((preset, idx) => {
              const isActive = currentQueryStr === preset.search;
              return (
                <button
                  key={idx}
                  onClick={() => applyPresetURL(preset.search)}
                  className={`test-url-btn ${isActive ? 'active' : ''}`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CLEAN MARKETING HEADER */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <a href="https://www.omipet.in/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ ...styles.logoIcon, backgroundColor: currentData.themeColor }}>
              🐾
            </div>
            <div>
              <div style={styles.brandTitle}>
                Omi<span style={{ color: currentData.themeColor }}>Pet</span>
              </div>
              <div style={styles.brandSubtitle}>
                Care & Wellness Network
              </div>
            </div>
          </a>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#catalog" style={{ fontSize: '14px', fontWeight: '700', color: '#475569', textDecoration: 'none' }}>
              Products & Services
            </a>
            <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: currentData.themeColor, color: '#fff', fontSize: '13px', padding: '10px 18px' }}>
              Inquire Now
            </a>
          </div>
        </div>
      </header>

      {/* RENDER CONDITIONAL THANK YOU VIEW OR LANDING CONTENT */}
      {submitted ? (
        /* ELEGANT ANIMATED THANK YOU VIEW */
        <div style={styles.thankYouContainer}>
          <div style={styles.thankYouCard}>
            <div style={{ ...styles.thankYouHeader, backgroundColor: currentData.themeColor }} />
            
            <div style={styles.successBadge}>✓</div>
            <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', marginBottom: '10px' }}>
              Thank You, {formData.name}!
            </h1>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto' }}>
              Your inquiry for <strong>{petType.replace('_', ' ').toUpperCase()}</strong> care services has been successfully received. Our team of certified pet care experts will get back to you shortly.
            </p>

            <div style={styles.summaryBox}>
              <div style={styles.summaryTitle}>Inquiry Details Summary</div>
              <div style={styles.summaryRow}>
                <span style={{ color: '#64748b' }}>Pet Care Category:</span>
                <strong style={{ textTransform: 'capitalize', color: '#0f172a' }}>{petType.replace('_', ' ')}</strong>
              </div>
              <div style={styles.summaryRow}>
                <span style={{ color: '#64748b' }}>Phone Contact:</span>
                <strong style={{ color: '#0f172a' }}>{formData.phone}</strong>
              </div>
              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', display: 'block', marginBottom: '6px' }}>Your Query:</span>
                <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', fontSize: '13px', color: '#334155', fontStyle: 'italic', border: '1px solid #cbd5e1' }}>
                  "{formData.query}"
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', phone: '', query: '' });
              }}
              className="btn-action"
              style={{ backgroundColor: currentData.themeColor, color: '#fff', width: '100%', fontSize: '16px', padding: '16px' }}
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        /* MARKETING LANDING PAGE VIEW */
        <main>
          {/* HERO BANNER SECTION */}
          <section style={styles.heroSection}>
            <div style={styles.heroContainer}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <div style={{ ...styles.heroTag, backgroundColor: 'rgba(255,255,255,0.12)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}>
                  <span style={{ color: currentData.themeColor, marginRight: '6px', fontSize: '14px' }}>●</span> {currentData.badge}
                </div>
                <h1 style={styles.heroTitle}>{currentData.title}</h1>
                <p style={styles.heroSubtitle}>{currentData.subtitle}</p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                  <a
                    href="#inquiry-form"
                    className="btn-action"
                    style={{ backgroundColor: currentData.themeColor, color: '#fff' }}
                  >
                    Get Instant Consultation
                  </a>
                  <a
                    href="#catalog"
                    className="btn-action"
                    style={{ backgroundColor: '#1e293b', color: '#fff' }}
                  >
                    Explore Products
                  </a>
                </div>
              </div>

              <div style={{ flex: '1', minWidth: '300px', maxWidth: '520px' }}>
                <div style={styles.heroImageCard}>
                  <img
                    src={currentData.heroImage}
                    alt={currentData.title}
                    style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* DYNAMIC CATALOG SECTION */}
          <section id="catalog" style={styles.catalogSection}>
            <div style={{ marginBottom: '32px', borderBottom: '2px solid #e2e8f0', paddingBottom: '16px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a' }}>
                Featured Solutions for <span style={{ textTransform: 'capitalize' }}>{petType.replace('_', ' ')}s</span>
              </h2>
            </div>

            {/* 1. FOOD CATEGORY */}
            {showFood && currentData.food && (
              <div style={{ marginBottom: '48px' }}>
                <h3 style={styles.categoryHeading}>🥣 Premium Food & Diets</h3>
                <div style={styles.gridContainer}>
                  {currentData.food.map((item) => (
                    <div key={item.id} className="card-item">
                      <div>
                        <div style={{ position: 'relative', height: '180px', background: '#f1f5f9' }}>
                          <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <span style={styles.cardTag}>{item.tag}</span>
                        </div>
                        <div style={{ padding: '16px' }}>
                          <div style={{ fontSize: '12px', fontWeight: '700', color: '#d97706', marginBottom: '4px' }}>
                            {item.rating}
                          </div>
                          <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                            {item.name}
                          </h4>
                          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.4' }}>{item.desc}</p>
                        </div>
                      </div>
                      <div style={styles.cardFooter}>
                        <span style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a' }}>{item.price}</span>
                        <button
                          onClick={() => setSelectedProduct(item)}
                          className="btn-action"
                          style={{ backgroundColor: currentData.lightBg, color: currentData.themeColor, fontSize: '12px', padding: '8px 14px' }}
                        >
                          View Item
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. ACCESSORIES CATEGORY */}
            {showAccessories && currentData.accessories && (
              <div style={{ marginBottom: '48px' }}>
                <h3 style={styles.categoryHeading}>🎾 Pet Accessories & Gear</h3>
                <div style={styles.gridContainer}>
                  {currentData.accessories.map((item) => (
                    <div key={item.id} className="card-item">
                      <div>
                        <div style={{ position: 'relative', height: '180px', background: '#f1f5f9' }}>
                          <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <span style={styles.cardTag}>{item.tag}</span>
                        </div>
                        <div style={{ padding: '16px' }}>
                          <div style={{ fontSize: '12px', fontWeight: '700', color: '#d97706', marginBottom: '4px' }}>
                            {item.rating}
                          </div>
                          <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                            {item.name}
                          </h4>
                          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.4' }}>{item.desc}</p>
                        </div>
                      </div>
                      <div style={styles.cardFooter}>
                        <span style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a' }}>{item.price}</span>
                        <button
                          onClick={() => setSelectedProduct(item)}
                          className="btn-action"
                          style={{ backgroundColor: currentData.lightBg, color: currentData.themeColor, fontSize: '12px', padding: '8px 14px' }}
                        >
                          View Item
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. MEDICINES CATEGORY */}
            {showMedicines && currentData.medicines && (
              <div style={{ marginBottom: '48px' }}>
                <h3 style={styles.categoryHeading}>💊 Certified Veterinary Health & Medicines</h3>
                <div style={styles.gridContainer}>
                  {currentData.medicines.map((item) => (
                    <div key={item.id} className="card-item">
                      <div>
                        <div style={{ position: 'relative', height: '180px', background: '#f1f5f9' }}>
                          <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <span style={styles.cardTag}>{item.tag}</span>
                        </div>
                        <div style={{ padding: '16px' }}>
                          <div style={{ fontSize: '12px', fontWeight: '700', color: '#d97706', marginBottom: '4px' }}>
                            {item.rating}
                          </div>
                          <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                            {item.name}
                          </h4>
                          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.4' }}>{item.desc}</p>
                        </div>
                      </div>
                      <div style={styles.cardFooter}>
                        <span style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a' }}>{item.price}</span>
                        <button
                          onClick={() => setSelectedProduct(item)}
                          className="btn-action"
                          style={{ backgroundColor: currentData.lightBg, color: currentData.themeColor, fontSize: '12px', padding: '8px 14px' }}
                        >
                          View Item
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. BREEDER SERVICE */}
            {showBreeder && currentData.breeder && (
              <div style={{ marginBottom: '48px' }}>
                <h3 style={styles.categoryHeading}>🏡 Verified Breeder Network</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                  {currentData.breeder.map((b) => (
                    <div key={b.id} style={styles.serviceCard}>
                      <div>
                        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '14px' }}>
                          <img
                            src={b.avatar}
                            alt={b.name}
                            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${currentData.themeColor}` }}
                          />
                          <div>
                            <span style={styles.serviceBadge}>{b.tag}</span>
                            <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>{b.name}</h4>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>📍 {b.location}</div>
                          </div>
                        </div>
                        <p style={{ fontSize: '13px', color: '#475569', marginBottom: '12px' }}>{b.desc}</p>
                      </div>
                      <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>Contact: {b.contact}</div>
                          <div style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>{b.fee}</div>
                        </div>
                        <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: '#2563eb', color: '#fff', fontSize: '11px', padding: '8px 12px' }}>
                          Inquire Breed
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. TRAINER SERVICE */}
            {showTrainer && currentData.trainer && (
              <div style={{ marginBottom: '48px' }}>
                <h3 style={styles.categoryHeading}>🎓 Certified Pet Trainers & Behaviorists</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                  {currentData.trainer.map((t) => (
                    <div key={t.id} style={styles.serviceCard}>
                      <div>
                        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '14px' }}>
                          <img
                            src={t.avatar}
                            alt={t.name}
                            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #4f46e5' }}
                          />
                          <div>
                            <span style={{ ...styles.serviceBadge, backgroundColor: '#e0e7ff', color: '#3730a3' }}>{t.tag}</span>
                            <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>{t.name}</h4>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>📍 {t.location}</div>
                          </div>
                        </div>
                        <p style={{ fontSize: '13px', color: '#475569', marginBottom: '12px' }}>{t.desc}</p>
                      </div>
                      <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>Contact: {t.contact}</div>
                          <div style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>{t.fee}</div>
                        </div>
                        <a href="#inquiry-form" className="btn-action" style={{ backgroundColor: '#4f46e5', color: '#fff', fontSize: '11px', padding: '8px 12px' }}>
                          Book Session
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* INQUIRY FORM SECTION (UPDATED WITHOUT EMAIL) */}
          <section id="inquiry-form" style={styles.formSection}>
            <div style={styles.formContainer}>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#0f172a' }}>
                  Inquire for <span style={{ color: currentData.themeColor, textTransform: 'capitalize' }}>{petType.replace('_', ' ')} Care</span>
                </h2>
                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                  Fill out the form below to connect directly with our experts.
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
                    placeholder={`Describe your request for ${petType.replace('_', ' ')} food, accessories, medicines, or services...`}
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
                  style={{ backgroundColor: currentData.themeColor, color: '#ffffff', marginTop: '8px' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </section>
        </main>
      )}

      {/* ITEM DETAILS MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={{ position: 'relative', height: '260px', background: '#f1f5f9' }}>
              <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
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
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#d97706' }}>{selectedProduct.rating}</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#059669', background: '#d1fae5', padding: '2px 8px', borderRadius: '4px' }}>In Stock</span>
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
                  style={{ backgroundColor: currentData.themeColor, color: '#fff', fontSize: '13px' }}
                >
                  Order / Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#020617', color: '#64748b', padding: '32px 24px', textAlign: 'center', borderTop: '1px solid #0f172a', marginTop: 'auto' }}>
        <p style={{ fontSize: '13px' }}>
          © {new Date().getFullYear()} <a href="https://www.omipet.in/" style={{ color: '#f59e0b', textDecoration: 'none' }}>OmiPet</a>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}