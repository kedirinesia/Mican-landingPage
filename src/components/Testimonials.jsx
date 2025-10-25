import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const scrollRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToTestimonial = (index) => {
    const container = scrollRef.current
    if (container) {
      const cardWidth = 320 + 24 // width + gap
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const scrollLeft = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1
    scrollToTestimonial(newIndex)
  }

  const scrollRight = () => {
    const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0
    scrollToTestimonial(newIndex)
  }

  const testimonials = [
    {
      content: "Layanan yang sangat profesional! Pendamping yang disediakan sangat ramah dan membantu acara kantor berjalan lancar.",
      author: "Budi",
      role: "CEO Startup",
      avatar: "B"
    },
    {
      content: "Sangat mudah digunakan dan proses booking-nya cepat. Pendamping yang profesional dan sesuai ekspektasi!",
      author: "Sari",
      role: "Event Organizer",
      avatar: "S"
    },
    {
      content: "Kualitas layanan sangat baik dan harga terjangkau. Customer support-nya juga responsif dan membantu!",
      author: "Andi",
      role: "Business Owner",
      avatar: "A"
    },
    {
      content: "Platform yang sangat recommended! Pendamping berkualitas tinggi dan proses transaksi aman. Sangat puas dengan layanannya.",
      author: "Rina",
      role: "Marketing Manager",
      avatar: "R"
    },
    {
      content: "Pengalaman luar biasa! Pendamping profesional yang membuat acara perusahaan kami berkesan. Highly recommended!",
      author: "Dedi",
      role: "HR Director",
      avatar: "D"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="testimonials" className="py-32 bg-mican-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.02) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(255,255,255,0.01) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.02) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            Testimoni{' '}
            <span className="gradient-text">Klien</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-mican-text max-w-3xl mx-auto leading-relaxed"
          >
            Dengarkan pengalaman dari klien yang puas dengan layanan kami
          </motion.p>
        </motion.div>

        {/* Testimonials Scrollable Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="p-3 bg-mican-gray border border-mican-border rounded-full hover:bg-mican-border transition-all duration-300"
            >
              <ChevronLeft size={20} className="text-white" />
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-white' : 'bg-mican-border'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              className="p-3 bg-mican-gray border border-mican-border rounded-full hover:bg-mican-border transition-all duration-300"
            >
              <ChevronRight size={20} className="text-white" />
            </motion.button>
          </div>

          {/* Scrollable Testimonials */}
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group flex-shrink-0 w-80 snap-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
                }}
                className="card h-full relative overflow-hidden min-h-[280px]"
              >
                {/* Content */}
                <div className="space-y-6">
                  {/* Quote Icon - Above Text */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    className="flex justify-center opacity-20"
                  >
                    <Quote size={24} className="text-white" />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                    className="text-mican-text leading-relaxed text-lg italic group-hover:text-gray-300 transition-colors duration-300"
                  >
                    "{testimonial.content}"
                  </motion.p>

                  {/* Author */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold"
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-mican-text text-sm">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.3 }
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"
                />

                {/* Decorative Elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 border border-white/20 rounded-full"
                />
                <motion.div
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: 5
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 border border-white/20 rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-24 left-12 w-6 h-6 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-24 right-12 w-5 h-5 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 6, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-24 w-4 h-4 bg-white rounded-full opacity-30"
        />
      </div>
    </section>
  )
}

export default Testimonials
