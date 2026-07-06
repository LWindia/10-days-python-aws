import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const whoIsItFor = [
  {
    title: 'Students',
    desc: 'Class 11/12, BCA, B.Tech, MCA — build cloud projects before you graduate',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    gradient: 'from-yellow-500/20 to-orange-500/10',
    borderColor: 'rgba(234,179,8,0.3)',
    iconBg: 'rgba(234,179,8,0.12)',
  },
  {
    title: 'Complete Beginners',
    desc: 'No programming or cloud background needed. We start from absolute zero.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    gradient: 'from-green-500/20 to-emerald-500/10',
    borderColor: 'rgba(34,197,94,0.3)',
    iconBg: 'rgba(34,197,94,0.12)',
  },
  {
    title: 'Job Seekers',
    desc: 'Stand out with Python + AWS projects and hands-on cloud skills',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    gradient: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'rgba(59,130,246,0.3)',
    iconBg: 'rgba(59,130,246,0.12)',
  },
  {
    title: 'Working Professionals',
    desc: 'Add cloud automation skills to accelerate your career growth',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    gradient: 'from-purple-500/20 to-violet-500/10',
    borderColor: 'rgba(168,85,247,0.3)',
    iconBg: 'rgba(168,85,247,0.12)',
  },
]

export default function WhoIsItForSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]" style={{ background: 'radial-gradient(ellipse, rgba(230,57,70,0.04) 0%, transparent 65%)' }} /></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection><div className="flex flex-col items-center mb-12"><SectionHeading label="Who This Is For" title="Built for Dreamers & Doers" highlight="Dreamers & Doers" subtitle="Whether you're a student or a professional, this program meets you where you are." /></div></AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whoIsItFor.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 120}>
              <motion.div
                className="relative rounded-2xl p-6 flex flex-col gap-4 h-full group cursor-pointer overflow-hidden"
                style={{ background: 'rgba(26,26,26,0.9)', border: `1.5px solid rgba(255,255,255,0.06)`, boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
                whileHover={{ y: -8, scale: 1.02, borderColor: item.borderColor, boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 30px ${item.borderColor}` }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Icon with animated bounce */}
                <motion.div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: item.iconBg, border: `1.5px solid ${item.borderColor}` }}
                  whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Animated bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ background: `linear-gradient(90deg, transparent, ${item.borderColor}, transparent)` }} />
                </div>

                {/* Corner glow */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl" style={{ background: item.borderColor }} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
