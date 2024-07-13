import React, {useState } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineAccountBox, MdOutlineCode, MdConnectWithoutContact} from 'react-icons/md'

interface OptionProps {
  text: string;
  Icon: React.ComponentType;
  scrollTo: string;
}

const StaggeredDropDown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setOpen(!open)
  }

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };

  const Option: React.FC<OptionProps> = ({ text, Icon, scrollTo }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => handleScrollTo(scrollTo)}
        className="flex items-center gap-2 w-full p-2 whitespace-nowrap rounded-md cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  return (
    <div className='md:hidden flex items-center justify-center'>
      <motion.div
        onMouseLeave={handleMenu}
        animate={open ? 'open' : 'closed'}
        className='relative'
      >
        <button 
          onClick={handleMenu}
          className='flex items-center justify-center gap-2 px-3 py-2 text-2xl'
        >
          ☰
        </button>
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: 'top', translateX: '-50%' }}
          className='flex flex-col gap-2 p-2 rounded-lg bg-white text-black text-sm shadow-xl absolute w-fit mr-10'
        >
          <Option scrollTo='about' Icon={MdOutlineAccountBox} text="About" />
          <Option scrollTo='projects' Icon={MdOutlineCode} text="Projects" />
          <Option scrollTo='socials' Icon={MdConnectWithoutContact} text="Connect" />
        </motion.ul>
      </motion.div>
    </div>
  )
}

export default StaggeredDropDown;