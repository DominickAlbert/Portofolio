import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, HelpCircle, Download, Server, Code, Cloud, Smartphone } from "lucide-react"
import { ProjectCarousel } from "@/components/project-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5]">
        <div className="text-lg font-medium">Portfolio</div>
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
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden">
            <Image
              src="/Foto.JPG"
              alt="Profile Avatar"
              width={160}
              height={160}
              className="w-full h-full object-cover object-[55%_10%]"
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
                title: "Hate Speech Detection",
                description:
                  "A Python-based AI project leveraging scikit-learn and Gradio to detect hate speech in text data. Collaborated with a team to preprocess unstructured Kaggle data (cleaning, tokenization, normalization) and trained models to achieve 80-90% accuracy. Explored NLP techniques like TF-IDF vectorization and experimented with classifiers, which deepened my understanding of AI workflows and data preprocessing challenges.",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
              {
                title: "Comparing Hate Speech Detection Models (ICSET Paper)",
                description:
                  "Co-authored a research paper comparing machine learning models (SVM, Random Forest, Logistic Regression, etc.) trained on original vs. translated Indonesian hate speech datasets. Published findings at ICSET, gaining experience in academic writing and cross-lingual AI challenges.",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
              {
                title: "Immunify (Vaccination App)",
                description:
                  "Developed a React Native mobile app to streamline vaccination tracking for parents, with features like vaccine scheduling, reminders, and child profile management. Led UI/UX design using Figma and implemented the frontend, integrating Firebase for backend services (authentication, cloud storage). This projects help me deepen my understanding on mobile development.",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
              {
                title: "Garbage Classification (Computer Vision)",
                description:
                  "Built a PyTorch-powered image classifier using a ResNet50 architecture to categorize waste into types like metal, glass, and plastic. Transitioned from traditional ML approaches (which underperformed) to deep learning, achieving 90% accuracy. This project helps me to gain hands-on experience with convolutional neural networks and computer vision workflows.",
                imageUrl: "/placeholder.svg?height=160&width=300",
                codeUrl: "#",
              },
              {
                title: "Financial Data Cluster Analysis",
                description:
                  "Used R to perform cluster analysis on banking data, aiming to segment customers based on term deposit subscription patterns. Transformed classification data into clusters by isolating “yes/no” subsets, uncovering insights like demographic preferences and financial behavior trends. With it finally delivering actionable recommendations for targeted marketing campaigns.",
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