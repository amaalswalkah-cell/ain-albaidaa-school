"use client"

import { Paintbrush, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Dribbble } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Brand Identity", href: "#" },
    { label: "UI/UX Design", href: "#" },
    { label: "Web Development", href: "#" },
    { label: "Art Direction", href: "#" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Dribbble, label: "Dribbble", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Paintbrush className="w-6 h-6 text-teal-600" />
              <span className="text-xl font-bold text-black">DesignStudio</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Crafting visual stories that matter. Award-winning creative services for ambitious brands.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hello@designstudio.com"
                className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@designstudio.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-black font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-black font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-black font-bold mb-4">Connect</h3>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-600 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            <p className="text-gray-600 text-sm mt-6 leading-relaxed">
              Follow me for daily design inspiration and creative insights.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2026 DesignStudio • Let's create something amazing.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-teal-600 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
