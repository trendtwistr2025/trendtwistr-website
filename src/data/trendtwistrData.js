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
        { id: 'website-development', iconName: 'LayoutTemplate', title: "Website & App Development", description: "User-friendly, responsive websites that convert visitors into customers." },
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
        { number: "01", text: "Proactive Financial Strategy" },
        { number: "02", text: "Technology-Driven Insights" },
        { number: "03", text: "Integrated Business View" },
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
        { number: "01", text: "Focus on Cultural Fit" },
        { number: "02", text: "Data-Informed Hiring" },
        { number: "03", text: "Long-Term Partnership" },
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
    approach: {
      title: "Design Innovation at Your Fingertips",
      description: "Great design is about performance, utility, efficiency, and beauty. We combine these principles to create visuals that not only look stunning but also achieve your business objectives.",
      image: "/assets/services/graphic-design-approach.png"
    },
    motionSection: {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.",
      gifPath: "/assets/services/motion-graphic.gif"
    },
    providedServices: [
      { iconPath: '/assets/icons/logo-design.png', title: 'Logo Design' },
      { iconPath: '/assets/icons/brochure-design.png', title: 'Brochure Design' },
      { iconPath: '/assets/icons/product-branding.png', title: 'Product Branding' },
      { iconPath: '/assets/icons/email-signatures.png', title: 'Email Signatures Design' },
      { iconPath: '/assets/icons/flyer-banner.png', title: 'Flyer & Banner' },
      { iconPath: '/assets/icons/business-card.png', title: 'Business Card' },
      { iconPath: '/assets/icons/letterheads.png', title: 'Letterheads' },
      { iconPath: '/assets/icons/social-media.png', title: 'Social Media Post' },
      { iconPath: '/assets/icons/id-cards.png', title: 'ID Cards' },
      { iconPath: '/assets/icons/invitation-card.png', title: 'Invitation Card' },
      { iconPath: '/assets/icons/presentations.png', title: 'Presentations' },
      { iconPath: '/assets/icons/hoarding-poster.png', title: 'Hoarding and Poster' },
    ],
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
    title: 'Website & App Development',
    description: 'We build fast, responsive, and conversion-focused websites.',
    approach: {
      title: "Enabling Seamless Digital Experiences Through Stunning Websites & Mobile Apps",
      description: "Our expertise in website and mobile app development empowers you to deliver high-value, exceptional digital experiences to your customers helping your business thrive in the modern digital landscape.",
      image: "/assets/services/website-dev-approach.png" // This is the image you provided
    },
    ourProcess: [
        { 
            title: "1. Discovery & Planning", 
            description: "We start by understanding your vision, goals, and target audience to create a detailed project blueprint and strategy." 
        },
        { 
            title: "2. UI/UX Design", 
            description: "Our design team creates intuitive wireframes and stunning visual mockups that focus on user experience and brand identity." 
        },
        { 
            title: "3. Development & Coding", 
            description: "Our developers bring the designs to life with clean, efficient code, building a fast and responsive website." 
        },
        { 
            title: "4. Launch & Optimization", 
            description: "After rigorous testing, we deploy your website and monitor its performance to ensure continued success and optimization." 
        },
    ],

     // 👇 NEW SECTION DATA 👇
    motionSection: {
      title: "Dynamic Interfaces, Engaging Experiences",
      description: "We go beyond static pages by integrating motion and animation to create a more dynamic and engaging user experience. Smooth transitions and interactive elements capture attention and guide users through your site.",
      gifPath: "/assets/services/motion-graphic.gif" // Using the same GIF for this example
    },
     providedServices: [
      { iconPath: '/assets/icons/UIUX.png', title: 'UI/UX Design' },
      { iconPath: '/assets/icons/WebsiteDevlopment.png', title: 'Website Devopment' },
      { iconPath: '/assets/icons/E-Commerce.png', title: 'E-Commerce Devopment' },
      { iconPath: '/assets/icons/CRM.png', title: 'CRM & Analytics' },
      { iconPath: '/assets/icons/WebsiteMaintenance.png', title: 'Website Maintenance' },
      { iconPath: '/assets/icons/responsive.png', title: 'Responsive Design' },
      { iconPath: '/assets/icons/UIUX.png', title: 'Mobile App Devlopment' },
    ],
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
    // 👇 NEW SECTION DATA 👇
    approach: {
      title: "Climbing the Ranks to Reach Your Audience",
      description: "Effective SEO is a blend of art and science. We focus on building a strong technical foundation, creating authoritative content, and earning quality backlinks to establish your long-term organic success.",
      image: "/assets/services/seo-approach.png" // You'll need to save an image here
    },

        // 👇 NEW SECTION DATA 👇
    providedServices: [
      { iconPath: '/assets/icons/technical-seo.png', title: 'Technical SEO' },
      { iconPath: '/assets/icons/on-page-seo.png', title: 'On-Page SEO' },
      { iconPath: '/assets/icons/off-page-seo.png', title: 'Off-Page SEO' },
      { iconPath: '/assets/icons/local-seo.png', title: 'Local SEO' },
      { iconPath: '/assets/icons/ecommerce-seo.png', title: 'E-commerce SEO' },
      { iconPath: '/assets/icons/keyword-research.png', title: 'Keyword Research' },
    ],

    // 👇 NEW SECTION DATA 👇
    ourProcess: [
      { 
        title: "1. Technical Audit & Analysis", 
        description: "We conduct a deep dive into your website's technical health to identify and fix issues that hinder search engine ranking." 
      },
      { 
        title: "2. Keyword & Competitor Research", 
        description: "We identify high-value keywords and analyze your competition to create a data-driven strategy for success." 
      },
      { 
        title: "3. Content & On-Page Optimization", 
        description: "We create and optimize high-quality content that satisfies both search engines and your target audience." 
      },
      { 
        title: "4. Reporting & Continuous Growth", 
        description: "You receive clear monthly reports on your progress, and we continually refine our strategy to ensure long-term growth." 
      },
    ],
  caseStudies: [
        {
            client: "Global E-commerce Brand",
            result: "+150% Organic Traffic",
            description: "Overhauled their technical SEO and content strategy, leading to a massive increase in non-paid traffic in just 6 months.",
            image: "/assets/case-studies/ecommerce-traffic-graph.png" 
        },
        {
            client: "Local Service Provider",
            result: "#1 on Google Maps",
            description: "Dominated local search results by optimizing their Google Business Profile and local citations, driving a 200% increase in calls.",
            image: "/assets/case-studies/local-seo-ranking.png" 
        }
    ]
  },

  {
     id: 'social-media-management',
    title: 'Social Media Management',
    description: 'We build and engage your community with compelling content and strategies.',
    approach: {
      title: "Building Communities, Not Just Followings",
      description: "Our social media approach is centered on creating authentic connections. We develop a unique voice for your brand, foster meaningful engagement, and turn followers into loyal advocates through strategic content and community management.",
      image: "/assets/services/smm-approach.png" // You'll need to save an image here
    },
    providedServices: [
      { iconPath: '/assets/icons/smm-strategy.png', title: 'Content Strategy' },
      { iconPath: '/assets/icons/smm-creation.png', title: 'Content Creation' },
      { iconPath: '/assets/icons/smm-scheduling.png', title: 'Scheduling & Posting' },
      { iconPath: '/assets/icons/smm-community.png', title: 'Community Management' },
      { iconPath: '/assets/icons/smm-ads.png', title: 'Social Media Ads' },
      { iconPath: '/assets/icons/smm-analytics.png', title: 'Analytics & Reporting' },
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

// GRAPHIC DESIGN PORTFOLIO DATA
export const graphicDesignPortfolio = [
  { id: 1, title: "Corporate Branding Package 1", image: "/assets/portfolio/graphic-design/gd-1.jpg" },
  { id: 2, title: "Social Media Campaign Visuals 1", image: "/assets/portfolio/graphic-design/gd-2.jpg" },
  { id: 3, title: "Event Banner & Print Design 1", image: "/assets/portfolio/graphic-design/gd-3.jpg" },
  { id: 4, title: "Corporate Branding Package 2", image: "/assets/portfolio/graphic-design/gd-4.jpg" },
  { id: 5, title: "Social Media Campaign Visuals 2", image: "/assets/portfolio/graphic-design/gd-5.jpg" },
  { id: 6, title: "Event Banner & Print Design 2", image: "/assets/portfolio/graphic-design/gd-6.jpg" },
  { id: 7, title: "Corporate Branding Package 3", image: "/assets/portfolio/graphic-design/gd-7.jpg" },
  { id: 8, title: "Social Media Campaign Visuals 3", image: "/assets/portfolio/graphic-design/gd-8.jpg" },
  { id: 9, title: "Event Banner & Print Design 3", image: "/assets/portfolio/graphic-design/gd-9.jpg" },
  { id: 10, title: "Corporate Branding Package 4", image: "/assets/portfolio/graphic-design/gd-10.jpg" },
  { id: 11, title: "Social Media Campaign Visuals 4", image: "/assets/portfolio/graphic-design/gd-11.jpg" },
  { id: 12, title: "Event Banner & Print Design 4", image: "/assets/portfolio/graphic-design/gd-12.jpg" },
  { id: 13, title: "Corporate Branding Package 5", image: "/assets/portfolio/graphic-design/gd-13.jpg" },
  { id: 14, title: "Social Media Campaign Visuals 5", image: "/assets/portfolio/graphic-design/gd-14.jpg" },
  { id: 15, title: "Event Banner & Print Design 5", image: "/assets/portfolio/graphic-design/gd-15.jpg" },
  { id: 16, title: "Corporate Branding Package 6", image: "/assets/portfolio/graphic-design/gd-16.jpg" },
  { id: 17, title: "Social Media Campaign Visuals 6", image: "/assets/portfolio/graphic-design/gd-17.jpg" },
  { id: 18, title: "Event Banner & Print Design 6", image: "/assets/portfolio/graphic-design/gd-18.jpg" },
  { id: 19, title: "Corporate Branding Package 7", image: "/assets/portfolio/graphic-design/gd-19.jpg" },
  { id: 20, title: "Social Media Campaign Visuals 7", image: "/assets/portfolio/graphic-design/gd-20.jpg" },
  { id: 21, title: "Event Banner & Print Design 7", image: "/assets/portfolio/graphic-design/gd-21.jpg" },
  { id: 22, title: "Corporate Branding Package 8", image: "/assets/portfolio/graphic-design/gd-22.jpg" },
  { id: 23, title: "Social Media Campaign Visuals 8", image: "/assets/portfolio/graphic-design/gd-23.jpg" },
  { id: 24, title: "Event Banner & Print Design 8", image: "/assets/portfolio/graphic-design/gd-24.jpg" },
  { id: 25, title: "Corporate Branding Package 9", image: "/assets/portfolio/graphic-design/gd-25.jpg" },
];

export const companyInfo = {
  mission: "To help businesses grow by offering expert guidance in marketing, precise accounting, and strategic recruitment solutions all under one roof.",
  vision: "To be the leading partner for ambitious businesses seeking comprehensive growth solutions.",
  contact: { 
    phone: "+91 91574 15897", 
    email: "info@trendtwistr.com", 
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
// RENAMED and UPDATED for Website Development
export const websiteDevelopmentPortfolio = [
  { 
    id: 1, 
    title: "Live E-commerce Store", 
    liveUrl: "https://verticalinnovations.in/" // Replace with your live URL
  },
  { 
    id: 2, 
    title: "Corporate Business Website", 
    liveUrl: "https://startupsavera.com/" // Replace with your live URL
  },
  { 
    id: 3, 
    title: "Interactive Booking Platform", 
    liveUrl: "https://shivam.trendtwistr.com/" // Replace with your live URL
  },
];