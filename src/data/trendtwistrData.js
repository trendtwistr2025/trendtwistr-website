// Note: We no longer import the icon components directly in this data file.
// We will handle the icons in the components that use them.

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
    iconName: 'Target', // We use a string name for the icon
    color: "#f87d39", 
    description: "From SEO and content creation to social media management and PPC campaigns, we drive measurable results.",
    detailedDescription: "Our comprehensive digital marketing services include SEO optimization, content strategy and creation, social media marketing across all major platforms, targeted PPC advertising campaigns (Google Ads, Social Ads), email marketing automation, and in-depth analytics and reporting to track your success. We tailor our approach to your unique business goals to maximize ROI.",
    keyOfferings: [
        { iconName: 'Search', title: "SEO & SEM", description: "Increase your visibility on search engines and drive organic traffic." },
        { iconName: 'Megaphone', title: "PPC Advertising", description: "Targeted ad campaigns on Google and social media for immediate results." },
        { iconName: 'Share2', title: "Social Media Marketing", description: "Build and engage your community with compelling content and strategies." },
        { iconName: 'MailIcon', title: "Email Marketing", description: "Nurture leads and retain customers with effective email automation." },
    ],
    image: `https://placehold.co/600x400/f87d39/FFFFFF?text=Digital+Marketing`,
  },
  { 
    id: 'accounting', 
    title: "Accounting Services", 
    tagline: "Precision, Clarity, Financial Peace of Mind.", 
    iconName: 'DollarSign',
    color: "#2B267F", 
    description: "We offer everything from bookkeeping and payroll to financial reporting and tax preparation, ensuring accuracy.",
    detailedDescription: "Trendtwistr provides meticulous accounting solutions including comprehensive bookkeeping, payroll processing, financial statement preparation, tax planning and preparation, budgeting, and advisory services.",
    keyOfferings: [
        { iconName: 'BookUser', title: "Bookkeeping & Payroll", description: "Accurate and timely bookkeeping and payroll services." },
        { iconName: 'FileText', title: "Financial Reporting", description: "Clear and insightful financial reports for decision making." },
        { iconName: 'Calculator', title: "Tax Preparation", description: "Expert tax preparation and planning to maximize returns." },
        { iconName: 'Lightbulb', title: "Advisory Services", description: "Strategic financial advice to guide your business growth." },
    ],
    image: `https://placehold.co/600x400/2B267F/FFFFFF?text=Accounting`,
  },
  { 
    id: 'recruitment', 
    title: "Recruitment Solutions", 
    tagline: "Connecting Talent with Opportunity.", 
    iconName: 'Users',
    color: "#34D399", 
    description: "Find the perfect fit for your team with our specialized recruitment services, streamlining your hiring process.",
    detailedDescription: "Our recruitment services cover the full hiring lifecycle, from understanding your company culture to candidate sourcing, screening, interview coordination, offer negotiation, and onboarding support.",
    keyOfferings: [
        { iconName: 'UserSearch', title: "Talent Sourcing", description: "Finding the best candidates using advanced sourcing techniques." },
        { iconName: 'ClipboardUser', title: "Candidate Screening", description: "Thorough screening to ensure the perfect fit for your team." },
        { iconName: 'Presentation', title: "Interview Management", description: "Coordinating and managing the entire interview process." },
        { iconName: 'Briefcase', title: "Executive Search", description: "Finding top-tier leadership and executive talent." },
    ],
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
  { id: 1, rating: 5, name: "Alex Johnson", company: "Tech Solutions Ltd.", quote: "Trendtwistr's digital marketing strategy skyrocketed our online engagement. Highly recommended!", image: "https://placehold.co/100x100/F87D39/FFFFFF?text=AJ" },
  { id: 2, rating: 5, name: "Sarah Miller", company: "GreenLeaf Co.", quote: "Their accounting team is meticulous and incredibly knowledgeable. They've streamlined our finances perfectly.", image: "https://placehold.co/100x100/2B267F/FFFFFF?text=SM" },
  { id: 3, rating: 5, name: "David Chen", company: "Innovate Staffing", quote: "Finding the right talent was challenging until we partnered with Trendtwistr. Their recruitment process is top-notch.", image: "https://placehold.co/100x100/34D399/FFFFFF?text=DC" },
];

export const mockTeamMembers = [
  { id: 1, name: "Mr. Patel Maheshkumar", role: "Founder & CEO", image: `https://placehold.co/300x300/2B267F/FFFFFF?text=PM`, bio: "With over 20 years in business strategy, Mr. Maheshkumar's vision is to offer integrated solutions that drive real growth." },
  { id: 2, name: "Mr. Patel Mihirkumar", role: "Head of Operations", image: `https://placehold.co/300x300/f87d39/FFFFFF?text=PM`, bio: "Mr. Mihirkumar ensures every project is meticulously planned and executed with an unwavering dedication to quality and client success." },
  { id: 3, name: "Rohan Desai", role: "Senior Digital Strategist", image: `https://placehold.co/300x300/2c3e50/ffffff?text=RD`, bio: "Rohan's vast knowledge of digital trends and his knack for understanding client needs make him a sought-after consultant." },
];

export const whyChooseUsItems = [
    { iconName: 'Lightbulb', title: "Innovative Strategies", description: "Cutting-edge solutions tailored to your unique business needs." },
    { iconName: 'ShieldCheck', title: "Reliable Expertise", description: "A team of seasoned professionals dedicated to your success." },
    { iconName: 'TrendingUp', title: "Results-Driven", description: "Focused on delivering measurable growth and tangible outcomes." },
    { iconName: 'Users', title: "Client-Centric Approach", description: "Your goals are our priority; we partner with you every step." },
];

export const mockFaqs = [
    { 
      id: 1, 
      question: "What types of businesses do you work with?", 
      answer: "We work with a diverse range of clients, from startups and small businesses to established enterprises across various industries. Our solutions are scalable and tailored to meet your specific business goals, regardless of your company's size." 
    },
    { 
      id: 2, 
      question: "How do you measure the success of a digital marketing campaign?", 
      answer: "Success is measured using key performance indicators (KPIs) relevant to your goals, such as website traffic, conversion rates, lead generation, keyword rankings, and return on investment (ROI). We provide regular, detailed reports to keep you informed of our progress." 
    },
    { 
      id: 3, 
      question: "What is the process for getting started with your services?", 
      answer: "The first step is to schedule a free consultation through our contact form. We'll discuss your needs, goals, and challenges to determine how we can best help. From there, we'll develop a customized proposal and plan of action for your business." 
    },
];

export const ourProcessSteps = [
  {
    iconName: 'Presentation',
    title: "1. Discovery & Strategy",
    description: "We start by understanding your business, goals, and challenges to craft a tailored strategy for success."
  },
  {
    iconName: 'Target',
    title: "2. Execution & Implementation",
    description: "Our expert team gets to work, implementing the strategy with precision and creativity to achieve your objectives."
  },
  {
    iconName: 'Bot',
    title: "3. Monitoring & Optimization",
    description: "We continuously monitor performance, using data to refine our approach and maximize your results."
  },
  {
    iconName: 'Star',
    title: "4. Reporting & Growth",
    description: "You receive transparent, detailed reports, and we collaborate on the next steps for your continued growth."
  }
];

export const companyStats = [
  { id: 1, endValue: 150, suffix: "+", label: "Happy Clients" },
  { id: 2, endValue: 500, suffix: "+", label: "Projects Completed" },
  { id: 3, endValue: 98, suffix: "%", label: "Client Retention" },
  { id: 4, endValue: 10, suffix: "+", label: "Years of Experience" }
];
