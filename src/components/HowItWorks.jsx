import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, CreditCard, Users } from 'lucide-react'

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Pilih Pendamping',
      description: 'Browse dan pilih pendamping profesional yang sesuai dengan kebutuhan acara Anda'
    },
    {
      number: 2,
      icon: CreditCard,
      title: 'Booking & Bayar',
      description: 'Pilih tanggal, waktu, dan durasi. Lakukan pembayaran yang aman dan terjamin'
    },
    {
      number: 3,
      icon: Users,
      title: 'Nikmati Acara',
      description: 'Pendamping profesional akan menemani Anda dengan layanan terbaik sesuai kebutuhan'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="how-it-works" className="py-32 bg-mican-gray relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.01) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 60%, rgba(255,255,255,0.02) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.01) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            Bagaimana Cara{' '}
            <span className="gradient-text">Kerjanya?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-mican-text max-w-3xl mx-auto leading-relaxed"
          >
            Langkah sederhana untuk menyewa pendamping profesional
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="text-center group"
            >
              {/* Step Number */}
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                className="relative mb-8"
              >
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.1)",
                      "0 0 30px rgba(255,255,255,0.2)",
                      "0 0 20px rgba(255,255,255,0.1)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto relative z-10"
                >
                  <step.icon size={32} className="text-black" />
                </motion.div>
                
                {/* Number Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-black border-2 border-white rounded-full flex items-center justify-center"
                >
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </motion.div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 1 + index * 0.3, duration: 0.8 }}
                    className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-white/50 to-transparent origin-left"
                  />
                )}
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <motion.h3
                  whileHover={{ color: "#ffffff" }}
                  className="text-2xl font-semibold text-white group-hover:text-white transition-colors duration-300"
                >
                  {step.title}
                </motion.h3>
                <p className="text-mican-text leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
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
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-32 left-16 w-5 h-5 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -35, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-32 right-16 w-7 h-7 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 6, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute top-1/3 right-32 w-4 h-4 bg-white rounded-full opacity-30"
        />
      </div>
    </section>
  )
}

export default HowItWorks
