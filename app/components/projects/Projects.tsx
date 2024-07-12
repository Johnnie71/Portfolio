'use client'
import { Project } from "@/app/lib/contentful/projects"
import { motion } from "framer-motion"
import React from "react"

interface Props {
  projects: Project[] | null
}

const Projects: React.FC<Props> = ({ projects }) => {

  if (!projects) {
    return (
      <section id='projects' className='h-[90vh] w-full flex flex-col justify-center items-center'>
        <h1>No projects projects found</h1>
      </section>
    );
  }

  return (
    <section id='projects' className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold border-b-2 border-primary pb-2 inline-block">Projects</h3>
      </motion.div>
      <div className="flex flex-col justify-center items-center w-full">
        {projects.map((project, idx) => {
          const { title, info, techStack, url, repo, picture } = project;
          return (
            <React.Fragment key={idx}>
              {/* Mobile section */}
              <motion.div
                className="md:hidden grid sm:grid-cols-1 md:grid-cols-2 mb-10 w-full max-w-screen-lg place-items-center"
                initial={{ opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              >
                <h3 className="border-b-2 border-secondary text-primary mb-4 w-[90%] text-center text-2xl font-semibold">{title}</h3>
                <p className="text-center mb-4">{info}</p>
                <img 
                  className="w-full max-w-sm md:max-w-lg lg:max-w-xl object-cover mb-4" 
                  src={picture.src} 
                  alt={picture.alt || 'project preview'} 
                />
                <div id={`${idx}`} className="flex justify-around w-full mb-4">
                  {techStack.map((tech, index) => {
                    const { alt, src } = tech;
                    return (
                      <img src={src} alt={alt} className='w-10 h-10' key={index}/>
                    )
                  })}
                </div>
                <div className="flex justify-around items-center w-full">
                  {url && (
                    <button className="flex gap-3 cursor-pointer text-black font-semibold bg-gradient-to-r from-primary to-secondary px-7 py-3 rounded-full">
                      <a href={url} title="Demo Video">Demo Video</a>
                    </button>
                  )
                  }
                  <button className="flex gap-3 cursor-pointer text-black font-semibold bg-gradient-to-r from-primary to-secondary px-7 py-3 rounded-full border border-red-600">
                    <a href={repo} title="Repo">Source Code</a>
                  </button>
                </div>
              </motion.div>
              {/* Desktop section */}
              <motion.div
                className="hidden md:flex md:justify-center md:items-center mb-10 w-full"
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="grid grid-cols-2 gap-4 max-w-7xl ">
                  <div className={`${idx % 2 == 0 ? 'order-1' : 'order-2'} flex flex-col justify-between w-full`}>
                    <h3 className="border-b-2 border-secondary text-primary text-3xl font-semibold">{title}</h3>
                    <p className="text-lg">{info}</p>
                    <div id={`${idx}`} className="flex justify-around w-full">
                      {techStack.map((tech, index) => {
                        const { alt, src } = tech;
                        return (
                          <img src={src} alt={alt} className='w-10 h-10' key={index}/>
                        )
                      })}
                    </div>
                    <div className="flex justify-around items-center w-full">
                      {url && (
                        <button className="flex gap-3 cursor-pointer text-black font-semibold bg-gradient-to-r from-primary to-secondary px-7 py-3 rounded-full border border-red-600 hover:scale-105 duration-200 transition-colors hover:border-gray-800 hover:from-secondary hover:to-primary">
                          <a href={url} title="Demo Video">Demo Video</a>
                        </button>
                      )
                      }
                      <button className="flex gap-3 cursor-pointer text-black font-semibold bg-gradient-to-r from-primary to-secondary px-7 py-3 rounded-full border border-red-600 hover:scale-105 duration-200 transition-colors hover:border-gray-800 hover:from-secondary hover:to-primary">
                        <a href={repo} title="Repo">Source Code</a>
                      </button>
                    </div>
                  </div>
                  <div className={`${idx % 2 == 0 ? 'order-2' : 'order-1'} flex justify-center items-center w-full`}>
                    <img
                      className="w-full max-w-sm md:max-w-lg lg:max-w-xl object-cover"
                      src={picture.src} 
                      alt={picture.alt || 'project preview'} 
                    />
                  </div>
                </div>
              </motion.div>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
};

export default Projects;
