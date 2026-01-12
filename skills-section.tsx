"use client"

import { Pen, Palette, Code, Camera, Layers, Sparkles } from "lucide-react"

const skills = [
  {
    icon: Pen,
    title: "Brand Identity",
    description:
      "Creating memorable brands that resonate with your audience through strategic design and visual storytelling.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive and delightful user experiences that drive engagement and conversion.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, performant websites with modern technologies and best practices.",
  },
  {
    icon: Camera,
    title: "Art Direction",
    description: "Developing cohesive visual concepts that elevate your brand across all touchpoints.",
  },
  {
    icon: Layers,
    title: "Graphic Design",
    description: "Designing impactful visuals from marketing materials to social media assets.",
  },
  {
    icon: Sparkles,
    title: "Creative Strategy",
    description: "Aligning creative vision with business goals to deliver measurable results.",
  },
]

export function SkillsSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight">What I Do</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized services designed to bring your vision to life with precision and creativity.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-teal-200 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-teal-600 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
