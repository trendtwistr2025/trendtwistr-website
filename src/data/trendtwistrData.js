// src/data/trendtwistrData.js

export const companyName = "Trendtwistr";

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    // 👇 NEW SUBMENU DATA 👇
    subMenu: [
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
      { name: 'Accounting', href: '/services/accounting' },
      { name: 'Recruitment', href: '/services/recruitment' },
    ]
  },
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
    //image: `/assets/services/digital-marketing.jpg`,
    image:'https://placehold.co/600x400/f87d39/FFFFFF?text=Digital+Marketing'
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
      { id: 'bookkeeping-payroll', iconName: 'BookUser', title: "Bookkeeping & Payroll", description: "Accurate and timely bookkeeping and payroll services." },
      { id: 'financial-reporting', iconName: 'FileText', title: "Financial Reporting", description: "Clear and insightful financial reports for decision making." },
      { id: 'tax-preparation', iconName: 'Calculator', title: "Tax Preparation", description: "Expert tax preparation and planning to maximize returns." },
      { id: 'advisory-services', iconName: 'Lightbulb', title: "Advisory Services", description: "Strategic financial advice to guide your business growth." },
  ],
   whyWeAreDifferent: [
        { number: "01", text: "Proactive Financial Strategy" },
        { number: "02", text: "Technology-Driven Insights" },
        { number: "03", text: "Integrated Business View" },
    ],
    //image: `/assets/services/accounting.jpg`,
    image:'https://placehold.co/600x400/2B267F/FFFFFF?text=Accounting+Services'
  },
  { 
    id: 'recruitment', 
    title: "Recruitment Solutions", 
    tagline: "Connecting Talent with Opportunity.", 
    iconName: 'Users',
    color: "#2B267F", 
    description: "Find the perfect fit for your team with our specialized recruitment services, streamlining your hiring process.",
    detailedDescription: "Our recruitment services cover the full hiring lifecycle, from understanding your company culture to candidate sourcing, screening, interview coordination, offer negotiation, and onboarding support.",
    keyOfferings: [
        { id: 'talent-sourcing', iconName: 'UserSearch', title: "Talent Sourcing", description: "Finding the best candidates using advanced sourcing techniques." },
        { id: 'candidate-screening', iconName: 'ClipboardList', title: "Candidate Screening", description: "Thorough screening to ensure the perfect fit for your team." },
        { id: 'interview-management', iconName: 'Presentation', title: "Interview Management", description: "Coordinating and managing the entire interview process." },
        { id: 'executive-search', iconName: 'Briefcase', title: "Executive Search", description: "Finding top-tier leadership and executive talent." },
    ],
     whyWeAreDifferent: [
        { number: "01", text: "Focus on Cultural Fit" },
        { number: "02", text: "Data-Informed Hiring" },
        { number: "03", text: "Long-Term Partnership" },
    ],
    //image: `/assets/services/recruitment.jpg`,
    image:'https://placehold.co/600x400/2B267F/FFFFFF?text=Recruitment+Solutions'
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
     // 👇 NEW SECTION DATA 👇
    motionSection: {
      title: "Content That Stops the Scroll",
      description: "In a fast-moving feed, static images aren't enough. We specialize in creating eye-catching motion graphics, short-form videos, and animated stories that capture attention and drive engagement.",
      gifPath: "/assets/services/motion-graphic.gif" // Using the same GIF for this example
    },
  },
  {
    id: 'paid-advertising',
    title: 'Paid Advertising (PPC)',
    description: 'We create and manage targeted ad campaigns that deliver immediate, measurable results.',
    approach: {
      title: "Driving High-Intent Traffic, Instantly",
      description: "Our approach to Paid Advertising is rooted in precision and optimization. We focus on getting your brand in front of the right audience at the exact moment they're ready to convert, ensuring every ad dollar works as hard as possible for your business.",
      image: "/assets/services/ppc-approach.png" // You'll need to save an image here
    },
    providedServices: [
      { iconPath: '/assets/icons/ppc-google-ads.png', title: 'Google Ads' },
      { iconPath: '/assets/icons/ppc-social-ads.png', title: 'Social Media Ads' },
      { iconPath: '/assets/icons/ppc-display-ads.png', title: 'Display Advertising' },
      { iconPath: '/assets/icons/ppc-shopping-ads.png', title: 'Shopping Ads' },
      { iconPath: '/assets/icons/ppc-remarketing.png', title: 'Remarketing' },
      { iconPath: '/assets/icons/ppc-analytics.png', title: 'Campaign Analytics' },
    ],
     ourProcess: [
        { 
            title: "1. Strategy & Research", 
            description: "We analyze your audience and competitors to develop a targeted ad strategy that maximizes your budget and reach." 
        },
        { 
            title: "2. Campaign Setup & Creation", 
            description: "We set up your campaigns, write compelling ad copy, and create eye-catching visuals to drive clicks and conversions." 
        },
        { 
            title: "3. Monitoring & A/B Testing", 
            description: "We continuously monitor campaign performance, A/B test ad variations, and optimize for the best possible results." 
        },
        { 
            title: "4. Reporting & Scaling", 
            description: "You receive transparent reports on your ad spend and ROI, with clear recommendations for scaling your success." 
        },
    ],
     platforms: [
        { 
            iconPath: '/assets/icons/platform-google.png', 
            title: "Google Ads" 
        },
        { 
            iconPath: '/assets/icons/platform-meta.png', 
            title: "Meta Ads" 
        },
        { 
            iconPath: '/assets/icons/platform-linkedin.png', 
            title: "LinkedIn Ads" 
        },
    ],
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'We design and execute effective email campaigns to nurture leads and retain your existing customers.',
    approach: {
      title: "Building Relationships, One Email at a Time",
      description: "Our email marketing strategy focuses on delivering the right message to the right person at the right time. We build automated workflows and personalized campaigns that nurture leads, drive conversions, and foster long-term customer loyalty.",
      image: "/assets/services/email-approach.png" // You'll need to save an image here
    },
    providedServices: [
      { iconPath: '/assets/icons/email-strategy.png', title: 'Campaign Strategy' },
      { iconPath: '/assets/icons/email-automation.png', title: 'Marketing Automation' },
      { iconPath: '/assets/icons/email-list.png', title: 'List Building' },
      { iconPath: '/assets/icons/email-template.png', title: 'Template Design' },
      { iconPath: '/assets/icons/email-copywriting.png', title: 'Copywriting' },
      { iconPath: '/assets/icons/email-analytics.png', title: 'Performance Analytics' },
    ],
    ourProcess: [
        { 
            title: "1. Strategy & Segmentation", 
            description: "We start by understanding your audience and segmenting your email list to deliver highly targeted messages." 
        },
        { 
            title: "2. Content & Design", 
            description: "We create compelling copy and design beautiful, mobile-responsive email templates that reflect your brand." 
        },
        { 
            title: "3. Automation & Drip Campaigns", 
            description: "We build automated email sequences to nurture new leads, welcome new customers, and re-engage inactive subscribers." 
        },
        { 
            title: "4. Reporting & Optimization", 
            description: "You receive clear reports on open rates, click-through rates, and conversions, and we continuously optimize for better results." 
        },
    ],
    platforms: [
        { 
            iconPath: '/assets/icons/platform-mailchimp.png', 
            title: "Mailchimp" 
        },
        { 
            iconPath: '/assets/icons/platform-klaviyo.png', 
            title: "Klaviyo" 
        },
        { 
            iconPath: '/assets/icons/platform-hubspot.png', 
            title: "HubSpot" 
        },
        { 
            iconPath: '/assets/icons/platform-sendinblue.png', 
            title: "Brevo (Sendinblue)" 
        },
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
    facebook: "facebook.com/profile.php?id=61559019904962",
    twitter: "x.com/Trendtwist32886",
    linkedin: "linkedin.com/company/trendtwistr",
    instagram: "https://www.instagram.com/trendtwistr",
    youtube: "http://www.youtube.com/@Trendtwistr",
    pinterest: "in.pinterest.com/trendtwistr"
  }
};

