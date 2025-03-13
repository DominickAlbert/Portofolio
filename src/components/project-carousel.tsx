"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  imageUrl: string
  codeUrl: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Get current projects to display
  const currentProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  return (
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-6">
        {currentProjects.map((project, index) => (
          <div key={index} className="border border-[#e5e5e5] rounded-md overflow-hidden">
            <div className="h-40 bg-[#e5e7eb] flex items-center justify-center">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">{project.title}</h3>
              <p className="text-sm text-[#525252] mb-4">{project.description}</p>
              <Link href={project.codeUrl} className="flex items-center text-sm font-medium">
                <Github className="w-4 h-4 mr-1" /> View Code
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={prevPage}
            className="p-2 rounded-full border border-[#e5e5e5] hover:bg-[#f5f5f5] transition-colors"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${currentPage === index ? "bg-black" : "bg-[#e5e5e5]"}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="p-2 rounded-full border border-[#e5e5e5] hover:bg-[#f5f5f5] transition-colors"
            aria-label="Next projects"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}