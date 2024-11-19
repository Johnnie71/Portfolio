import React from 'react'

interface Props {
  url: string,
  text: string
} 

const ProjectButton: React.FC<Props> = ({ url, text }) => {
  return (
    <button
    className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-[1px] transition-transform duration-300 text-lg hover:scale-95"
    >
    <div
      className="bg-gray-900 rounded-3xl px-4 py-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-in-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
    >
      <a href={url} title={`${text}`} target='_blank'>{text}</a>
    </div>
</button>

  )
}

export default ProjectButton;