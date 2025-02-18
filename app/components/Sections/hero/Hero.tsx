'use client'
import { motion } from 'framer-motion';
import CanvasContainer from '../../ThreeJs/Canvas'
import { Hero as HeroType } from '@/app/lib/contentful/hero';

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

  const {name, welcomeMessage } = data

  return (
    <section 
      id="hero" 
      className="w-full flex flex-col justify-center items-center"
      style={{
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
        maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <motion.div
        className='w-full'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <CanvasContainer name={name} welcomeMessage={welcomeMessage} />
      </motion.div>
    </section>
  );
}

export default Hero