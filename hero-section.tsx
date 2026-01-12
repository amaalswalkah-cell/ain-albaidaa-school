"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="triangles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="50,0 100,100 0,100" fill="currentColor" className="text-teal-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-teal-200 bg-teal-50/50 mb-8 animate-fade-in-up">
          <Star className="w-4 h-4 text-teal-600 fill-teal-600" />
          <span className="text-sm font-semibold text-teal-900">Award-Winning Designer</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black max-w-5xl mx-auto mb-6 leading-[1.1] text-balance animate-fade-in-up animation-delay-100">
          Crafting Visual Stories That Matter
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed text-pretty animate-fade-in-up animation-delay-200">
          From branding to UI/UX, I bring ideas to life with creativity and precision.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-up animation-delay-300">
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-500 text-white rounded-full px-8 h-14 text-lg shadow-xl shadow-teal-600/30 group"
          >
            View Portfolio
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 hover:border-black text-black rounded-full px-8 h-14 text-lg bg-transparent"
          >
            Get Quote
          </Button>
        </div>

        {/* Additional Info */}
        <p className="text-sm text-gray-500 animate-fade-in-up animation-delay-400">
          Free consultation • Fast turnaround
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-teal-600 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
