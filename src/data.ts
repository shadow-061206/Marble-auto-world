import { Service, Testimonial, GalleryItem, ReviewPhoto } from './types';

import imgWorkshop1 from './assets/images/IMG20260522190406.jpg'; // Interior Assembly & Diagnostic Bay
import imgWorkshop2 from './assets/images/IMG20260522190515.jpg'; // Active General Service Lift
import imgWorkshop3 from './assets/images/IMG20260522190118.jpg'; // Fender Calibration Lift
import imgWorkshop4 from './assets/images/IMG20260522190141.jpg'; // SUV PPF Installation
import imgWorkshop5 from './assets/images/IMG20260522190034.jpg'; // Workshop Entry
import imgWorkshop6 from './assets/images/IMG20260522190016.jpg';
import imgWorkshop7 from './assets/images/IMG20260522190156.jpg';
import imgWorkshop8 from './assets/images/IMG20260522190214.jpg';
import imgWorkshop9 from './assets/images/IMG20260522190253.jpg';
import imgWorkshop10 from './assets/images/IMG20260522190340.jpg';
import imgWorkshop11 from './assets/images/IMG20260522190355.jpg';
import whatsappImg1 from './assets/images/WhatsApp Image 2026-05-23 at 8.48.34 AM.jpeg'; // Newly Uploaded Lift Bay Picture

import before1 from './assets/images/before1.jpg';
import after1 from './assets/images/After1.jpg';
import before2 from './assets/images/before2.jpg';
import after2 from './assets/images/After2.jpg';
import before3 from './assets/images/Before3.jpg';
import after3 from './assets/images/After3.jpg';

