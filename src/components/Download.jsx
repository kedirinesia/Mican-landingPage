import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download as DownloadIcon, Smartphone } from 'lucide-react'

const Download = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="download" className="py-32 bg-mican-gray relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 40% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 30%, rgba(255,255,255,0.02) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold"
          >
            Download{' '}
            <span className="gradient-text">Mican</span>{' '}
            Sekarang
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-mican-text max-w-3xl mx-auto leading-relaxed"
          >
            Bergabunglah dengan ribuan klien yang telah merasakan layanan profesional terbaik
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* App Store */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <motion.div
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
                }}
                className="bg-black border border-white/20 rounded-2xl p-4 hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
                  >
                    <Smartphone size={24} className="text-black" />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-white font-semibold">Download on the</p>
                    <p className="text-white text-xl font-bold">App Store</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Google Play */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <motion.div
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
                }}
                className="bg-black border border-white/20 rounded-2xl p-4 hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ rotate: -5 }}
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
                  >
                    <DownloadIcon size={24} className="text-black" />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-white font-semibold">GET IT ON</p>
                    <p className="text-white text-xl font-bold">Google Play</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-12 py-4"
            >
              Mulai Sekarang - Gratis!
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 12, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-16 w-8 h-8 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 right-16 w-6 h-6 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2.5
          }}
          className="absolute top-1/2 left-20 w-5 h-5 bg-white rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            y: [0, -35, 0],
            rotate: [0, -6, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-24 w-4 h-4 bg-white rounded-full opacity-25"
        />
      </div>
    </section>
  )
}

export default Download
