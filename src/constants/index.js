import {
  meta,
  shopify,
  starbucks,
  tesla,
  denki,
  sajo,
  forage,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Virtual Internship",
    company_name: "Forage",
    icon: forage,
    iconBg: "#accbe1",
    date: "July 2024",
    points: [
      "JPMorgan Chase & Co - Software Engineer:Fixed broken files in the repository to make web application output correctly and than Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor",
      "Datacom - Software Development:Reviewed a web application and planned for future improvements and than Identified the root cause of  bugs and implemented a fix to improve the application",
      "Skyscanner - Front-end Software Engineer:Developed a page for picking a travel date using skyscnner’s open-source Backpack React library and than Customised my application and ran automated tests to ensure it rendered properly",
    ],
  },
  {
    title: "Electrician",
    company_name: "Shimizu Adhi karya joint operation (SAJO)",
    icon: sajo,
    iconBg: "#fbc3bc",
    date: "Sep 2020 - Okt 2023",
    points: [
      "Responsible for the installation, maintenance, and repair of electrical systems in construction projects, ensuring the reliability and safety of the systems consistently.",
      "Collaborated with construction teams to plan and execute projects, ensuring smooth communication and coordination to meet project deadlines.",
      " Implemented strict work safety procedures and practices to prevent accidents and ensure a safe working environment for oneself and colleagues.",
    ],
  },
  {
    title: "Assistant Electrician",
    company_name: "PT Denki Engineering",
    icon: denki,
    iconBg: "#b7e4c7",
    date: "Sep 2019 - Agu 2020",
    points: [
      "Electrical System Installation and Maintenance",
      "Provided technical support by managing tools and materials, ensuring compliance with stringent safety standards in dynamic and often challenging work environments.",
      "Developed skills in handling electrical equipment specific to tunnel project environments, collaborating within teams to ensure successful and safe project completion.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/simsonhutagaol",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/simson-hutagaol-753604300/",
  },
];

export const projects = [
  {
    // iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Bukapak",
    description:
      "A comprehensive e-commerce web application developed with TypeScript for enhanced type safety, leveraging the Next.js framework.",
    link: "https://github.com/simsonhutagaol/Bukapak",
  },
  {
    // iconUrl: threads,
    theme: "btn-back-green",
    name: "Chatsync",
    description:
      "Chatsync is a real-time chat application or web platform that enables users to communicate directly with each other.",
    link: "https://github.com/chat87/appchat",
  },
  {
    // iconUrl: car,
    theme: "btn-back-blue",
    name: "Pictwin",
    description:
      "My Social Media App is a client-server application designed to offer a comprehensive social media experience.",
    link: "https://github.com/simsonhutagaol/Pictwin",
  },
  {
    // iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Easytrip",
    description:
      "EasyTrip is a web-based application that helps users find the right destination and book a travel package in one action.",
    link: "https://github.com/nyanza-fox",
  },
  {
    // iconUrl: estate,
    theme: "btn-back-black",
    name: "Tekfone",
    description:
      "Tekfone is a web application focused on branded merchandise. It consists of a public website for users and a Content Management System (CMS).",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
];
