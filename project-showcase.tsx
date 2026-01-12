"use client"

import { Card } from "@/components/ui/card"
import { ArrowUpRight, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Lumina Brand Identity",
    description:
      "Complete brand identity system for a luxury wellness brand including logo, typography, and visual guidelines.",
    category: "Branding",
    image:
      "https://placehold.co/800x600?text=Lumina+Brand+Identity+luxury+wellness+spa+brand+logo+design+elegant+typography+gold+accents+minimal+modern+aesthetic",
  },
  {
    id: 2,
    title: "TechFlow Dashboard",
    description: "Modern SaaS dashboard design with intuitive data visualization and seamless user experience.",
    category: "UI/UX Design",
    image:
      "https://placehold.co/800x600?text=TechFlow+Dashboard+modern+SaaS+interface+data+visualization+charts+graphs+clean+UI+dark+mode+analytics",
  },
  {
    id: 3,
    title: "Urban Coffee Website",
    description:
      "E-commerce website for artisan coffee roasters featuring immersive product photography and storytelling.",
    category: "Web Design",
    image:
      "https://placehold.co/800x600?text=Urban+Coffee+Website+artisan+coffee+roasters+ecommerce+product+photography+warm+brown+tones+rustic+aesthetic",
  },
  {
    id: 4,
    title: "Fitness App Redesign",
    description: "Mobile app redesign focusing on motivation, progress tracking, and community engagement.",
    category: "App Design",
    image:
      "https://placehold.co/800x600?text=Fitness+App+Redesign+mobile+workout+tracking+progress+charts+vibrant+colors+modern+UI+motivational+interface",
  },
  {
    id: 5,
    title: "Eco Fashion Campaign",
    description:
      "Visual campaign for sustainable fashion brand emphasizing environmental consciousness and ethical production.",
    category: "Art Direction",
    image:
      "https://placehold.co/800x600?text=Eco+Fashion+Campaign+sustainable+clothing+natural+earth+tones+green+leaves+organic+textures+ethical+fashion",
  },
  {
    id: 6,
    title: "Minimalist Portfolio",
    description:
      "Clean and sophisticated portfolio design for an architectural photographer showcasing stunning compositions.",
    category: "Portfolio Design",
    image:
      "https://placehold.co/800x600?text=Minimalist+Portfolio+architectural+photography+modern+buildings+concrete+structures+black+white+photography+clean+layout",
  },
]

export function ProjectShowcase() {
  return (
    <section id="work" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated selection of projects showcasing creativity, strategy, and exceptional execution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border border-teal-200/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 via-teal-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Case Study
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold text-black mt-2 mb-2 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 hover:border-black text-black rounded-full font-semibold transition-all hover:shadow-lg">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
