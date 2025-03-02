import { CubeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CubeIcon className="mx-auto inline-block w-10 mb-4" />
          <motion.h1
            className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="lg:w-2/3 mx-auto leading-relaxed text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of the projects I have worked on during my educational journey.
            I have also been working on multiple web applications for my current company.
          </motion.p>
        </div>
        <div className="flex flex-wrap -m-4">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.image}
                className="sm:w-1/2 w-100 p-4 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-center rounded-lg"
                    src={project.image}
                  />
                  <motion.div
                    className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                    <a
                      href={project.link_github}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white py-2 px-4 rounded-lg hover:bg-gray-900 hover:underline"
                    >
                      View on GitHub
                    </a>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}