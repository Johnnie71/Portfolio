'use client'
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
    <section id="about" className="flex flex-col items-center py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold border-b-2 border-primary pb-2">About</h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="sm:text-lg md:text-xl mb-6 text-center max-w-4xl"
      >
        <p>{about}</p>
      </motion.div>
    </section>
  );
}

export default About