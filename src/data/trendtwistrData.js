import { Target, DollarSign, Users, Lightbulb, ShieldCheck, TrendingUp } from 'lucide-react';

export const companyName = "Trendtwistr";

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
];

export const services = [
  { 
    id: 'digital-marketing', 
    title: "Digital Marketing", 
    tagline: "Amplify Your Reach, Ignite Growth.", 
    icon: Target, 
    color: "#f87d39", 
    description: "From SEO and content creation to social media management and PPC campaigns, we drive measurable results.",
    detailedDescription: "Our comprehensive digital marketing services include SEO optimization, content strategy and creation, social media marketing across all major platforms, targeted PPC advertising campaigns (Google Ads, Social Ads), email marketing automation, and in-depth analytics and reporting to track your success. We tailor our approach to your unique business goals to maximize ROI.",
    keyOfferings: ["SEO & SEM", "Content Marketing", "Social Media Management", "PPC Advertising", "Email Marketing", "Analytics & Reporting"],
    image: `https://placehold.co/600x400/f87d39/FFFFFF?text=Digital+Marketing`,
  },
  { 
    id: 'accounting', 
    title: "Accounting Services", 
    tagline: "Precision, Clarity, Financial Peace of Mind.", 
    icon: DollarSign, 
    color: "#2B267F", 
    description: "We offer everything from bookkeeping and payroll to financial reporting and tax preparation, ensuring accuracy.",
    detailedDescription: "Trendtwistr provides meticulous accounting solutions including comprehensive bookkeeping, payroll processing, financial statement preparation (Balance Sheet, Income Statement, Cash Flow), tax planning and preparation for businesses and individuals, budgeting and forecasting, and advisory services to help you make informed financial decisions. We leverage modern accounting software for efficiency and accuracy.",
    keyOfferings: ["Bookkeeping & Payroll", "Financial Reporting", "Tax Preparation & Planning", "Budgeting & Forecasting", "Cloud Accounting", "Advisory Services"],
    image: `https://placehold.co/600x400/2B267F/FFFFFF?text=Accounting`,
  },
  { 
    id: 'recruitment', 
    title: "Recruitment Solutions", 
    tagline: "Connecting Talent with Opportunity.", 
    icon: Users, 
    color: "#34D399", 
    description: "Find the perfect fit for your team with our specialized recruitment services, streamlining your hiring process.",
    detailedDescription: "Our recruitment services cover the full hiring lifecycle, from understanding your company culture and role requirements to candidate sourcing and screening, interview coordination, offer negotiation, and onboarding support. We specialize in various sectors and utilize a vast network and advanced sourcing techniques to find exceptional candidates that align with your organizational needs.",
    keyOfferings: ["Talent Sourcing", "Candidate Screening", "Interview Management", "Executive Search", "Temporary & Permanent Staffing", "HR Consulting"],
    image: `https://placehold.co/600x400/34D399/FFFFFF?text=Recruitment`,
  },
];

export const companyInfo = {
  mission: "To empower businesses by providing innovative digital marketing, precise accounting, and strategic recruitment solutions, fostering growth in a dynamic world.",
  vision: "To be the leading partner for businesses seeking comprehensive growth solutions, recognized for our expertise, integrity, and commitment to client success.",
  contact: { 
    phone: "+91 91574 15897", 
    email: "trendtwistr@gmail.com", 
    address: "Ahmedabad, Gujarat, India" 
  },
  socialLinks: { 
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  }
};

export const testimonials = [
  { id: 1, rating: 5, name: "Alex Johnson", company: "Tech Solutions Ltd.", quote: "Trendtwistr's digital marketing strategy skyrocketed our online engagement and lead generation. Highly recommended!", image: "https://placehold.co/100x100/F87D39/FFFFFF?text=AJ" },
  { id: 2, rating: 5, name: "Sarah Miller", company: "GreenLeaf Co.", quote: "Their accounting team is meticulous and incredibly knowledgeable. They've streamlined our finances perfectly.", image: "https://placehold.co/100x100/2B267F/FFFFFF?text=SM" },
  { id: 3, rating: 5, name: "David Chen", company: "Innovate Staffing", quote: "Finding the right talent was challenging until we partnered with Trendtwistr. Their recruitment process is top-notch.", image: "https://placehold.co/100x100/34D399/FFFFFF?text=DC" },
];

export const mockTeamMembers = [
  { id: 1, name: "Mr. Patel Maheshkumar", role: "Founder & CEO", image: `https://placehold.co/300x300/2B267F/FFFFFF?text=PM`, bio: "With over 20 years in business strategy, Mr. Maheshkumar's vision is to offer integrated solutions that drive real growth." },
  { id: 2, name: "Mr. Patel Mihirkumar", role: "Head of Operations", image: `https://placehold.co/300x300/f87d39/FFFFFF?text=PM`, bio: "Mr. Mihirkumar ensures every project is meticulously planned and executed with an unwavering dedication to quality and client success." },
  { id: 3, name: "Rohan Desai", role: "Senior Digital Strategist", image: `https://placehold.co/300x300/2c3e50/ffffff?text=RD`, bio: "Rohan's vast knowledge of digital trends and his knack for understanding client needs make him a sought-after consultant." },
];

// --- THIS WAS THE MISSING PART ---
export const whyChooseUsItems = [
    { icon: Lightbulb, title: "Innovative Strategies", description: "Cutting-edge solutions tailored to your unique business needs." },
    { icon: ShieldCheck, title: "Reliable Expertise", description: "A team of seasoned professionals dedicated to your success." },
    { icon: TrendingUp, title: "Results-Driven", description: "Focused on delivering measurable growth and tangible outcomes." },
    { icon: Users, title: "Client-Centric Approach", description: "Your goals are our priority; we partner with you every step." },
];
