import React from 'react'

const ProjectCard = ({ title, main, image }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-full sm:w-72 md:w-80 h-auto bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 rounded-xl w-full object-cover" src={image} alt={title} />
      <h3 className="px-4 text-lg md:text-2xl font-bold leading-snug mt-2">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-base leading-tight py-2 overflow-auto">
        {main}
      </p>
    </div>
  )
}

export default ProjectCard
