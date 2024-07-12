'use client'

import React from 'react';
import { motion } from 'framer-motion'
import { Social } from '@/app/lib/contentful/socials';
import Image from 'next/image';

interface Props {
  socials: Social[] | null
}

const Socials: React.FC<Props> = ({ socials }) => {

  if (!socials) {
    return (
      <section id='projects' className='h-[90vh] w-full flex flex-col justify-center items-center'>
        <h1>No socials data found</h1>
      </section>
    );
  }

  return (
    <section id='socials'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center left-0 right-0 p-0 mb-10"
      >
        <h3 className="text-3xl font-bold border-b-2 border-primary pb-2 inline-block">Connect with me!</h3>
        <div className='w-full flex justify-center items-center mt-5'>
          <ul className='w-full md:w-[30%] flex justify-around items-center p-3'>
            {socials.map((social, index) => {
              const { site, icon, link } = social;
              return (
                <li key={index} className='group flex flex-col justify-center items-center'>
                  <span
                    className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-lg group-hover:-translate-y-10 duration-700"
                  >
                    {site}
                  </span>
                  <a className="" href={link} target='_blank' rel='noopener noreferrer'>
                    <Image 
                      src={`${icon?.src}`} 
                      alt={site} 
                      className="w-16 h-16 md:w-6 md:h-6 lg:w-14 lg:h-14 transition-all ease-in-out duration-300 hover:scale-75"
                      height={18}
                      width={18}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default Socials;