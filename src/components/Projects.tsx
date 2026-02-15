import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal, { type ProjectForModal } from "./ProjectModal";

/**
 * Images are served from the public folder. Vite copies public/ to the build output,
 * so /vj1.jpeg, /ic1.jpeg, etc. work in development and after deployment.
 */
const PROJECTS: (ProjectForModal & { image: string })[] = [
  {
    title: "VJEventrix",
    description:
      "Developed a scalable event management platform using Node.js, TypeScript, Express.js, and MongoDB to automate event scheduling, registration, and tracking. Implemented RESTful APIs for efficient data handling and ensured seamless coordination by minimizing scheduling conflicts. The system improves operational efficiency by providing a centralized interface for managing events and user participation.",
    tech: ["Node.js", "TypeScript", "Express.js", "MongoDB"],
    driveFolderId: "1cr_139Ch7LpkYuuRMtEn5twvOAVe7I6T",
    image: "/vj1.jpeg",
    coverImage: "/vj1.jpeg",
    imageIds: ["/vj1.jpeg", "/vj2.jpeg", "/vj3.jpeg"],
  },
  {
    title: "Attribute-Based Gene Data Access (ICRISAT)",
    description:
      "Designed and implemented a data-driven system integrating ICRISAT's gene dataset with real-time weather APIs to enable climate-aware crop filtering. Built using .NET ASP, C, Python, and Web APIs, the platform allows users to filter crops based on environmental parameters such as temperature, rainfall, and soil conditions. Included both manual and chatbot-based interfaces to enhance accessibility and usability for diverse users.",
    tech: [".NET ASP", "Python", "Web APIs", "C"],
    driveFolderId: "1-rulGTN7yHweogSZK_fY3Oh6nZaull90",
    image: "/ic1.jpeg",
    coverImage: "/ic1.jpeg",
    imageIds: ["/ic1.jpeg", "/ic2.jpeg", "/ic3.jpeg", "/ic4.jpeg"],
  },
  {
    title: "AI Web Scraper with Chatbot",
    description:
      "Developed an AI-powered web scraping system using Python, BeautifulSoup/Selenium, and NLP techniques to extract and process data from web sources. Integrated a chatbot interface to allow users to interact with and query the extracted data efficiently. The system automates data collection and transforms unstructured information into meaningful, user-friendly insights.",
    tech: ["Streamlit", "LangChain", "Ollama", "Python"],
    driveFolderId: "1TX_QXb_41WL9BDtrp3vRR6XjVBcp65iU",
    image: "/ai1.jpeg",
    coverImage: "/ai1.jpeg",
    imageIds: ["/ai1.jpeg"],
  },
];

export default function Projects() {
  const [modalProject, setModalProject] = useState<ProjectForModal | null>(null);

  return (
    <section id="projects" className="relative px-4 py-16 sm:py-20 md:px-8 md:py-24 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Engineered Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-1 text-lg text-white/60 sm:mt-2 sm:text-xl md:text-2xl"
      >
        Builds that ship
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            tech={p.tech}
            image={p.image}
            index={i}
            onOpen={() =>
              setModalProject({
                title: p.title,
                tech: p.tech,
                description: p.description,
                driveFolderId: p.driveFolderId,
                coverImage: p.coverImage,
                imageIds: p.imageIds,
              })
            }
          />
        ))}
      </div>

      <AnimatePresence>
        {modalProject && (
          <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
