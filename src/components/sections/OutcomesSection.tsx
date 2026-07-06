import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import CounterAnimation from '../ui/CounterAnimation'

const outcomes = [
  {
    title: 'AWS Cloud Automation',
    desc: 'Automate EC2, S3, Lambda, DynamoDB and more using Python & Boto3',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    iconBg: 'rgba(230,57,70,0.12)',
    iconBorder: 'rgba(230,57,70,0.35)',
    iconColor: '#e63946',
    highlight: true,
  },
  {
    title: 'Build Real Applications',
    desc: 'Graduate with 5+ production-ready AWS automation projects for your portfolio',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    iconBg: 'rgba(255,255,255,0.06)',
    iconBorder: 'rgba(255,255,255,0.12)',
    iconColor: '#a0a0a0',
    highlight: false,
  },
  {
    title: 'Industry-Ready Skills',
    desc: 'Master Python + AWS the way professionals use it in real cloud environments',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    iconBg: 'rgba(255,165,0,0.12)',
    iconBorder: 'rgba(255,165,0,0.3)',
    iconColor: '#ffa500',
    highlight: false,
  },
  {
    title: 'Free Project Based Learning Certificate',
    desc: 'Get a recognized internship certificate to boost your resume — completely free',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    iconBg: 'rgba(168,85,247,0.12)',
    iconBorder: 'rgba(168,85,247,0.3)',
    iconColor: '#a855f7',
    highlight: false,
  },
]

const stats = [
  { value: 10, label: 'Days', suffix: '', live: false },
  { value: 5, label: 'Cloud Projects', suffix: '', live: false },
  { value: 1200, label: 'Students Enrolled', suffix: '+', live: true },
  { value: 4.9, label: 'Average Rating', suffix: '★', live: false },
]

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, rgba(230,57,70,0.04) 0%, transparent 65%)' }} /></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection><div className="flex flex-col items-center mb-12"><SectionHeading label="Outcomes" title="What You'll Walk Away With" highlight="Walk Away With" subtitle="Graduate with real Python skills that put you ahead of 99% of beginners." /></div></AnimatedSection>

        {/* Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {outcomes.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 120}>
              <motion.div
                className={`relative rounded-2xl p-6 flex flex-col gap-4 h-full group cursor-pointer overflow-hidden`}
                style={{
                  background: 'rgba(26,26,26,0.9)',
                  border: item.highlight ? `2px solid rgba(230,57,70,0.4)` : '1.5px solid rgba(255,255,255,0.06)',
                  boxShadow: item.highlight ? '0 0 30px rgba(230,57,70,0.1), 0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.4)',
                }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 25px ${item.iconBorder}` }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Corner glow */}
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl pointer-events-none" style={{ background: item.iconColor }} />

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: item.iconBg, border: `1.5px solid ${item.iconBorder}`, color: item.iconColor }}
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-[0.95rem] mb-2 leading-snug group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Animated bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ background: `linear-gradient(90deg, transparent, ${item.iconColor}, transparent)` }} />
                </div>

                {/* First card red bottom line always visible */}
                {item.highlight && (
                  <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full" style={{ background: 'linear-gradient(90deg, #e63946, #ff4d5a, #e63946)' }} />
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Bar */}
        <AnimatedSection>
          <motion.div
            className="glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-1 group cursor-default"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-black"
                  style={{ color: '#e63946' }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {stat.live ? (
                    <CounterAnimation end={stat.value} suffix={stat.suffix} increment={1} incrementInterval={2500} />
                  ) : stat.value === 4.9 ? (
                    <>{stat.value}{stat.suffix}</>
                  ) : (
                    <CounterAnimation end={stat.value} suffix={stat.suffix} duration={1500} increment={0} incrementInterval={99999} />
                  )}
                </motion.div>
                <div className="text-text-secondary text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
