import { 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  Globe, 
  Plane, 
  CheckCircle, 
  Users, 
  ShieldCheck, 
  Search, 
  FileText, 
  Award,
  BookOpen,
  Headphones,
  Compass,
  Gavel,
  Home
} from 'lucide-react';

export const COLORS = {
  royalBlue: '#002366',
  deepNavy: '#001a33',
  silver: '#C0C0C0',
  gold: '#D4AF37',
  white: '#FFFFFF',
};

export const HERO_CONTENT = {
  heading: "Find Every Solution, From Applications to Accommodations",
  subheading: "WINGSIR-ABROAD LLP is a Delhi-headquartered overseas education and visa support firm helping students study in the USA, Canada, UK, Australia, and Europe with trusted counselling, visa guidance, and global admission support.",
  ctas: [
    { label: "Start Your Study Abroad Journey", href: "#", primary: true },
    { label: "Free Counselling", href: "#", primary: false },
    { label: "Book Visa Consultation", href: "#", primary: false },
  ],
  floatingCards: [
    { title: "USA Admissions", icon: "🇺🇸" },
    { title: "Canada Study Visa", icon: "🇨🇦" },
    { title: "UK Universities", icon: "🇬🇧" },
    { title: "Australia PR Pathways", icon: "🇦🇺" },
    { title: "Europe Study Programs", icon: "🇪🇺" },
  ]
};

export const ABOUT_CONTENT = {
  title: "Empowering Your Global Ambitions",
  description: "WINGSIR-ABROAD LLP has its head office in Delhi with branches in Faridabad and Agra, providing easy access to expert study abroad counselling across NCR. Our counsellors are UK agent and counsellor training certificate awardees, ensuring ethical and professional guidance for every student.",
  additionalInfo: [
    "Backed by a Toronto-based attorney firm, we provide legal-strength support for Canadian study permits and immigration procedures.",
    "Through ApplyBoard, KC Overseas Education, Adventus.io, and StudyReach.com, students gain access to thousands of international programs under one trusted platform.",
    "Our team combines Canadian and Indian attorneys, experienced educationists, IT professionals, and social workers dedicated to student success."
  ],
  counters: [
    { label: "Students Guided", value: 1000, suffix: "+" },
    { label: "Visa Successes", value: 500, suffix: "+" },
    { label: "Global University Network", value: 5000, suffix: "+" },
    { label: "Countries Served", value: 40, suffix: "+" },
  ]
};

export const SERVICES = [
  { title: "Study Abroad Counselling", description: "Expert guidance to find the perfect fit for your career and goals.", icon: GraduationCap },
  { title: "University Selection", description: "Helping you choose from top-ranked global universities.", icon: Search },
  { title: "Admission Assistance", description: "Step-by-step support for your application and enrollment.", icon: CheckCircle },
  { title: "Scholarship Guidance", description: "Finding the best financial aid and scholarship options.", icon: Award },
  { title: "SOP & Documentation", description: "Crafting a compelling Statement of Purpose and managing paperwork.", icon: FileText },
  { title: "Student Visa Assistance", description: "End-to-end support for a hassle-free visa application process.", icon: ShieldCheck },
  { title: "Canada Immigration Support", description: "Legal-strength guidance for Canadian permits and PR.", icon: Gavel }, // Added Gavel icon conceptually
  { title: "Accommodation Assistance", description: "Helping you find a safe and comfortable home abroad.", icon: Home },
  { title: "Airport Pickup Guidance", description: "Ensuring a smooth transition from arrival to campus.", icon: Plane },
  { title: "Career Pathway Planning", description: "Strategic planning for your long-term professional growth.", icon: Compass },
];

export const COUNTRIES = [
  { name: "USA", flag: "🇺🇸", imagery: "https://picsum.photos/seed/usa/800/600", courses: "STEM, MBA, Law" },
  { name: "Canada", flag: "🇨🇦", imagery: "https://picsum.photos/seed/canada/800/600", courses: "IT, Healthcare, Engineering" },
  { name: "United Kingdom", flag: "🇬🇧", imagery: "https://picsum.photos/seed/uk/800/600", courses: "Finance, Arts, Management" },
  { name: "Australia", flag: "🇦🇺", imagery: "https://picsum.photos/seed/australia/800/600", courses: "Nursing, Business, Education" },
  { name: "Germany", flag: "🇩🇪", imagery: "https://picsum.photos/seed/germany/800/600", courses: "Automotive, Tech, Science" },
  { name: "France", flag: "🇫🇷", imagery: "https://picsum.photos/seed/france/800/600", courses: "Luxury, Culinary, Business" },
  { name: "Europe", flag: "🇪🇺", imagery: "https://picsum.photos/seed/europe/800/600", courses: "Diplomacy, Design, History" },
];

export const PARTNERS = [
  "ApplyBoard",
  "KC Overseas Education",
  "Adventus.io",
  "StudyReach.com",
];

export const TEAM_MEMBERS = [
  {
    name: "R.K. SHARMA",
    designation: "Managing Director",
    image: "/input_file_7.png",
    description: "A highly respected academician and administrator with decades of educational experience. He guides all departments with wisdom, professionalism, and dedication toward student success."
  },
  {
    name: "S.K. SHARMA",
    designation: "Founder",
    image: "/input_file_2.png",
    description: "Visionary founder committed to creating accessible international education opportunities for Indian students through ethical counselling and trusted support systems."
  },
  {
    name: "MRS. ABHA SHARMA",
    designation: "CEO",
    image: "/input_file_0.png",
    description: "An inspiring leader managing operations, student success initiatives, and international coordination with professionalism and dedication."
  },
  {
    name: "B.S. KASTOORIYA",
    designation: "Legal Head India",
    image: "/input_file_4.png",
    description: "A senior advocate and legal expert guiding students and families with trusted legal assistance related to overseas education and documentation procedures."
  },
  {
    name: "MRS. SUREKHA BANGIA",
    designation: "Head Counsellor UK",
    image: "/input_file_5.png",
    description: "A UK-certified counselling expert helping students choose the right universities, courses, and career pathways with confidence."
  },
  {
    name: "VAISHALI SHARMA",
    designation: "Legal Advisor International",
    image: "/input_file_6.png",
    description: "Providing international legal and immigration guidance for students pursuing global education opportunities."
  },
  {
    name: "SARTHAK SHARMA",
    designation: "Head Global Career Pathways",
    image: "/input_file_3.png",
    description: "Helping students identify future-ready global career opportunities, international pathways, and long-term professional growth strategies."
  }
];

export const CONTACT_INFO = {
  numbers: ["+91 76-77-78-79-16", "+91 76-77-78-79-36", "+91 99999-44444", "+91 99999-43555"],
  emails: ["contact@wingsir-abroad.com", "info@wingsir-abroad.com"],
  locations: [
    { name: "Delhi Head Office", address: "New Delhi, India" },
    { name: "Faridabad Branch", address: "Faridabad, HR, India" },
    { name: "Agra Branch", address: "Agra, UP, India" }
  ]
};
