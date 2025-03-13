import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, HelpCircle, Download, Server, Code, Cloud, Smartphone } from "lucide-react"
import { ProjectCarousel } from "@/components/project-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5]">
        <div className="text-lg font-medium">John Doe</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-sm hover:text-[#525252]">
            About
          </Link>
          <Link href="#projects" className="text-sm hover:text-[#525252]">
            Projects
          </Link>
          <Link href="#contact" className="text-sm hover:text-[#525252]">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com" target="_blank" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" aria-label="Help">
            <HelpCircle className="w-5 h-5" />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="Profile Avatar"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Hi, I'm Dominick Albert Setiawan</h1>
            <p className="text-[#525252] mb-6">Undergraduate Computer Science Student | AI Enthusiast</p>
            <Link
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-[#231f20] transition-colors"
            >
              Download Resume <Download className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-12">
          <h2 className="text-2xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-medium mb-4">Background</h3>
              <p className="text-sm text-[#525252] leading-relaxed">
                A computer science major passionate about AI technologies to solve complex real-world challenges. My
                journey into AI began with exploring machine learning algorithms and their applications in areas like
                natural language processing and computer vision. I'm currently building expertise in Python, TensorFlow,
                and data analysis while deepening my understanding of core concepts like deep learning and reinforcement
                learning.
              </p>

              <h3 className="font-medium mt-8 mb-4">Education</h3>
              <div>
                <p className="font-medium">Bina Nusantara University</p>
                <p className="text-sm text-[#525252]">2022 - 2026</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Skills</h3>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <Code className="w-8 h-8 mb-2" />
                  <h4 className="font-medium mb-2">Languages</h4>
                  <p className="text-sm text-center text-[#525252]">C, Java, R</p>
                </div>

                <div className="flex flex-col items-center">
                  <Server className="w-8 h-8 mb-2" />
                  <h4 className="font-medium mb-2">Backend</h4>
                  <p className="text-sm text-center text-[#525252]">Python, SQL</p>
                </div>

                <div className="flex flex-col items-center">
                  <Cloud className="w-8 h-8 mb-2" />
                  <h4 className="font-medium mb-2">Cloud</h4>
                  <p className="text-sm text-center text-[#525252]">AWS</p>
                </div>

                <div className="flex flex-col items-center">
                  <Smartphone className="w-8 h-8 mb-2" />
                  <h4 className="font-medium mb-2">Mobile</h4>
                  <p className="text-sm text-center text-[#525252]">React Native, Flutter</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-2xl font-bold text-center mb-12">My Projects</h2>

          <ProjectCarousel
            projects={[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution built with React and Node.js",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
              {
                title: "AI Chat Application",
                description: "Real-time chat app with AI integration using Socket.io",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
              {
                title: "Portfolio Website",
                description: "Personal portfolio built with modern web technologies",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
              {
                title: "Task Management App",
                description: "A productivity app with drag-and-drop interface",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
              {
                title: "Weather Dashboard",
                description: "Real-time weather data visualization using APIs",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
              {
                title: "Social Media Analytics",
                description: "Data visualization dashboard for social media metrics",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
              {
                title: "Social Media Analytics",
                description: "Data visualization dashboard for social media metrics",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
            ]}
          />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-2xl font-bold text-center mb-12">Get In Touch</h2>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-[#e5e5e5] rounded-full">
                <span className="text-lg">✉️</span>
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-[#525252]">dominickalbert@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-[#e5e5e5] rounded-full">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium">LinkedIn</p>
                <p className="text-sm text-[#525252]">Dominick Albert Setiawan</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[#525252] border-t border-[#e5e5e5] mt-12">
        <p>© 2025 John Doe. All rights reserved.</p>
        <p className="mt-1">This website was created with the help of AI technology</p>
      </footer>
    </div>
  )
}