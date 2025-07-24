import React from 'react'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'

const achievements = [
  {
    title: "Solve 100 LeetCode Problems in C++",
    description: "Completed 100 days of consistent problem-solving in C++ on LeetCode, strengthening my DSA concepts and algorithmic thinking.",
  },
  {
    title: "Solve 30 LeetCode Problems in JavaScript",
    description: "Solved 30 daily coding problems using JavaScript, covering arrays, async programming, and core language features.",
  },
  {
    title: "1st Prize in Aquaregia Hackathon",
    description: "Won first place in Aquaregia Hackathon by building an innovative full-stack project within 36 hours under pressure.",
  },
  {
    title: "Complete 100 Days on CodeChef",
    description: "Solved competitive programming problems consistently for 100 days, improving my logical problem-solving and speed.",
  },
]

const Achievement = () => {
  return (
    <div className="text-white bg-black bg-opacity-30 shadow-xl rounded-lg px-6 py-10 md:px-12 md:py-16 mx-2 md:mx-20 min-h-screen">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center md:text-left">🏅 Achievements</h2>

      <div className="flex flex-col gap-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-4 bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <IoCheckmarkCircleSharp size={30} className="text-green-400 mt-1 shrink-0" />
            <div className="w-full">
              <h3 className="text-lg md:text-2xl font-semibold">{item.title}</h3>
              <p className="text-sm md:text-base mt-2 text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievement
