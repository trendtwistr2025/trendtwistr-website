// src/data/trendtwistrData.js

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
    iconName: 'Target',
    color: "#f87d39", 
    description: "From SEO and content creation to social media management and PPC campaigns, we drive measurable results.",
    detailedDescription: "Our comprehensive digital marketing services are designed to build your brand's online presence, drive targeted traffic, and convert visitors into loyal customers. We use a data-driven approach to ensure every action has a measurable impact on your business goals.",
    keyOfferings: [
        { id: 'graphic-design', iconName: 'Palette', title: "Graphic Design", description: "Stunning visuals and branding that capture attention and tell your story." },
        { id: 'website-development', iconName: 'LayoutTemplate', title: "Website Development", description: "User-friendly, responsive websites that convert visitors into customers." },
        { id: 'seo', iconName: 'Search', title: "SEO", description: "Increase your visibility on search engines and drive organic traffic." },
        { id: 'social-media-management', iconName: 'Share2', title: "Social Media Management", description: "Build and engage your community with compelling content and strategies." },
        { id: 'paid-advertising', iconName: 'Megaphone', title: "Paid Advertising", description: "Targeted ad campaigns on Google and social media for immediate results." },
        { id: 'email-marketing', iconName: 'MailIcon', title: "Email Marketing", description: "Nurture leads and retain customers with effective email automation." },
    ],
    image: `/assets/services/digital-marketing.jpg`,
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
    whyWeAreDifferent: [
        { number: "01", text: "Proactive Financial Strategy: We provide forward-looking financial advice to help you seize opportunities, not just report on the past." },
        { number: "02", text: "Technology-Driven Insights: We leverage modern accounting software to give you real-time, actionable insights into your business's financial health." },
        { number: "03", text: "Integrated Business View: Our accounting services connect with our other departments to ensure your financial plan supports your marketing and growth goals." },
    ],
    image: `/assets/services/accounting.jpg`,
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
        { iconName: 'ClipboardList', title: "Candidate Screening", description: "Thorough screening to ensure the perfect fit for your team." },
        { iconName: 'Presentation', title: "Interview Management", description: "Coordinating and managing the entire interview process." },
        { iconName: 'Briefcase', title: "Executive Search", description: "Finding top-tier leadership and executive talent." },
    ],
    whyWeAreDifferent: [
        { number: "01", text: "Focus on Cultural Fit: We go beyond resumes, using behavioral assessments to find candidates who will enrich your company culture." },
        { number: "02", text: "Data-Informed Hiring: Our process is backed by market data to ensure you make competitive offers for top-tier talent." },
        { number: "03", text: "Long-Term Partnership: We aim to be your long-term talent partner, understanding your evolving needs as your business grows." },
    ],
    image: `/assets/services/recruitment.jpg`,
  },
];

// DATA FOR THE UNIQUE DIGITAL MARKETING PAGE LAYOUT
export const digitalMarketingDetails = {
  whyWeAreDifferent: {
    title: "Why We Are Different",
    points: [
      {
        title: "Holistic Integration",
        description: "We merge marketing data with financial and recruitment insights for smarter strategies."
      },
      {
        title: "AI-Powered Analysis",
        description: "We use AI to forecast market trends and optimize your campaigns for future success."
      },
      {
        title: "Full-Funnel Mastery",
        description: "From awareness to conversion and loyalty, we manage every stage of the customer journey."
      },
      {
        title: "Focus on ROI",
        description: "Every action is data-driven and meticulously tracked to ensure a positive return on your investment."
      },
      {
        title: "Creative & Technical Blend",
        description: "Our team combines compelling creative with deep technical expertise in SEO and analytics."
      },
      {
        title: "Transparent Reporting",
        description: "You receive clear, custom dashboards and regular performance reviews with actionable insights."
      },
      {
        title: "Proactive Optimization",
        description: "We continuously monitor and refine campaigns, never settling for 'good enough'."
      },
      {
        title: "Sustainable Growth",
        description: "Our goal is to build you a resilient, long-term marketing ecosystem, not just short-term wins."
      }
    ]
  }
};

// DATA FOR DIGITAL MARKETING SUB-PAGES
export const digitalMarketingOfferingsDetails = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'We create compelling visuals that define your brand and captivate your audience.',
    detailedDescription: 'Our graphic design services are foundational to building a strong brand identity. We craft everything from logos and brand style guides to social media graphics and marketing collateral, ensuring a cohesive and professional look across all platforms.',
    points: [
      "Logo Design & Brand Identity",
      "Marketing & Advertising Graphics",
      "Social Media Content Visuals",
      "Brochures, Flyers, and Print Materials",
      "UI/UX Design for Web & Mobile",
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'We build fast, responsive, and conversion-focused websites.',
    detailedDescription: 'Your website is your digital storefront. We specialize in building custom websites that are not only visually stunning but also optimized for performance, user experience, and converting visitors into customers. We work with a variety of platforms including Shopify, WordPress, and custom builds.',
    points: [
      "Custom Website Design",
      "E-commerce & Shopify Stores",
      "Content Management Systems (CMS)",
      "Performance & Speed Optimization",
      "Website Maintenance & Support",
    ],
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'We improve your organic visibility to attract high-quality traffic from search engines.',
    detailedDescription: 'Search Engine Optimization is critical for long-term growth. Our team of experts focuses on a holistic SEO strategy that includes technical optimization, high-quality content creation, and authoritative link building to help you rank higher than your competitors.',
    points: [
      "Technical SEO Audits & Fixes",
      "Keyword Research & Content Strategy",
      "On-Page & Off-Page SEO",
      "Local SEO & Google Business Profile",
      "Analytics & Performance Tracking",
    ],
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    description: 'We build and engage your community with compelling content and strategies.',
    detailedDescription: 'We manage your social media presence across platforms like Facebook, Instagram, LinkedIn, and more. Our service includes content creation, scheduling, community engagement, and performance reporting to grow your following and build a loyal brand community.',
    points: [
      "Platform-Specific Content Strategy",
      "Content Creation & Scheduling",
      "Community Engagement & Moderation",
      "Social Media Advertising Campaigns",
      "Performance Analytics & Reporting",
    ],
  },
  {
    id: 'paid-advertising',
    title: 'Paid Advertising',
    description: 'We create and manage targeted ad campaigns that deliver immediate, measurable results.',
    detailedDescription: 'For rapid results and targeted reach, our PPC services are unmatched. We manage campaigns on Google Ads and all major social media platforms, focusing on optimizing your ad spend for the highest possible return on investment (ROI).',
    points: [
      "Google Ads (Search, Display, Shopping)",
      "Facebook & Instagram Ads",
      "LinkedIn B2B Advertising",
      "A/B Testing & Ad Copy Optimization",
      "Conversion Rate Optimization (CRO)",
    ],
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'We design and execute effective email campaigns to nurture leads and retain your existing customers.',
    detailedDescription: 'Email marketing remains one of the most effective digital channels. We help you build your email list and create automated nurturing sequences, promotional campaigns, and newsletters that keep your audience engaged and drive sales.',
    points: [
      "Email Campaign Strategy",
      "Marketing Automation & Workflows",
      "List Building & Segmentation",
      "Template Design & Copywriting",
      "Performance Tracking & A/B Testing",
    ],
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
  { id: 1, rating: 5, name: "Alex Johnson", company: "Tech Solutions Ltd.", quote: "Trendtwistr's digital marketing strategy skyrocketed our online engagement. Highly recommended!", image: "/assets/testimonials/aj.png" },
  { id: 2, rating: 5, name: "Sarah Miller", company: "GreenLeaf Co.", quote: "Their accounting team is meticulous and incredibly knowledgeable. They've streamlined our finances perfectly.", image: "/assets/testimonials/sm.png" },
  { id: 3, rating: 5, name: "David Chen", company: "Innovate Staffing", quote: "Finding the right talent was challenging until we partnered with Trendtwistr. Their recruitment process is top-notch.", image: "/assets/testimonials/dc.png" },
];

export const whyChooseUsItems = [
    { iconName: 'Lightbulb', title: "Innovative Strategies", description: "Cutting-edge solutions tailored to your unique business needs." },
    { iconName: 'ShieldCheck', title: "Reliable Expertise", description: "A team of seasoned professionals dedicated to your success." },
    { iconName: 'TrendingUp', title: "Results-Driven", description: "Focused on delivering measurable growth and tangible outcomes." },
    { iconName: 'Users', title: "Client-Centric Approach", description: "Your goals are our priority; we partner with you every step." },
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