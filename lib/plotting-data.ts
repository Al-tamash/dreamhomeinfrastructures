// Plotting Venture Page Data
import { 
  Landmark, FileCheck, TreePine, Shield, BadgeCheck, HardHat, TrendingUp, 
  Handshake, Clock, Eye, Ruler, FileText, CircleCheck, Building2, Car, 
  Droplets, Zap, Trees as Tree, Home, MapPin
} from "lucide-react";

// Development Services Data
export const developmentServices = [
  { 
    id: "hmda",
    icon: Landmark, 
    title: "HMDA Layout Development", 
    shortDesc: "Transform your land in Hyderabad city limits into HMDA-approved residential layouts.",
    fullDesc: "Own land within Hyderabad Metropolitan Development Authority limits? We help landowners convert raw land into fully-approved, infrastructure-ready layouts that attract premium buyers.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=870", 
    badge: "Most Demanded",
    services: [
      "Complete HMDA layout approval process",
      "LP Number registration & documentation",
      "Infrastructure - roads, drainage, lighting",
      "Water & electricity connections",
      "Bank loan pre-approval for buyers",
      "RERA registration assistance"
    ],
    benefits: [
      "Highest resale value in the market",
      "Easy bank financing for buyers",
      "Premium buyer attraction"
    ]
  },
  { 
    id: "dtcp",
    icon: FileCheck, 
    title: "DTCP Layout Development", 
    shortDesc: "Develop your land in panchayat areas with proper DTCP approvals and infrastructure.",
    fullDesc: "Have agricultural or panchayat land outside city limits? DTCP approval is your gateway to legal development. We navigate the complex approval process while you focus on returns.",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=870", 
    badge: "High Growth Areas",
    services: [
      "DTCP layout sanctioning",
      "Town planning & panchayat approvals",
      "Land survey & plot demarcation",
      "Road & infrastructure development",
      "All required NOCs & clearances",
      "Mutation & registration support"
    ],
    benefits: [
      "Lower development cost",
      "Emerging location advantage",
      "Faster appreciation potential"
    ]
  },
  { 
    id: "farm",
    icon: TreePine, 
    title: "Farm Layout Development", 
    shortDesc: "Convert your agricultural land into weekend retreat plots with all amenities.",
    fullDesc: "Farm plots are the fastest-growing real estate segment. We develop your agricultural land into weekend getaway plots with roads, water, fencing - everything buyers expect.",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=871", 
    badge: "Trending",
    services: [
      "Agricultural land layout planning",
      "Bore well & water infrastructure",
      "Compound wall & fencing",
      "Approach road construction",
      "Plot demarcation & boundary marking",
      "Avenue plantation & landscaping"
    ],
    benefits: [
      "Growing demand for weekend homes",
      "Lower regulatory complexity",
      "Attractive to NRI buyers"
    ]
  },
];

// Why Choose Us Data
export const whyChooseUsData = [
  { icon: Shield, title: "100% Legal Assurance", description: "Every layout we develop comes with clear titles, verified documents, and zero legal disputes. Your land, fully protected." },
  { icon: BadgeCheck, title: "Government Compliant", description: "HMDA, DTCP, RERA - we ensure all approvals are in place. No shortcuts, only proper legal development." },
  { icon: HardHat, title: "End-to-End Development", description: "From survey to infrastructure to registration - we handle everything. You just provide the land." },
  { icon: TrendingUp, title: "Value Maximization", description: "Our layouts are designed for maximum plot value. Strategic planning that attracts premium buyers." },
  { icon: Handshake, title: "Transparent Process", description: "Regular updates, clear timelines, no hidden charges. You're involved at every stage of development." },
  { icon: Clock, title: "Timely Delivery", description: "We respect your time. Clear project timelines with milestone-based progress tracking." },
];

// Development Process Data
export const developmentProcessData = [
  { step: "01", title: "Land Evaluation", description: "We assess your land's development potential, zoning, and best layout options", icon: Eye },
  { step: "02", title: "Survey & Planning", description: "Detailed survey, soil testing, and layout design by our architects", icon: Ruler },
  { step: "03", title: "Approvals", description: "We handle all HMDA/DTCP applications, liaisons, and government approvals", icon: FileText },
  { step: "04", title: "Infrastructure", description: "Roads, drainage, water, electricity - complete infrastructure development", icon: HardHat },
  { step: "05", title: "Handover", description: "Demarcated plots ready for sale with all documentation complete", icon: CircleCheck },
];

// Approvals Data
export const approvalsData = [
  { name: "GHMC Licensed", number: "BL/2149/2009", icon: Building2 },
  { name: "HMDA Approved", number: "Certified Developer", icon: Landmark },
  { name: "DTCP Certified", number: "Layout Development", icon: FileCheck },
  { name: "RERA Registered", number: "Compliant Projects", icon: Shield },
];

