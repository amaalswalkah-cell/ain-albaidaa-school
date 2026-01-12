"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600">
              Have a project in mind? Drop me a message and let's create something amazing.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px] border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-teal-600 hover:bg-teal-500 text-white h-14 text-lg rounded-full shadow-xl shadow-teal-600/30 group"
            >
              Send Message
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>

          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Or reach out directly:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:hello@designstudio.com" className="text-teal-600 font-semibold hover:underline">
                hello@designstudio.com
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+1234567890" className="text-teal-600 font-semibold hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
