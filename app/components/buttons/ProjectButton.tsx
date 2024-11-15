import React from 'react'

interface Props {
  url: string,
  text: string
} 

const ProjectButton: React.FC<Props> = ({ url, text }) => {
  return (
    <button className="flex gap-3 cursor-pointer text-black font-semibold bg-gradient-to-r from-primary to-secondary px-7 py-3 rounded-full hover:scale-105 duration-300 transition-all ease-in-out hover:border-gray-800 hover:from-secondary hover:to-primary shadow-lg shadow-black">
      <a href={url} title={`${text}`} target='_blank'>{text}</a>
    </button>
  )
}

export default ProjectButton;