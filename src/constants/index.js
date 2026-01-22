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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "git",
    icon: git,
  },
  {
    name: "githubb",
    icon: githubb,
  },
  {
    name: "npm",
    icon: npm,
  },
];

const experiences = [
  {
    title: "Mern stuck Developer",
    company_name: "Homewseetland.com",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js, Redux, Express and other related technologies.",
      "Used firebase and firestore components to create, manage and store The web application users Pictures and videos.",
      "Used tailwind css to implement responsive design and ensuring cross-browser compatibility with on scale mobile, ipad and other devices.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ma Hair – Online Ordering",
    description:
      "A full-stack website built for a local hair business with a strong social media presence. The platform showcases products, gallery (images & videos), and lays the foundation for online ordering to help convert social media traffic into real customers.",
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
    name: "Mekelle Delivery",
    description:
      "Built a complete food ordering platform that provides a smooth experience for customers and restaurant owners. Users can browse menus, customize items, and pay securely, with real-time cart updates for a simple checkout process. On the backend, the admin dashboard lets restaurant staff track orders in real time, update statuses, and manage operations effectively. This design aims to improve customer satisfaction while streamlining restaurant workflow.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mkdelivery,
    source_code_link: "https://github.com/SemEtic17/mekelle-food-ordering",
    weblink: "https://mekelle-delivery.onrender.com/",
  },
  {
    name: "Mekelle Estate",
    description:
      "web application where homeowners can easily list their properties by uploading images and descriptions directly from their devices. Prospective buyers can search and browse through available listings, reading detailed descriptions to find the best match for their needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: me,
    source_code_link: "https://github.com/SemEtic17/mekelle-estate",
    weblink: "https://mekelle-estate.onrender.com",
  },
  {
    name: "Homesweetland",
    description:
      "website with a blog and detailed assignment descriptions, allowing students to search and access the instructions. Tutors could also offer their services to individual clients, and the center's activities were highlighted on the homepage.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hsl,
    source_code_link: "https://github.com/SemEtic17/Homesweetland",
    weblink: "https://homesweetland.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
