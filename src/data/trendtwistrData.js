import { BarChart3, Briefcase, Users, Target, DollarSign, SearchCode, TrendingUp, MessageSquare, Settings, Phone, Mail, MapPin } from 'lucide-react';

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
    color: "#f87d39", // Primary color
    description: "Elevate your brand's online presence with our cutting-edge digital marketing strategies. From SEO and content creation to social media management and PPC campaigns, we drive measurable results.",
    detailedDescription: "Our comprehensive digital marketing services include SEO optimization, content strategy and creation, social media marketing across all major platforms, targeted PPC advertising campaigns (Google Ads, Social Ads), email marketing automation, and in-depth analytics and reporting to track your success. We tailor our approach to your unique business goals to maximize ROI.",
    keyOfferings: ["SEO & SEM", "Content Marketing", "Social Media Management", "PPC Advertising", "Email Marketing", "Analytics & Reporting"],
    image: `https://placehold.co/600x400/f87d39/FFFFFF?text=Digital+Marketing`,
  },
  {
    id: 'accounting',
    title: "Accounting Services",
    tagline: "Precision, Clarity, Financial Peace of Mind.",
    icon: DollarSign,
    color: "#2B267F", // Secondary color
    description: "Streamline your finances with our expert accounting services. We offer everything from bookkeeping and payroll to financial reporting and tax preparation, ensuring accuracy and compliance.",
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
    description: "Find the perfect fit for your team with our specialized recruitment services. We connect businesses with top-tier talent across various industries, streamlining your hiring process.",
    detailedDescription: "Our recruitment services cover the full hiring lifecycle, from understanding your company culture and role requirements to candidate sourcing and screening, interview coordination, offer negotiation, and onboarding support. We specialize in various sectors and utilize a vast network and advanced sourcing techniques to find exceptional candidates that align with your organizational needs.",
    keyOfferings: ["Talent Sourcing", "Candidate Screening", "Interview Management", "Executive Search", "Temporary & Permanent Staffing", "HR Consulting"],
    image: `https://placehold.co/600x400/34D399/FFFFFF?text=Recruitment`,
  },
];

export const companyInfo = {
  mission: "To empower businesses and individuals by providing innovative and results-driven digital marketing, precise accounting, and strategic recruitment solutions, fostering growth and success in a dynamic world.",
  vision: "To be the leading partner for businesses seeking comprehensive growth solutions, recognized for our expertise, integrity, and commitment to client success across digital, financial, and human capital domains.",
  values: [
    { title: "Innovation", description: "Constantly exploring new ideas and technologies." },
    { title: "Integrity", description: "Operating with transparency and honesty." },
    { title: "Client-Centricity", description: "Putting our clients' success first." },
    { title: "Excellence", description: "Striving for the highest quality in all we do." },
  ],
  contact: {
    phone: "+91 12345 67890",
    email: "info@trendtwistr.com",
    address: "123 Trendtwistr Ave, Business City, India",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260390091!2d106.81959641427381!3d-6.194741395514904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2c592472c7da0a!2sNational%20Monument%20(Monas)!5e0!3m2!1sen!2sid!4v1620813485938!5m2!1sen!2sid"
  },
  socialLinks: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  }
};

export const testimonials = [ 
  { id: 1, name: "Alex Johnson", company: "Tech Solutions Ltd.", quote: "Trendtwistr's digital marketing strategy skyrocketed our online engagement and lead generation. Highly recommended!", service: "Digital Marketing", image: "https://placehold.co/100x100/F87D39/FFFFFF?text=AJ" },
  { id: 2, name: "Sarah Miller", company: "GreenLeaf Accountants", quote: "Their accounting team is meticulous and incredibly knowledgeable. They've streamlined our finances perfectly.", service: "Accounting", image: "https://placehold.co/100x100/2B267F/FFFFFF?text=SM" },
  { id: 3, name: "David Chen", company: "Innovate Staffing", quote: "Finding the right talent was challenging until we partnered with Trendtwistr. Their recruitment process is top-notch.", service: "Recruitment", image: "https://placehold.co/100x100/34D399/FFFFFF?text=DC" },
];