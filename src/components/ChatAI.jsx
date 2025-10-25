import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'

const ChatAI = () => {
  const [open, setOpen] = useState(false)

  return createPortal(
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="self-end origin-bottom-right mb-3 w-[320px] sm:w-[360px] bg-black/90 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                  <MessageCircle size={16} className="text-black" />
                </div>
                <span className="font-semibold">AI Mican</span>
                <span className="ml-2 text-xs text-mican-text">(placeholder)</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-mican-text hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="max-h-64 overflow-y-auto p-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-black" />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-sm">
                  Halo! Ini adalah placeholder chat AI. Fitur interaktif akan tersedia segera.
                </div>
              </div>
            </div>

            <div className="p-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ketik pesan... (segera hadir)"
                  disabled
                  className="flex-1 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-mican-text px-3 py-2 opacity-70"
                />
                <button disabled className="rounded-xl bg-white text-black px-3 py-2 font-semibold flex items-center gap-2 opacity-70 cursor-not-allowed">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        aria-label="Buka chat AI"
        className="relative w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl border border-white/20"
      >
        <motion.span
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-white/10"
        />
        <MessageCircle size={22} className="relative" />
      </motion.button>
    </div>,
    document.body
  )
}

export default ChatAI