export const SERVICES: Service[] = [
  {
    id: 'car-detailing',
    title: 'Car Detailing',
    description: 'Immaculate interior & exterior deep cleaning. Every inch of your cabin and chassis is painstakingly restored, conditioned, and protected.',
    category: 'detailing',
    icon: 'Sparkles',
    features: ['Leather conditioning', 'Steam clean extraction', 'Engine bay detailing', 'Multi-stage paint correction']
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    description: 'Ultra-hydrophobic liquid polymer with nanotech binding. Deflects swirl marks, bird droppings, acid rain, and UV damage with stunning depth of gloss.',
    category: 'detailing',
    icon: 'ShieldAlert',
    features: ['9H Hardness index', 'Super-hydrophobic runoff', '5-Year warranty option', 'Intensified gloss & shine']
  },
  {
    id: 'ppf',
    title: 'Paint Protection Film (PPF)',
    description: 'Self-healing polycaprolactone urethane shield. Protect elements from gravel rock-chips, key scratches, and harsh environmental wear.',
    category: 'detailing',
    icon: 'ShieldCheck',
    features: ['Self-healing heat tech', 'Virtually invisible film', 'Non-yellowing guarantee', 'Complete paint coverage']
  },
  {
    id: 'car-washing',
    title: 'Premium Car Wash',
    description: 'Scratch-free hyper-baric cleaning utilizing pure demineralized water, active snow foam, and premium wool wash mitts.',
    category: 'detailing',
    icon: 'Droplet',
    features: ['Ph-neutral active foam', 'Underbody chassis spray', 'Microfiber touch-drying', 'Tyre dress & shine']
  },
  {
    id: 'mechanical-repair',
    title: 'Mechanical Repair',
    description: 'Diagnostic engines overhaul and precise component balancing. Master technicians addressing complex suspension, steering, and powertrain operations.',
    category: 'repair',
    icon: 'Wrench',
    features: ['Advanced computer diagnostics', 'Engine & gearbox overhaul', 'Chassis alignment', 'Steering gear rebuild']
  },
  {
    id: 'electrical-repair',
    title: 'Electrical Repair',
    description: 'Comprehensive troubleshooting of sensors, wiring looms, ECUs, modules, alternators, and modern hybrid electronics system clusters.',
    category: 'repair',
    icon: 'Zap',
    features: ['ECU scanning & flashing', 'Battery diagnostic care', 'Premium wiring restoration', 'Sensor node calibration']
  },
  {
    id: 'denting-painting',
    title: 'Denting & Painting',
    description: 'Flawless sheet-metal re-shaping and computerized color-matching in sealed specialized spray booths for a completely custom showroom shine.',
    category: 'repair',
    icon: 'Paintbrush',
    features: ['Paintless Dent Repair (PDR)', 'Digital color pairing matching', 'Hard-baked paint finish', 'Premium Glasurit paint']
  },
  {
    id: 'wheel-alignment',
    title: 'Wheel Alignment',
    description: 'Laser-guided multi-axis alignment. Adjust caster, camber, and toe with absolute factory precision for stable speeds and even tyre wear.',
    category: 'repair',
    icon: 'Compass',
    features: ['3D Laser tracking sensors', 'Suspension wear check', 'Tyre pressure optimization', 'Digital report certification']
  },
  {
    id: 'insurance-work',
    title: 'Insurance Work',
    description: 'Cashless car-accident repair ecosystem with major national providers. Complete assistance from digital claims submission to pristine restoration.',
    category: 'utility',
    icon: 'FileText',
    features: ['Tie-ups with leading insurers', 'Cashless process coordination', 'Zero-depreciation claim help', 'Genuine OEM spares assured']
  },
  {
    id: 'car-accessories',
    title: 'Car Accessories',
    description: 'Bespoke custom cabin additions. Experience high-fidelity audio kits, ambient glow matrices, Android screens, customized seats, and steering updates.',
    category: 'utility',
    icon: 'Settings',
    features: ['Premium audio components', 'Elegant seat leather covers', 'Android infotainment screens', 'Ambient LED lighting suites']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'g1',
    name: 'shashi meena',
    carOwned: 'Hyundai i10 Owner',
    rating: 5,
    comment: 'Best service and best behaviour',
    serviceReceived: 'Premium Interior & Exterior Restoration',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    timeAgo: '4 months ago',
    reviewCount: 2
  },
  {
    id: 'g2',
    name: 'Rishabh Jain',
    carOwned: 'Honda Jazz Owner',
    rating: 5,
    comment: 'Very Good setup as per Market',
    serviceReceived: '9H Mirror-Glaze Coating Shield',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    timeAgo: '2 years ago',
    reviewCount: 5
  },
  {
    id: 'g3',
    name: 'deepak jangid',
    carOwned: 'Suzuki Swift Owner',
    rating: 5,
    comment: 'Great service and best rates',
    serviceReceived: 'Full Body Oven Paint & Denting',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    timeAgo: 'a year ago',
    reviewCount: 1
  },
  {
    id: 't1',
    name: 'Rajinder Singh',
    carOwned: 'BMW M340i LCI',
    rating: 5,
    comment: 'Immaculate work on my M340i. I opted for the 5-year Ceramic Coating and the surface finish is deeper than when I took delivery in the showroom. Highly recommended for premium vehicle detailing.',
    serviceReceived: 'Ceramic Coating & Interior Detailing',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    timeAgo: '3 weeks ago',
    reviewCount: 8
  },
  {
    id: 't2',
    name: 'Ananya Sharma',
    carOwned: 'Mahindra Scorpio-N',
    rating: 5,
    comment: 'Got my Scorpio-N protected with self-healing Matte PPF here. Mamta Enterprises did an incredible job, aligning every edge perfectly so that you cannot even tell there is film on the car. Outstanding customer service!',
    serviceReceived: 'Paint Protection Film (PPF)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    timeAgo: '5 months ago',
    reviewCount: 3
  }
];

