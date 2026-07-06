import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glowOnHover?: boolean
}

export default function GlassCard({ children, className = '', glowOnHover = false }: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl transition-colors duration-300 ${glowOnHover ? 'hover:border-primary/40' : ''} ${className}`}
      whileHover={{ y: -6, scale: 1.02, boxShadow: '0 20px 40px rgba(230,57,70,0.12), 0 0 0 1px rgba(230,57,70,0.2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
