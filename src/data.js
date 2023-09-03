import project_image from "./images/project.png";
import project1_image from "./images/project1.png";
import project2_image from "./images/project2.png";
import project3_image from "./images/project3.png";

export const projects = [
  {
    title: "Appwrite Compress Image Function",
    subtitle: "Java",
    description:
      "Created a compressed image function in Java for Appwrite Functions, enhancing image compression capabilities through integration with Tinypng and Krakenio services. Utilized secret keys, handled base64-encoded image payloads, and contributed to the open-source development of server functionality.",
    image: project_image,
    link: "https://github.com/open-runtimes/examples/pull/174",
    link_github:"https://github.com/tinpham5614/examples/tree/main/java/compress_image"
  },
  {
    title: "Health Finder Search App",
    subtitle: "ReactJS",
    description:
      "Developed a responsive and mobile-friendly health information search engine using React and an API from the U.S. Department of Health and Human Services. Provided health recommendations for various age groups and helped individuals take preventive measures to maintain their health",
    image: project1_image,
    link: "https://tinpham5614.github.io/HealthFinder/",
    link_github:"https://github.com/SeattleColleges/belindas-closet-android"
  },
  {
    title: "Belinda's Closet",
    subtitle: "NextJS and Android",
    description:
      "Developed Belinda's Closet application to cater to students' graduation day clothing needs, later expanding to include professional attire for interviews and work. Implemented a user-friendly platform accessible on desktop and mobile devices, empowering staff to manage inventory and enabling seamless clothing searches for students",
    image: project2_image,
    link: "/",
    link_github:"https://github.com/SeattleColleges/belindas-closet-android"
  },
  {
    title: "North Seattle College Events",
    subtitle: "NextJS and Android",
    description:
      "Developed a cohesive and user-friendly application that enables school staff and admin to organize events in a visible manner, providing students with a more manageable and interactive platform compared to the overwhelming Canvas notifications. Implemented distinct sections within the app, allowing students to personalize their experience by organizing and accessing events based on their interests, fostering a more engaging and purpose-driven user interaction.",
    image: project3_image,
    link: "/",
    link_github:"https://github.com/SeattleColleges/nsc-events-nextjs"
  },
];
