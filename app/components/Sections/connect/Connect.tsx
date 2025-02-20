'use client'

import React from 'react';
import { motion } from 'framer-motion'
import { Social } from '@/app/lib/contentful/socials';
import Image from 'next/image';
import EmailForm from '../../EmailForm/EmailForm';

interface Props {
  socials: Social[] | null
}

const Connect: React.FC<Props> = ({ socials }) => {

  if (!socials) {
    return (
      <section id='connect' className='h-[90vh] w-full flex flex-col justify-center items-center'>
        <h1>No socials data found</h1>
      </section>
    );
  }

  return (
    <section id='connect'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center left-0 right-0 p-0 mb-5 md:mb-10 flex flex-col items-center"
      >
        <h2 className="sm:text-[18px] text-[14px] uppercase">connect with me</h2>
        <h2 className="text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] font-bold border-b-2 border-primary filter brightness-90 w-fit">Get in Touch</h2>
        <EmailForm />
        <div className='w-full items-center mt-5'>
          <h2 className="text-2xl font-bold text-white mb-6">Socials</h2>
          <div className='w-full flex justify-center'>
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
                        className="w-12 h-12 md:w-6 md:h-6 lg:w-14 lg:h-14 transition-all ease-in-out duration-300 hover:scale-75 reflect"
                        height={18}
                        width={18}
                      />
                    </a>
                    <span className='border-2 border-secondary w-[90%] mt-4 rounded-lg blur group-hover:w-[60%] group-hover:-translate-y-2 transition-all duration-300 ease-in-out'></span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Connect;