import React from 'react'
import { motion } from 'framer-motion'
import { Download, Play, Heart, Calendar, MessageCircle } from 'lucide-react'
import fotoBeth from '/assets/fotoBeth.jpg'

const Hero = () => {
  const stats = [
    { number: '5K+', label: 'Pendamping Profesional' },
    { number: '50K+', label: 'Acara Berhasil' },
    { number: '98%', label: 'Kepuasan Klien' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            Sewa{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="gradient-text relative"
            >
              Pacar Profesional
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-white"
              />
            </motion.span>
            <br />
            di Mican
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-mican-text leading-relaxed max-w-2xl"
          >
            Platform sewa pacar terpercaya dengan pendamping profesional untuk berbagai acara. 
            Temukan pendamping ideal untuk momen spesial Anda!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-3"
            >
              <Download size={20} />
              Download App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-3"
            >
              <Play size={20} />
              Lihat Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                className="text-center"
              >
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.2, duration: 0.8, type: "spring" }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-mican-text font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - iPhone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotateY: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="w-80 h-[500px] bg-mican-gray rounded-[2.5rem] p-3 shadow-2xl border border-mican-border">
              {/* Phone Screen */}
              <div className="w-full h-full bg-black rounded-[2rem] p-4 relative overflow-hidden">
                {/* Profile Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 h-full flex flex-col items-center justify-center space-y-4"
                >
                  {/* Profile Image */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 20px rgba(255,255,255,0.1)",
                        "0 0 30px rgba(255,255,255,0.2)",
                        "0 0 20px rgba(255,255,255,0.1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative"
                  >
                    <img 
                      src={fotoBeth} 
                      alt="Beth Profile" 
                      className="w-24 h-24 rounded-full object-cover border-3 border-white/20 shadow-xl"
                    />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20"
                    />
                  </motion.div>

                  {/* Profile Info */}
                  <div className="text-center space-y-1">
                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 0.6 }}
                      className="text-lg font-bold text-white"
                    >
                      Beth, 25
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2, duration: 0.6 }}
                      className="text-mican-text text-sm"
                    >
                      Pendamping Profesional
                    </motion.p>
                  </div>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4, duration: 0.6 }}
                    className="flex items-center space-x-1"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.6 + i * 0.1, duration: 0.3 }}
                      >
                        <Heart size={14} className="text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                    <span className="text-mican-text ml-2 text-xs font-semibold">4.9</span>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 0.6 }}
                    className="flex space-x-3 w-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-white text-black py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg text-sm"
                    >
                      <Calendar size={14} />
                      Sewa
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg text-sm"
                    >
                      <MessageCircle size={14} />
                      Chat
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-yellow-600 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
