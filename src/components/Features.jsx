import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  UserCheck, 
  Shield, 
  CalendarCheck, 
  MapPin, 
  Star, 
  Headphones 
} from 'lucide-react'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: UserCheck,
      title: 'Pendamping Terverifikasi',
      description: 'Semua pendamping telah melalui verifikasi identitas dan background check untuk keamanan maksimal'
    },
    {
      icon: Shield,
      title: 'Keamanan Terjamin',
      description: 'Sistem keamanan berlapis dan perlindungan privasi untuk melindungi data pribadi Anda'
    },
    {
      icon: CalendarCheck,
      title: 'Booking Mudah',
      description: 'Proses booking yang sederhana dan cepat dengan konfirmasi real-time'
    },
    {
      icon: MapPin,
      title: 'Layanan Seluruh Indonesia',
      description: 'Layanan tersedia di seluruh kota besar Indonesia dengan pendamping lokal berkualitas'
    },
    {
      icon: Star,
      title: 'Rating & Review',
      description: 'Sistem rating dan review transparan untuk memastikan kualitas layanan terbaik'
    },
    {
      icon: Headphones,
      title: 'Customer Support 24/7',
      description: 'Tim customer support siap membantu Anda 24 jam sehari, 7 hari seminggu'
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
    <section id="features" className="py-32 bg-mican-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.02) 0%, transparent 50%)',
              'radial-gradient(circle at 90% 80%, rgba(255,255,255,0.01) 0%, transparent 50%)',
              'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.02) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            Mengapa Memilih{' '}
            <span className="gradient-text">Mican?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-mican-text max-w-3xl mx-auto leading-relaxed"
          >
            Platform sewa pacar profesional dengan layanan terbaik dan terpercaya
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
                }}
                className="card h-full"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-white/20 transition-all duration-300"
                >
                  <feature.icon size={32} className="text-black" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <motion.h3
                    whileHover={{ color: "#ffffff" }}
                    className="text-2xl font-semibold text-white group-hover:text-white transition-colors duration-300"
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-mican-text leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
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
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-6 h-6 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-20 w-3 h-3 bg-white rounded-full opacity-30"
        />
      </div>
    </section>
  )
}

export default Features
