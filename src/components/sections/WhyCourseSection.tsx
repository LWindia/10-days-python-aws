import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const whyCourse = [
  {
    title: 'Python + AWS in 10 Days',
    desc: 'Learn Core Python AND AWS Cloud automation in one intensive program',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    iconBg: 'rgba(230,57,70,0.12)',
    iconBorder: 'rgba(230,57,70,0.3)',
    iconColor: '#e63946',
  },
  {
    title: 'Progressive Learning',
    desc: 'Days 1-4: Python mastery. Days 5-10: AWS Cloud automation. Zero overwhelm.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    iconBg: 'rgba(236,72,153,0.12)',
    iconBorder: 'rgba(236,72,153,0.3)',
    iconColor: '#ec4899',
  },
  {
    title: 'Real AWS Projects',
    desc: 'EC2, S3, Lambda, DynamoDB, CloudWatch, SNS — real cloud infrastructure',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    iconBg: 'rgba(99,102,241,0.12)',
    iconBorder: 'rgba(99,102,241,0.3)',
    iconColor: '#6366f1',
  },
  {
    title: 'AI Services on AWS',
    desc: 'Amazon Bedrock, Rekognition, Translate — build AI-powered apps with Python',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    iconBg: 'rgba(168,85,247,0.12)',
    iconBorder: 'rgba(168,85,247,0.3)',
    iconColor: '#a855f7',
  },
]

export default function WhyCourseSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute bottom-0 right-0 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.04) 0%, transparent 70%)' }} /></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection><div className="flex flex-col items-center mb-12"><SectionHeading label="Why This Program" title="This Isn't Just Another Course" highlight="Another Course" subtitle="Most courses teach syntax. We teach you to think like a developer and build things companies actually pay for." /></div></AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyCourse.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 100}>
              <motion.div
                className="relative rounded-2xl p-6 flex items-start gap-5 h-full group cursor-pointer overflow-hidden"
                style={{ background: 'rgba(26,26,26,0.9)', border: '1.5px solid rgba(255,255,255,0.06)', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
                whileHover={{ y: -4, boxShadow: `0 16px 40px rgba(0,0,0,0.5), 0 0 20px ${item.iconBorder}` }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at 30% 50%, ${item.iconBg}, transparent 70%)` }} />

                {/* Animated Icon */}
                <motion.div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: item.iconBg, border: `1.5px solid ${item.iconBorder}`, color: item.iconColor }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ border: `1.5px solid ${item.iconBorder}` }} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
