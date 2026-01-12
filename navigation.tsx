"use client"

import { useState, useEffect } from "react"
import { Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Paintbrush className="w-6 h-6 text-teal-600 group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold text-black">DesignStudio</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-gray-600 hover:text-black transition-colors font-medium">
            Work
          </a>
          <a href="#about" className="text-gray-600 hover:text-black transition-colors font-medium">
            About
          </a>
          <a href="#services" className="text-gray-600 hover:text-black transition-colors font-medium">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black transition-colors font-medium">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <Button className="bg-teal-600 hover:bg-teal-500 text-white rounded-full px-6 shadow-lg shadow-teal-600/20">
          Hire Me
        </Button>
      </div>
    </nav>
  )
}
