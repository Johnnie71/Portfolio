'use client'
import { motion } from 'framer-motion';
import CanvasContainer from '../../ThreeJs/Canvas'
import { Hero as HeroType } from '@/app/lib/contentful/hero';
import Image from 'next/image'; 

interface HeroProps {
  data: HeroType | null;
}

const Hero: React.FC<HeroProps> = ({data}) => {

  if (!data) {
    return (
      <section id='hero' className='h-[90vh] w-full flex flex-col justify-center items-center'>
        <CanvasContainer />
        <h1>No hero data found</h1>
      </section>
    );
  }

  const {name, welcomeMessage, avatar} = data

  return (
    <section id="hero" className="relative h-[90vh] w-full flex flex-col justify-center items-center">
      <motion.div
      className='w-full'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <CanvasContainer />
      </motion.div>
      <div className="container w-auto md:w-[80%] flex flex-col md:flex-row">
        <motion.div
          className="flex flex-col md:justify-center md:items-start md:flex-grow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="bg-clip-text text-transparent text-center bg-gradient-to-r from-primary to-secondary text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {name}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-5xl mt-6 font-extrabold text-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {welcomeMessage}
          </motion.p>
        </motion.div>
        <motion.div
          className="mt-4 md:mt-0 h-content flex-shrink-0 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            className="border-2 border-primary rounded-full w-28 md:w-32 lg:w-48"
            src={`${"https:" + avatar.src}`}
            alt="Profile Image"
            width={40}
            height={40}
            priority
            unoptimized
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero