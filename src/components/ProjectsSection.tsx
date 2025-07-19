import React from "react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

// Inline ProjectCard component since there seems to be an issue with importing it
const ProjectCard = ({
  title,
  description,
  imageUrl,
  link = "#",
}: ProjectCardProps) => {
  return (
    <div className="group h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-medium mb-2 text-[#333333]">
          {title}
        </h3>
        <p className="text-[#666666] mb-4 flex-grow">{description}</p>
        <a
          href={link}
          className="inline-flex items-center text-sm font-medium text-[#d4b996] hover:text-[#b39169] transition-colors"
        >
          View Project
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = defaultProjects,
}: ProjectsSectionProps) => {
  return (
    <section className="w-full py-16 bg-[#f8f5f2]" id="projects">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 tracking-tight text-[#333333]">
            Recent Work / Projects
          </h2>
          <div className="w-20 h-1 bg-[#d4b996] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Crime Predictor by Text",
    description:
      "Built using Natural Language Processing to analyze FIRs and predict crime categories. Python + ML pipeline with accuracy of 90%.",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    link: "https://github.com/Akshatakokane10/Crime_Predictor_India",
  },
  {
    id: "2",
    title: "Spotify Clone (Music_Player)",
    description:
      "HTML, CSS, and JavaScript-based music player with playlist, QR code login, and premium backend functionality.",
    imageUrl:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&q=80",
    link: "https://drive.google.com/drive/folders/1dcti2ZwERRJEX4VFyrddiIsP_dKmTGq6?usp=sharing",
  },
  {
    id: "3",
    title: "Foodify – WordPress Food Website",
    description:
      "A dynamic food blog and restaurant site built with WordPress. Features include blog posts, table booking, and elegant food gallery.",
    imageUrl:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80",
    link: "http://deliciousfood.liveblog365.com/",
  },
  {
    id: "4",
    title: "Portfolio Website (This One!)",
    description:
      "Personal portfolio website. Hosted, responsive, and optimized.",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    link: "#",
  },
];

export default ProjectsSection;
