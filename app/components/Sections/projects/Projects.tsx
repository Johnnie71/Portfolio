'use client'
import { Project } from "@/app/lib/contentful/projects"
import { motion } from "framer-motion"
import React from "react"
import Image from 'next/image';
import ProjectButton from "../../buttons/ProjectButton";

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
        className="text-center mb-8 flex flex-col items-center"
      >
        <h2 className="sm:text-[18px] text-[14px] uppercase">my work</h2>
        <h2 className="text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] font-bold border-b-2 border-primary filter brightness-90 w-fit">Projects</h2>
        {/* <h3 className="text-3xl font-bold border-b-2 border-primary pb-2 inline-block">Projects</h3> */}
      </motion.div>
      <div className="flex flex-col justify-center items-center w-full">
        {projects.map((project, idx) => {
          const { title, description, techStack, demoURL, repo, picture, liveSite } = project;

          return (
            <React.Fragment key={idx}>
              {/* Mobile section */}
              <motion.div
                className="md:hidden grid sm:grid-cols-1 md:grid-cols-2 mb-10 w-full max-w-screen-lg bg-gradient-to-b from-primary via-secondary to-secondary/60 rounded-xl p-[1px] shadow-lg shadow-black"
                initial={{ opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="w-full h-full bg-slate-900 rounded-xl p-4">
                <Image 
                  className="w-full max-w-sm md:max-w-lg lg:max-w-xl object-cover mb-4 rounded-lg shadow-lg shadow-black" 
                  src={`${"https:" + picture.src}`} 
                  alt={picture.alt || 'project preview'} 
                  height={20}
                  width={20}
                  unoptimized
                  priority
                />
                <h3 className="text-primary mb-2 w-fit text-2xl font-semibold filter brightness-90">{title}</h3>
                <p className="mb-4">{description}</p>
                
                <div id={`${idx}`} className="flex justify-around w-full mb-4">
                  {techStack.map((tech, index) => {
                    const { alt, src } = tech;
                    return (
                      <Image
                        src={`${"https:" + src}`}
                        alt={alt}
                        className='w-10 h-10'
                        width={10}
                        height={10} 
                        key={index}
                        priority
                      />
                    )
                  })}
                </div>
                <div className="flex justify-around items-center w-full">
                  {demoURL && (
                    <ProjectButton url={demoURL} text="Demo Video" />
                  )
                  }
                  {liveSite && (
                    <ProjectButton url={liveSite} text="Live Site" />
                  )}
                  {repo && (
                    <ProjectButton url={repo} text="Source Code" />
                  )}
                </div>
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
                    <h3 className="border-b-2 border-secondary text-primary filter brightness-90 text-3xl">{title}</h3>
                    <p className="text-lg">{description}</p>
                    <div id={`${idx}`} className="flex justify-around w-full">
                      {techStack.map((tech, index) => {
                        const { alt, src } = tech;
                        return (
                          <Image 
                            src={`${"https:" + src}`} 
                            alt={alt} 
                            className='w-10 h-10'
                            height={10}
                            width={10}
                            key={index}
                            priority
                          />
                        )
                      })}
                    </div>
                    <div className="flex justify-around items-center w-full">
                      {demoURL && (
                        <ProjectButton url={demoURL} text="Demo Video" />
                      )
                      }
                      {liveSite && (
                        <ProjectButton url={liveSite} text="Live Site" />
                      )
                      }
                      {repo && (
                         <ProjectButton url={repo} text="Source Code" />
                      )}
                    </div>
                  </div>
                  <motion.div
                    className={`${idx % 2 == 0 ? 'order-2' : 'order-1'} flex justify-center items-center w-full`}
                  >
                    <Image
                      className="w-full max-w-sm md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-lg shadow-black"
                      height={20}
                      width={20}
                      src={`${"https:" + picture.src}`} 
                      alt={picture.alt || 'project preview'}
                      unoptimized
                      priority
                    />
                  </motion.div>
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
