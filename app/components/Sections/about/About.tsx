'use client'
import React, {} from 'react';
import { motion } from "framer-motion";
import { About as AboutType } from '@/app/lib/contentful/about';

interface Props {
  data: AboutType | null
}

const About: React.FC<Props> = ({data}) => {

  if (!data) {
    return (
      <section id='about' className='h-[90vh] w-full flex flex-col justify-center items-center'>
        <h1>No about data found</h1>
      </section>
    );
  }

  const { about } = data;

  return (
    <section id="about" className="flex flex-col items-left py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-left mb-4"
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
      >
        <h6 className="sm:text-[18px] text-[14px] uppercase">introduction</h6>
        <h2 className="text-[30px] xs:text-[40px]  sm:text-[50px] md:text-[60px] font-bold border-b-2 border-primary w-fit">Overview</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x:0}}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="sm:text-lg md:text-xl mb-6 text-left max-w-4xl"
      >
        {about.map((text, index) => (
          <p key={index} className='mb-4'>{text}</p>
        ))}
      </motion.div>
    </section>
  );
}

export default About