import React from 'react'
import { motion } from 'framer-motion';

interface Props {
  name?: string;
  message?: string;
}

const SceneTxt: React.FC<Props> = ({ name, message }) => {
  return (
    <>
    <div className='absolute w-full h-[50vh] z-200  flex justify-center items-center'>
        <div className='md:pb-20'>
          <motion.h1
              className="bg-clip-text text-transparent text-center bg-gradient-to-br from-primary to-secondary text-3xl sm:text-4xl lg:text-6xl font-extrabold w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              {name || "Johnnie Gonzalez"}
            </motion.h1>
            <motion.p
            className="sm:hidden text-xl md:text-2xl lg:text-5xl mt-6 font-extrabold text-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.9 }}
          >
            {message || "Software Engineer"}
          </motion.p>
        </div>
      </div>
      <div className='hidden sm:flex w-full h-[100vh] z-100 absolute sm:px-10 md:px-20 lg:px-32 justify-between items-center text-white text-3xl'>
        
        <div className="flex flex-col sm:max-w-44 md:max-w-52 lg:max-w-72">
            <h1 className="text-primary text-2xl sm:text-2xl md:text-2xl lg:text-5xl whitespace-nowrap">engineer</h1>
            <p className="text-gray-400 sm:text-base md:text-lg lg:text-2xl break-words text-left max-w-fit">Solving problems, one bug at a time.</p>
        </div>

        <div className="flex flex-col sm:max-w-44 md:max-w-52 lg:max-w-72">
            <h1 className="text-secondary text-2xl sm:text-2xl md:text-2xl lg:text-5xl whitespace-nowrap pl-10">&lt;coder&gt;</h1>
            <p className="text-gray-400 sm:text-base md:text-lg lg:text-2xl break-words text-left max-w-fit pl-10">Crafting logic, making magic.</p>
        </div>
      </div>
    </>
  )
}

export default SceneTxt