export const WORKSHOP_REVIEWS_PHOTOS: ReviewPhoto[] = [
  {
    id: 'wp1',
    url: imgWorkshop5,
    caption: 'Official interior assembly and heavy diagnostic bay layout at Marble Auto World opposite Mamta Enterprises.',
    category: 'Workshop Layout',
    fallbackUrl: imgWorkshop5
  },
  {
    id: 'wp2',
    url: whatsappImg1,
    caption: 'Active general service station showing our hydraulic car lifts and mechanical tools floor.',
    category: 'Mechanical Service',
    fallbackUrl: whatsappImg1
  },
  {
    id: 'wp3',
    url: imgWorkshop3,
    caption: 'Fender calibration & drivetrain check on an advanced hydraulic 2-post elevator.',
    category: 'Detailing Studio',
    fallbackUrl: imgWorkshop3
  },
  {
    id: 'wp4',
    url: imgWorkshop4,
    caption: 'Luxury offroad and corporate SUVs receiving complete PPF Matte self-healing shield applications.',
    category: 'PPF Installation',
    fallbackUrl: imgWorkshop4
  },
  {
    id: 'wp5',
    url: imgWorkshop6,
    caption: 'Front bumper fitment and high-precision body contour alignment in progress.',
    category: 'Bodywork',
    fallbackUrl: imgWorkshop6
  },
  {
    id: 'wp6',
    url: imgWorkshop7,
    caption: 'General chassis safety inspections and fluid condition testing inside the active workshop.',
    category: 'Fluid Check',
    fallbackUrl: imgWorkshop7
  },
  {
    id: 'wp7',
    url: imgWorkshop1,
    caption: 'Our Workshop Entry Point.',
    category: 'Heavy Lift',
    fallbackUrl: imgWorkshop1
  },
  {
    id: 'wp8',
    url: imgWorkshop8,
    caption: 'Specular nano-ceramic paint gloss detailing and finish verification.',
    category: 'Nano-Glaze',
    fallbackUrl: imgWorkshop8
  },
  {
    id: 'wp9',
    url: imgWorkshop9,
    caption: 'Diagnostic module scanners tracking engine sensor readings in real-time.',
    category: 'ECU Calibration',
    fallbackUrl: imgWorkshop9
  },
  {
    id: 'wp10',
    url: imgWorkshop10,
    caption: 'Pressurized clean-air spray booth ensuring pure paint application matches.',
    category: 'Paint Booth',
    fallbackUrl: imgWorkshop10
  },
  {
    id: 'wp11',
    url: imgWorkshop11,
    caption: 'Computerized telemetry dashboards providing accurate power-delivery indicators.',
    category: 'Engine Overhaul',
    fallbackUrl: imgWorkshop11
  },
  {
    id: 'wp12',
    url: imgWorkshop4,
    caption: 'Thermal baking chamber drying polyurethane sealants and finishes.',
    category: 'Thermal Baking',
    fallbackUrl: imgWorkshop4
  },
  {
    id: 'wp13',
    url: imgWorkshop1,
    caption: 'Precision suspension re-bushing and steering wheel alignment diagnostics.',
    category: 'Alignment Bay',
    fallbackUrl: imgWorkshop1
  },
  {
    id: 'wp14',
    url: imgWorkshop2,
    caption: 'Handover exterior gloss evaluation and detailing inspection.',
    category: 'Premium Detailing',
    fallbackUrl: imgWorkshop2
  },
  {
    id: 'wp15',
    url: imgWorkshop3,
    caption: 'Tire safety tread-depth inspection and air pressure balancing.',
    category: 'Tire & Brake Service',
    fallbackUrl: imgWorkshop3
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Car Service',
    beforeUrl: before1,
    afterUrl: after1,
    description: 'Complete multi-point diagnostics, precision mechanical repair, and fluid tune-ups.'
  },
  {
    id: 'g2',
    title: 'Car Denting',
    beforeUrl: before2,
    afterUrl: after2,
    description: 'Precision collision repair, panel reshaping, and high-performance heat-baked paint match restoration.'
  },
  {
    id: 'g3',
    title: 'Car Washing',
    beforeUrl: before3,
    afterUrl: after3,
    description: 'Deep high-pressure snow foam wash, underbody detailing, and premium hydrophobic wax protection.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Premium Nanometer Products',
    description: 'We import our ceramics, active foams, and self-healing clear bras directly from leading brands in Germany and Japan.',
    icon: 'Sparkles'
  },
  {
    title: 'Certificated Masters',
    description: 'Our detailing specialists and mechanical engineers hold multiple global accreditation certificates on paint-restoration.',
    icon: 'Award'
  },
  {
    title: 'Dust-Free Clean Room',
    description: 'Our PPF and Ceramic Coatings are applied in pressurized, humidity-controlled clean booths to prevent foreign dust spotting.',
    icon: 'Shield'
  },
  {
    title: 'Absolute Transparency',
    description: 'Receive real-time high-definition video steps and telemetry reports of your cars progress inside our workshop directly.',
    icon: 'Eye'
  },
  {
    title: 'End-To-End Claims Service',
    description: 'Direct tie-ups with leading vehicular motor insurance providers for seamless, cashless claim processes.',
    icon: 'FileCheck'
  }
];
