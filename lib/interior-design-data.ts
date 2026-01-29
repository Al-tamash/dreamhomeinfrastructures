// Interior Design Services Data - Unified Page
import { 
  Compass, 
  FileText, 
  Building, 
  Ruler, 
  PenTool, 
  Shield, 
  Boxes, 
  Zap,
  BadgeCheck, 
  Clock, 
  Users, 
  Eye,
  Video,
  Layers,
  Palette,
  CheckCircle,
  Play,
  Camera,
  Lightbulb,
  Sparkles,
  LucideIcon
} from "lucide-react";

// Type definitions
export interface InteriorService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  badge?: string;
}

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Deliverable {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export interface PortfolioItem {
  title: string;
  image: string;
  type: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  content: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// ==========================================
// 1. HERO SECTION DATA
// ==========================================
export const heroData = {
  badge: "Interior Design & Visualization Services in Hyderabad",
  title: "Transform Your Vision Into",
  titleHighlight: "Stunning Reality",
  subtitle: "From architectural blueprints to photorealistic 3D renders and immersive walkthrough videos – experience your dream space before a single brick is laid.",
  trustIndicators: [
    { icon: CheckCircle, text: "500+ Plans Designed" },
    { icon: CheckCircle, text: "100% Client Satisfaction" },
    { icon: CheckCircle, text: "GHMC Licensed" },
  ],
  ctaPrimary: "Get Free Consultation",
  ctaSecondary: "Call Now",
  videoSrc: "/videos/architechturalvideoherosection.mp4"
};

// ==========================================
// 2. THREE MAIN SERVICES DATA
// ==========================================
export const mainServices: InteriorService[] = [
  { 
    id: "architectural-planning",
    title: "Architectural Planning", 
    subtitle: "Complete Building Documentation",
    description: "GHMC-compliant floor plans, elevation designs, structural drawings, and all documentation needed for building approvals. From site analysis to permit acquisition.", 
    icon: Compass, 
    image: "/architectural-planning/ultra_realistic_photograph_of_an_architect_working.jpeg",
    badge: "Most Popular",
    features: [
      "Site Analysis & Survey",
      "2D Floor Plan Design",
      "Elevation Designs (Front, Side, Rear)",
      "Structural Engineering & RCC Design",
      "MEP Planning (Electrical, Plumbing)",
      "GHMC/HMDA Approval Drawings"
    ]
  },
  { 
    id: "3d-perspective",
    title: "3D Perspective & Rendering", 
    subtitle: "Photorealistic Visualizations",
    description: "See your building before construction starts with stunning photorealistic 3D renders. Exterior views, interior spaces, day/night scenes with realistic lighting.", 
    icon: Boxes, 
    image: "/architectural-planning/Modernbuildingelevationswithdesigntools.png",
    badge: "High Demand",
    features: [
      "Exterior 3D Views (Multiple Angles)",
      "Interior Space Visualization",
      "Day & Night Scene Renders",
      "Realistic Materials & Textures",
      "Landscaping & Environment",
      "4K High Resolution Output"
    ]
  },
  { 
    id: "3d-walkthrough",
    title: "3D Walkthrough Animation", 
    subtitle: "Virtual Experience Tour",
    description: "Walk through every room virtually with cinematic 3D animations. Perfect for pre-sales, investor presentations, and finalizing design decisions.", 
    icon: Video, 
    image: "/architectural-planning/ultra_realistic_photograph_of_an_architect_performing.jpeg",
    badge: "Premium",
    features: [
      "Cinematic Camera Movements",
      "Complete Interior/Exterior Tour",
      "Background Music & Voiceover",
      "Realistic Lighting & Shadows",
      "Furniture & Decor Staging",
      "HD/4K Video Export"
    ]
  },
];

// ==========================================
// 3. WHY CHOOSE US DATA
// ==========================================
export const whyChooseUsData: WhyChooseItem[] = [
  { 
    icon: BadgeCheck, 
    title: "100% Approval Rate", 
    description: "All our drawings are GHMC/HMDA compliant. We've never had a plan rejection in 15+ years." 
  },
  { 
    icon: Clock, 
    title: "Fast Turnaround", 
    description: "Residential plans in 2-3 weeks. 3D perspectives in 5-7 days. Walkthroughs in 2 weeks." 
  },
  { 
    icon: Users, 
    title: "In-House Experts", 
    description: "Licensed architects, structural engineers, and 3D artists on staff. No outsourcing, no delays." 
  },
  { 
    icon: Layers, 
    title: "Complete Package", 
    description: "From blueprints to 3D visualization – get everything under one roof with seamless coordination." 
  },
  { 
    icon: Sparkles, 
    title: "Photorealistic Quality", 
    description: "Our 3D renders are so realistic, clients often think they're actual photographs." 
  },
  { 
    icon: Shield, 
    title: "Approval Assistance", 
    description: "We handle the complete GHMC/HMDA approval process on your behalf at no extra cost." 
  },
];

// ==========================================
// 4. PROCESS TIMELINE DATA
// ==========================================
export const processData: ProcessStep[] = [
  { 
    step: "01", 
    title: "Consultation", 
    description: "Understanding your requirements, budget, and vision for the project.", 
    icon: Users 
  },
  { 
    step: "02", 
    title: "Site Visit & Survey", 
    description: "Land survey, soil testing, and site feasibility analysis.", 
    icon: Compass 
  },
  { 
    step: "03", 
    title: "Design & Drawings", 
    description: "Floor plans, elevations, structural and MEP designs created.", 
    icon: PenTool 
  },
  { 
    step: "04", 
    title: "3D Visualization", 
    description: "Photorealistic renders and walkthrough animations produced.", 
    icon: Boxes 
  },
  { 
    step: "05", 
    title: "Approvals & Delivery", 
    description: "GHMC submission, permits obtained, and all deliverables handed over.", 
    icon: Shield 
  },
];

// ==========================================
// 5. DELIVERABLES GRID DATA (Bento Style)
// ==========================================
export const deliverablesData: Deliverable[] = [
  { 
    title: "2D Floor Plans", 
    description: "Detailed layouts with dimensions and specifications", 
    icon: FileText, 
    category: "Drawings" 
  },
  { 
    title: "Elevation Designs", 
    description: "Front, side, and rear building views", 
    icon: Building, 
    category: "Drawings" 
  },
  { 
    title: "Structural Drawings", 
    description: "RCC design with column, beam, slab layouts", 
    icon: Ruler, 
    category: "Engineering" 
  },
  { 
    title: "MEP Layouts", 
    description: "Electrical, plumbing, HVAC system plans", 
    icon: PenTool, 
    category: "Engineering" 
  },
  { 
    title: "3D Exterior Views", 
    description: "Photorealistic building from all angles", 
    icon: Camera, 
    category: "3D" 
  },
  { 
    title: "3D Interior Views", 
    description: "Room-by-room visualization with decor", 
    icon: Eye, 
    category: "3D" 
  },
  { 
    title: "Day/Night Renders", 
    description: "Lighting variations for full experience", 
    icon: Lightbulb, 
    category: "3D" 
  },
  { 
    title: "Walkthrough Video", 
    description: "Cinematic tour of your entire project", 
    icon: Play, 
    category: "Animation" 
  },
];

// ==========================================
// 6. PORTFOLIO DATA
// ==========================================
export const portfolioData: PortfolioItem[] = [
  { 
    title: "Modern Villa Floor Plan", 
    image: "/architectural-planning/GHMCApprovalDrawings.png", 
    type: "Residential",
    category: "Planning"
  },
  { 
    title: "Contemporary Elevation Design", 
    image: "/architectural-planning/Modernbuildingelevationswithdesigntools.png", 
    type: "Villa",
    category: "Planning"
  },
  { 
    title: "Exterior 3D Views", 
    image: "/3d-perspective/exterior_3d_views.png", 
    type: "3D Render",
    category: "Visualization"
  },
  { 
    title: "Interior Perspectives", 
    image: "/3d-perspective/interior_perspectives.png", 
    type: "Interior",
    category: "Visualization"
  },
  { 
    title: "Day & Night Renders", 
    image: "/3d-perspective/day_night_renders.png", 
    type: "3D Render",
    category: "Visualization"
  },
  { 
    title: "Bird's Eye View", 
    image: "/3d-perspective/birds_eye_view.png", 
    type: "Aerial",
    category: "Visualization"
  },
];

// ==========================================
// 7. WALKTHROUGH SHOWCASE DATA
// ==========================================
export const walkthroughShowcaseData = {
  title: "Experience Virtual Walkthroughs",
  subtitle: "See how our 3D walkthrough videos bring projects to life before construction begins",
  videoUrl: "/videos/Indian_Luxury_Real_Estate_Video.mp4",
  thumbnailUrl: "/architectural-planning/Modernbuildingelevationswithdesigntools.png",
  features: [
    "Cinematic camera movements through every space",
    "Realistic lighting simulating day & night",
    "Fully furnished interiors with decor",
    "HD/4K export for presentations"
  ]
};

// ==========================================
// 8. TESTIMONIALS DATA
// ==========================================
export const testimonialsData: Testimonial[] = [
  { 
    name: "Rajesh Kumar", 
    role: "Homeowner, Madhapur", 
    rating: 5, 
    content: "Dream Home's architectural planning was exceptional. Every detail was considered, and the GHMC approval came through in just 2 weeks. Their drawings were so detailed that construction was smooth."
  },
  { 
    name: "Sunita Reddy", 
    role: "Builder, LB Nagar", 
    rating: 5, 
    content: "We've worked with Dream Home on 15+ projects. Their structural planning and 3D visualization quality is unmatched. They understand Hyderabad's building codes inside out."
  },
  { 
    name: "Venkat Rao", 
    role: "Commercial Developer, HITEC City", 
    rating: 5, 
    content: "The 3D walkthrough video helped us secure investor funding. Clients could literally walk through the project before construction. Absolutely worth every rupee."
  },
  { 
    name: "Priya Sharma", 
    role: "Interior Designer, Jubilee Hills", 
    rating: 5, 
    content: "Their 3D renders are photorealistic! My clients can't believe these aren't actual photographs. Dream Home has become my go-to partner for all visualization needs."
  },
  { 
    name: "Mohammed Irfan", 
    role: "Factory Owner, Patancheru", 
    rating: 5, 
    content: "Industrial building planning was perfect. They handled everything from structural engineering to GHMC approvals. Zero hassle, complete peace of mind."
  },
  { 
    name: "Lakshmi Narasimha", 
    role: "NRI Client, USA", 
    rating: 5, 
    content: "Being abroad, the 3D walkthrough was invaluable. I could see my home being built from 10,000 miles away. Weekly updates and video calls made the process seamless."
  },
  { 
    name: "Arvind Reddy", 
    role: "Apartment Complex, Gachibowli", 
    rating: 5, 
    content: "50 apartments designed with precision. The MEP planning saved us lakhs in construction costs. Their experience with large projects really shows."
  },
  { 
    name: "Kavitha Menon", 
    role: "Villa Owner, Kondapur", 
    rating: 5, 
    content: "From floor plans to the final walkthrough video - Dream Home delivered everything on time. Our luxury villa looks exactly like the 3D renders!"
  },
];

// ==========================================
// 9. FAQ DATA
// ==========================================
export const faqsData: FAQ[] = [
  { 
    question: "What is included in your Interior Design services?", 
    answer: "Our comprehensive package includes: architectural planning (floor plans, elevation, structural design), 3D perspective renders (photorealistic exterior/interior views), and 3D walkthrough animations. You can choose individual services or take our complete design-to-visualization package." 
  },
  { 
    question: "How much does architectural planning cost in Hyderabad?", 
    answer: "Architectural planning costs typically range from ₹15-25 per sq.ft for residential and ₹20-35 per sq.ft for commercial projects. 3D perspectives start from ₹15,000, and walkthroughs from ₹40,000 depending on project size and complexity." 
  },
  { 
    question: "How long does the complete process take?", 
    answer: "Architectural planning takes 2-4 weeks (residential) or 4-8 weeks (commercial). 3D perspectives are delivered in 5-7 days. Walkthrough animations take 2-3 weeks. Complete packages take approximately 6-8 weeks from start to finish." 
  },
  { 
    question: "Do you help with GHMC/HMDA building approvals?", 
    answer: "Yes! We prepare all drawings as per GHMC/HMDA guidelines and handle the complete approval process on your behalf. Our approval success rate is 100% with zero rejections in 15+ years." 
  },
  { 
    question: "Can I see how my building will look before construction?", 
    answer: "Absolutely! That's exactly what our 3D perspective and walkthrough services provide. You'll see photorealistic renders of every angle and virtually walk through every room before construction begins." 
  },
  { 
    question: "What format are the deliverables provided in?", 
    answer: "Architectural drawings come in AutoCAD/PDF format. 3D perspectives are delivered as high-resolution JPG/PNG images (up to 4K). Walkthrough videos are provided in MP4 format in HD or 4K resolution." 
  },
];

// ==========================================
// 10. CTA DATA
// ==========================================
export const ctaData = {
  eyebrow: "Ready to Visualize Your Dream?",
  title: "Let's Bring Your Vision to Life",
  subtitle: "Get professional architectural plans and stunning 3D visualizations that make decision-making easy.",
  highlight: "Free consultation. No obligation.",
  ctaPrimary: "Get Free Consultation",
  ctaSecondary: "Call Now",
  footerNote: "📐 Fast turnaround: Plans in 2-3 weeks. 3D renders in 5-7 days."
};
