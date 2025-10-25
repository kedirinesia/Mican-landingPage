import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react'
import logoMican from '/logoMican.png'

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  const footerSections = [
    {
      title: 'Produk',
      links: [
        { name: 'Fitur', href: '#' },
        { name: 'Premium', href: '#' },
        { name: 'Keamanan', href: '#' },
        { name: 'FAQ', href: '#' }
      ]
    },
    {
      title: 'Perusahaan',
      links: [
        { name: 'Tentang Kami', href: '#' },
        { name: 'Karir', href: '#' },
        { name: 'Berita', href: '#' },
        { name: 'Kontak', href: '#' }
      ]
    },
    {
      title: 'Dukungan',
      links: [
        { name: 'Bantuan', href: '#' },
        { name: 'Kebijakan Privasi', href: '#' },
        { name: 'Syarat & Ketentuan', href: '#' },
        { name: 'Komunitas', href: '#' }
      ]
    }
  ]

  return (
    <footer className="bg-mican-black py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.01) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.01) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center mb-6"
            >
              <img 
                src={logoMican} 
                alt="Mican Logo" 
                className="h-12 w-auto"
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-mican-text leading-relaxed mb-6"
            >
              Platform sewa pacar profesional terpercaya untuk berbagai acara
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    backgroundColor: '#ffffff',
                    color: '#000000'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-mican-border border border-white/20 rounded-full flex items-center justify-center text-white hover:border-white/40 transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h4
                whileHover={{ color: '#ffffff' }}
                className="text-xl font-semibold text-white hover:text-white transition-colors duration-300"
              >
                {section.title}
              </motion.h4>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + sectionIndex * 0.2 + linkIndex * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ 
                        x: 5,
                        color: '#ffffff'
                      }}
                      className="text-mican-text hover:text-white transition-all duration-300"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-mican-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-mican-text text-center md:text-left"
            >
              &copy; 2025 Mican. Semua hak dilindungi.
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-mican-text"
            >
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>in Indonesia</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-16 left-20 w-6 h-6 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -12, 0]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-16 right-20 w-5 h-5 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/2 left-32 w-4 h-4 bg-white rounded-full opacity-30"
        />
      </div>
    </footer>
  )
}

export default Footer