// Completed Projects Data
export const completedProjectsData = [
  { name: "Sri Lakshmi Nagar", location: "Shadnagar", plots: "150+", size: "25 Acres", type: "HMDA", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=870" },
  { name: "Green Valley Farms", location: "Chevella", plots: "80+", size: "40 Acres", type: "Farm", image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=871" },
  { name: "Sunrise Township", location: "Maheshwaram", plots: "200+", size: "35 Acres", type: "DTCP", image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=870" },
  { name: "Hill View Enclave", location: "Mokila", plots: "120+", size: "20 Acres", type: "HMDA", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=870" },
];

// Infrastructure Data
export const infrastructureData = [
  { icon: Car, name: "30ft+ Wide Roads", desc: "BT/CC roads with proper drainage" },
  { icon: Droplets, name: "Water Supply", desc: "Bore wells or municipal connection" },
  { icon: Zap, name: "Electricity", desc: "EB connection with street lights" },
  { icon: Tree, name: "Avenue Plantation", desc: "Greenery along all roads" },
  { icon: Home, name: "Compound Wall", desc: "Complete boundary protection" },
  { icon: MapPin, name: "Clear Demarcation", desc: "Cement pillars at corners" },
];

// Investment Comparison Data
export const investmentComparisonData = [
  { 
    type: "HMDA Layout",
    icon: Landmark,
    bestFor: "Within city expansion areas",
    appreciation: "Steady & Reliable",
    bankLoan: "All banks approved",
    timeline: "6-12 months",
    highlight: true
  },
  { 
    type: "DTCP Layout",
    icon: FileCheck,
    bestFor: "Emerging growth corridors",
    appreciation: "High potential",
    bankLoan: "Select banks",
    timeline: "4-8 months",
    highlight: false
  },
  { 
    type: "Farm Layout",
    icon: TreePine,
    bestFor: "Weekend homes & farming",
    appreciation: "Growing demand",
    bankLoan: "On case basis",
    timeline: "2-4 months",
    highlight: false
  },
];

// Testimonials Data
export const testimonialsData = [
  { 
    name: "Venkat Reddy", 
    role: "Landowner, Shadnagar", 
    rating: 5, 
    text: "I had 10 acres of agricultural land that was just sitting idle. Dream Home developed it into a beautiful HMDA layout. The infrastructure quality exceeded my expectations.", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" 
  },
  { 
    name: "Suresh Kumar", 
    role: "NRI Investor, California", 
    rating: 5, 
    text: "Being overseas, I was worried about developing my family land. Dream Home's team sent regular video updates and handled everything professionally. Highly recommend!", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" 
  },
  { 
    name: "Padma Devi", 
    role: "Landowner, Chevella", 
    rating: 5, 
    text: "They converted our family farm into weekend retreat plots. The bore well, fencing, and road work was done perfectly. We sold all plots within 6 months!", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150" 
  },
];

// FAQs Data
export const faqsData = [
  { 
    question: "What is HMDA and DTCP? Which is better?", 
    answer: "HMDA (Hyderabad Metropolitan Development Authority) covers areas within Greater Hyderabad limits, offering highest credibility and bank loan approvals. DTCP (Directorate of Town & Country Planning) applies to areas outside HMDA, typically in panchayat zones. Both are legally valid - HMDA commands premium pricing while DTCP offers better appreciation potential in emerging areas." 
  },
  { 
    question: "How long does layout development take?", 
    answer: "HMDA layouts typically take 6-12 months including approvals and infrastructure. DTCP layouts take 4-8 months. Farm layouts are fastest at 2-4 months. Timeline depends on land size, location, and approval complexity." 
  },
  { 
    question: "What documents do I need to provide?", 
    answer: "You'll need: Original sale deed, Encumbrance certificate (last 30 years), Pattadar passbook, Mutation documents, Land survey documents, and Any existing NOCs. We verify everything and guide you through any missing documentation." 
  },
  { 
    question: "Do you handle all government approvals?", 
    answer: "Yes, absolutely! We handle 100% of the approval process - from initial applications to HMDA/DTCP liaisons to final layout sanctioning. You don't need to visit any government office. We have a dedicated regulatory team for this." 
  },
  { 
    question: "What if my land has legal issues?", 
    answer: "Before starting any project, our legal team conducts thorough due diligence. If issues exist, we'll advise on resolution options. We only proceed with development after ensuring completely clear titles." 
  },
  { 
    question: "How do you charge for development?", 
    answer: "We work on flexible models - either fixed project fee or revenue sharing arrangement. Contact us for a free land evaluation and we'll propose the best model for your specific property." 
  },
];
