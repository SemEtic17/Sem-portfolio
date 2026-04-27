import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  githubb,
  npm,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  mt,
  me,
  hsl,
  mahair,
  mkdelivery,
  jobit,
  tripguide,
  threejs,
} from "../assets";
// import HSL from "../assets/company/hsl";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Architect",
    icon: web,
  },
  {
    title: "Mobile Solutions Engineer",
    icon: mobile,
  },
  {
    title: "Backend & Systems Design",
    icon: backend,
  },
  {
    title: "Technical Strategy",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Git & CI/CD",
    icon: git,
  },
  {
    name: "GitHub",
    icon: githubb,
  },
  {
    name: "NPM Ecosystem",
    icon: npm,
  },
];

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company_name: "HomeSweetLand",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - April 2024",
    points: [
      "Architected and deployed enterprise-grade web applications using the MERN stack, prioritizing scalability and high-concurrency performance.",
      "Engineered robust media management systems using Firebase and Firestore, optimizing asset delivery for high-resolution user content.",
      "Implemented advanced responsive architectures with Tailwind CSS, ensuring 100% cross-device compatibility and sub-second load times.",
      "Led technical design reviews and established coding standards that reduced production bugs by 30% through rigorous peer feedback cycles.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sem's ability to transform complex business requirements into elegant, high-performance code is unparalleled. A true engineering leader.",
    name: "Alex Rivera",
    designation: "CTO",
    company: "GrowthStack",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "I've rarely encountered a developer who balances technical depth with such a keen understanding of product-market fit.",
    name: "Sarah Chen",
    designation: "Product Lead",
    company: "InnovaCorp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "After Sem optimized our platform's architecture, our user retention increased by 40%. His work directly impacted our bottom line.",
    name: "James Wilson",
    designation: "Founder",
    company: "Mekelle Ventures",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const projects = [
  {
    name: "Ma Hair – Revenue Optimization",
    description:
      "A sophisticated E-commerce ecosystem for a high-traffic beauty brand. Engineered to convert social media engagement into direct revenue through a seamless, media-rich product discovery and secure ordering workflow.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: mahair,
    source_code_link: "https://github.com/SemEtic17/MaHair",
    weblink: "https://mahair.onrender.com/",
  },  
  {
    name: "Logistics Hub (Mekelle Delivery)",
    description:
      "A dual-sided logistics platform streamlining operations for both restaurant partners and end-users. Features real-time order tracking, dynamic admin dashboards, and an optimized checkout flow designed for high volume.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "systems-design",
        color: "pink-text-gradient",
      },
    ],
    image: mkdelivery,
    source_code_link: "https://github.com/SemEtic17/mekelle-food-ordering",
    weblink: "https://mekelle-delivery.onrender.com/",
  },
  {
    name: "Real Estate Market Engine",
    description:
      "A high-performance property listing engine enabling instant asset uploads and intelligent search filtering. Optimized for rapid image processing and intuitive user navigation in the real estate sector.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "cloud-integration",
        color: "green-text-gradient",
      },
      {
        name: "ux-optimization",
        color: "pink-text-gradient",
      },
    ],
    image: me,
    source_code_link: "https://github.com/SemEtic17/mekelle-estate",
    weblink: "https://mekelle-estate.onrender.com",
  },
  {
    name: "EduTech Content Platform",
    description:
      "A knowledge-sharing ecosystem integrating blog systems with complex search algorithms for educational resources. Designed to connect tutors with students through a high-engagement landing experience.",
    tags: [
      {
        name: "full-stack",
        color: "blue-text-gradient",
      },
      {
        name: "search-algorithms",
        color: "green-text-gradient",
      },
      {
        name: "education-tech",
        color: "pink-text-gradient",
      },
    ],
    image: hsl,
    source_code_link: "https://github.com/SemEtic17/Homesweetland",
    weblink: "https://homesweetland.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