export const testimonials = [
  { id: 1, rating: 5, name: "Alex Johnson", company: "Tech Solutions Ltd.", quote: "Trendtwistr's digital marketing strategy skyrocketed our online engagement. Highly recommended!", image: "https://placehold.co/600x400/f87d39/FFFFFF?text=A" },
  { id: 2, rating: 5, name: "Sarah Miller", company: "GreenLeaf Co.", quote: "Their accounting team is meticulous and incredibly knowledgeable. They've streamlined our finances perfectly.", image: "https://placehold.co/600x400/f87d39/FFFFFF?text=S" },
  { id: 3, rating: 5, name: "David Chen", company: "Innovate Staffing", quote: "Finding the right talent was challenging until we partnered with Trendtwistr. Their recruitment process is top-notch.", image: "https://placehold.co/600x400/f87d39/FFFFFF?text=D" },
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

// NEW PORTFOLIO DATA FOR SOCIAL MEDIA
export const socialMediaPortfolio = [
  { id: 1, title: "Instagram Campaign - 'Vivid Colors'", image: "/assets/portfolio/social-media/sm-1.jpg" },
  { id: 2, title: "Facebook Ad Creative - 'Summer Sale'", image: "/assets/portfolio/social-media/sm-2.jpg" },
  { id: 3, title: "LinkedIn Engagement Post", image: "/assets/portfolio/social-media/sm-3.jpg" },
  { id: 4, title: "Twitter Infographic Series", image: "/assets/portfolio/social-media/sm-4.jpg" },
  { id: 5, title: "Instagram Story Highlight", image: "/assets/portfolio/social-media/sm-5.jpg" },
];

export const accountingOfferingsDetails = [
  {
    id: 'bookkeeping-payroll',
    title: 'Bookkeeping & Payroll',
    description: 'Streamline your finances and ensure your team is paid on time, every time. We handle the complex details so you can focus on your business.',
    // 👇 NEW, SIMPLIFIED MAIN CONTENT 👇
    mainContent: {
      image: '/assets/services/bookkeeping-payroll-main.jpg',
      title: 'Clarity and Confidence in Your Finances',
      intro: "Stop spending valuable time on tedious bookkeeping and complex payroll. Our expert team provides meticulous, reliable financial services, giving you the clarity and peace of mind you need to focus on what you do best: growing your business."
    },
    points: [
      "Daily Transaction Recording",
      "Bank and Credit Card Reconciliation",
      "Payroll Processing and Tax Filings",
      "Accounts Payable and Receivable Management",
    ],
    ourProcess: [
        { 
            title: "1. Data Collection", 
            description: "We securely gather all your financial documents, including bank statements, invoices, and receipts." 
        },
        { 
            title: "2. Recording & Reconciliation", 
            description: "Every transaction is accurately recorded and reconciled to ensure your books are always up-to-date." 
        },
        { 
            title: "3. Payroll Execution", 
            description: "We process your payroll on time, handle tax withholdings, and ensure compliance with all regulations." 
        },
        { 
            title: "4. Reporting & Review", 
            description: "You receive clear, concise financial reports, and we schedule regular reviews to discuss your business's health." 
        },
    ],
    whyChooseUs: [
        { 
            title: "Save Time & Reduce Stress", 
            description: "We handle the complex financial tasks so you can focus on running and growing your business." 
        },
        { 
            title: "Ensure Accuracy & Compliance", 
            description: "Our meticulous approach guarantees your books are always accurate and compliant with the latest tax laws." 
        },
        { 
            title: "Gain Financial Clarity", 
            description: "Receive easy-to-understand financial reports that empower you to make smarter, data-driven decisions." 
        },
    ]
  },
  {
     id: 'financial-reporting',
    title: 'Financial Reporting',
    description: 'We provide clear and insightful financial statements for confident business decision-making.',
    // 👇 NEW DETAILED CONTENT 👇
    mainContent: {
      image: '/assets/services/financial-reporting-main.jpg', // You will need to add this image
      title: 'Transforming Data into Strategic Insight',
      intro: 'Go beyond raw numbers. Our financial reporting services translate complex data into clear, actionable insights, providing you with a comprehensive understanding of your company\'s performance and potential.'
    },
    points: [
      "Monthly, Quarterly, and Annual Reports",
      "Income Statement (P&L) Analysis",
      "Balance Sheet Preparation",
      "Cash Flow Statement Analysis",
      "Custom Performance Dashboards",
      "Budget vs. Actual Variance Reporting",
    ],
    whyItMatters: [
        { 
            title: "Strategic Decision-Making", 
            description: "Empower your leadership with data-driven insights to steer your business toward growth and profitability." 
        },
        { 
            title: "Investor & Stakeholder Confidence", 
            description: "Build trust with professional, transparent financial statements that clearly communicate your company's performance." 
        },
        { 
            title: "Compliance & Peace of Mind", 
            description: "Rest easy knowing your reports are accurate and compliant with all regulations for audits or tax filings." 
        },
    ]
  },
  {
     id: 'tax-preparation',
    title: 'Tax Preparation',
    description: 'Expert tax preparation and strategic planning to minimize liabilities and maximize your returns.',
    mainContent: {
      image: '/assets/services/tax-preparation-main.jpg',
      title: 'Navigate Tax Season with Confidence',
      intro: 'Tax preparation can be complex and stressful. Our expert team handles everything from meticulous preparation to strategic planning, ensuring you remain compliant while minimizing your tax burden and maximizing potential returns.'
    },
    points: [
      "Individual & Corporate Tax Filings",
      "GST/VAT Return Preparation & Filing",
      "Strategic Tax Planning & Advisory",
      "Audit Support & Representation",
      "TDS Compliance & Filing",
      "Year-Round Tax Support",
    ],
    // 👇 NEW SECTION DATA 👇
    whyChooseUs: [
        { 
            title: "Maximize Your Deductions", 
            description: "We meticulously review your finances to find every possible deduction and credit, ensuring you pay the absolute minimum in taxes." 
        },
        { 
            title: "Avoid Costly Errors", 
            description: "Our expert team is up-to-date on all tax laws, preventing common errors that can lead to audits and penalties." 
        },
        { 
            title: "Year-Round Support", 
            description: "We're not just here during tax season. We provide year-round advice and support to help you make smart financial decisions." 
        },
    ]
  },
  {
     id: 'advisory-services',
    title: 'Advisory Services',
    description: 'Receive strategic financial advice to guide the growth and long-term stability of your business.',
    mainContent: {
      image: '/assets/services/advisory-services-main.jpg',
      title: 'Strategic Guidance for Sustainable Growth',
      intro: 'Our advisory services go beyond numbers. We act as your strategic financial partner, providing the insights and guidance you need to navigate challenges, seize opportunities, and build a resilient, profitable business.'
    },
    points: [
      "Business Plan Development",
      "Financial Forecasting & Budgeting",
      "Cash Flow Management & Analysis",
      "Growth Strategy Consulting",
      "Merger & Acquisition Support",
      "Business Valuation",
    ],
    whoWeServe: [
        { 
            title: "Startups & Entrepreneurs", 
            description: "We provide the foundational financial strategy you need to secure funding and scale sustainably." 
        },
        { 
            title: "Established SMEs", 
            description: "We help you optimize cash flow, analyze performance, and plan for long-term growth and profitability." 
        },
        { 
            title: "Family-Owned Businesses", 
            description: "We offer guidance on succession planning, wealth management, and balancing family and business financial goals." 
        },
    ]
  },
];

  
export const recruitmentOfferingsDetails = [
  {
    id: 'talent-sourcing',
    title: 'Talent Sourcing',
    description: 'We find the best passive and active candidates using advanced, multi-channel sourcing techniques.',
    mainContent: {
      image: '/assets/services/talent-sourcing-main.jpg', // You will need to add this image
      title: 'Connecting You with Unseen Talent',
      intro: 'Finding the best candidates goes beyond job boards. We employ a proactive and strategic approach to sourcing, delving into professional networks, online communities, and our own extensive database to find top-tier talent that isn\'t actively looking, ensuring you get the best fit for your team.'
    },
    points: [
      "Proactive Candidate Search",
      "Boolean Search & Advanced Techniques",
      "LinkedIn & Professional Network Sourcing",
      "Competitor and Market Mapping",
      "Building a Proactive Talent Pipeline",
      "Confidential Candidate Outreach",
     ],
      whyChooseUs: [
        { 
            title: "Access to Passive Talent", 
            description: "We specialize in finding top-tier candidates who aren't actively looking, giving you access to a wider talent pool." 
        },
        { 
            title: "Faster Hiring Process", 
            description: "Our strategic sourcing and pre-screening process significantly reduces your time-to-hire, filling critical roles faster." 
        },
        { 
            title: "Cultural Fit Focus", 
            description: "We go beyond skills and experience to find candidates who align with your company's culture for long-term success." 
        },
    ],

    
    id: 'candidate-screening',
    title: 'Candidate Screening',
    description: 'Our thorough screening process ensures you only meet with qualified candidates who are a perfect fit for your team.',
    mainContent: {
      image: '/assets/services/candidate-screening-main.jpg', // You will need to add this image
      title: 'Beyond the Resume: A Deeper Look at Talent',
      intro: 'We go beyond a simple resume review. Our comprehensive screening process evaluates technical skills, soft skills, and cultural alignment to ensure a holistic match. This meticulous approach saves you time and increases the quality of your interviews.'
    },
    points: [
      "Initial CV & Application Review",
      "Technical Skills Assessments",
      "Behavioral & Competency-Based Interviews",
      "Cultural Fit Evaluation",
      "Reference & Background Checks",
      "Shortlist Presentation & Reports",
    ],
     benefits: [
        { 
            title: "Higher Quality Hires", 
            description: "Our in-depth screening ensures you only interview candidates who are highly skilled, motivated, and a strong cultural fit." 
        },
        { 
            title: "Reduced Hiring Time", 
            description: "By eliminating unsuitable candidates early, we significantly shorten your hiring cycle and save you valuable time." 
        },
        { 
            title: "Increased Retention", 
            description: "A better match from the start leads to higher employee satisfaction and a lower turnover rate, saving you money." 
        },
    ],
     id: 'interview-management',
    title: 'Interview Management',
    description: 'We coordinate and manage the entire interview process, ensuring a smooth and professional experience for both you and the candidates.',
    mainContent: {
      image: '/assets/services/interview-management-main.jpg', // You will need to add this image
      title: 'Streamlining the Path to Your Next Hire',
      intro: 'A well-managed interview process is crucial for attracting top talent. We handle all the logistics, from scheduling and coordination to feedback collection, allowing you to focus on what matters most: evaluating the candidates.'
    },
    points: [
      "Multi-stage Interview Scheduling",
      "Coordination with Hiring Managers & Candidates",
      "Preparation of Interview Kits & Scorecards",
      "Candidate Communication & Follow-ups",
      "Structured Feedback Collection & Consolidation",
      "Creating a Positive Candidate Experience",
    ],
    benefits: [
        { 
            title: "Improved Candidate Experience", 
            description: "We provide clear communication and a professional process, ensuring every candidate leaves with a positive impression of your company." 
        },
        { 
            title: "Reduced Time-to-Hire", 
            description: "Our efficient coordination and scheduling significantly speed up the interview process, helping you secure top talent faster." 
        },
        { 
            title: "Unbiased & Data-Driven Decisions", 
            description: "Using structured feedback and scorecards, we help your team make objective, data-backed hiring decisions." 
        },
    ],
    id: 'executive-search',
    title: 'Executive Search',
    description: 'We specialize in finding and placing top-tier leadership and executive talent to drive your company forward.',
    mainContent: {
      image: '/assets/services/executive-search-main.jpg', // You will need to add this image
      title: 'Finding Leaders to Shape Your Future',
      intro: 'Identifying and attracting high-impact executive talent requires a discreet, strategic, and deeply networked approach. Our executive search service is designed to find leaders who not only have the right experience but also possess the vision and cultural alignment to lead your organization to new heights.'
    },
    points: [
      "C-Suite & Senior Leadership Roles",
      "Confidential & Discreet Search Process",
      "In-depth Industry & Competitor Mapping",
      "Leadership Competency Assessments",
      "Board & Advisory Position Placements",
      "Succession Planning & Talent Pipelining",
    ],
    whyChooseUs: [
        { 
            title: "Absolute Discretion", 
            description: "All searches are conducted with the utmost confidentiality to protect both your company and potential candidates." 
        },
        { 
            title: "Deep Network Access", 
            description: "We leverage our extensive, high-level professional network to find exceptional leaders who aren't available through public channels." 
        },
        { 
            title: "Rigorous Vetting Process", 
            description: "Our multi-stage assessment goes beyond resumes to evaluate leadership qualities, cultural fit, and long-term vision." 
        },
    ]
  },
    ];
    