import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  { number: '01', title: 'Learn Python + AWS', desc: 'Days 1-4: Master Core Python programming. Days 5-10: Automate AWS Cloud infrastructure with Boto3.', detail: 'Build the mental model of using Python as a cloud automation weapon.', color: '#e63946' },
  { number: '02', title: 'Automate Real Cloud Infra', desc: 'Launch EC2 instances, manage S3 buckets, trigger Lambda functions, send SNS notifications — all with Python code.', detail: 'Every session is a lab. You ship working AWS automation, not just exercises.', color: '#ff4d5a' },
  { number: '03', title: 'Build Production Systems', desc: 'Health monitoring, backup automation, cloud inventory managers, AI-powered apps — production-grade projects.', detail: 'Graduate with skills to run cloud operations at any scale.', color: '#e63946' },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px]" style={{ background: 'radial-gradient(ellipse, rgba(230,57,70,0.05) 0%, transparent 65%)' }} /></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-16 text-center">
            <SectionHeading label="How It Works" title="Python → AWS → Production." highlight="Production." subtitle="Three phases that take you from zero to deploying real cloud automation." />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 150}>
              <motion.div
                className="relative flex flex-col h-full rounded-2xl p-7 group cursor-pointer overflow-hidden"
                style={{ background: 'rgba(26,26,26,0.9)', border: '1.5px solid rgba(255,255,255,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
                whileHover={{ scale: 1.03, y: -8, boxShadow: '0 20px 40px rgba(230,57,70,0.15), 0 0 0 1px rgba(230,57,70,0.3)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Animated corner glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${step.color}20, transparent 70%)` }} />
                <div className="absolute bottom-0 left-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at bottom left, ${step.color}10, transparent 70%)` }} />

                {/* Step number — top right */}
                <div className="absolute top-5 right-5 text-xs font-black tracking-widest font-mono opacity-30 group-hover:opacity-60 transition-opacity" style={{ color: step.color }}>{step.number}</div>

                {/* Animated icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${step.color}12`, border: `1.5px solid ${step.color}30`, color: step.color }}
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-black text-white mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">{step.desc}</p>

                {/* Detail pill with animated border */}
                <div className="rounded-xl px-4 py-3 text-xs leading-relaxed font-medium relative overflow-hidden" style={{ color: step.color, background: `${step.color}0D`, border: `1px solid ${step.color}25` }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${step.color}10, transparent)`, animation: 'shimmer 3s linear infinite' }} />
                  <span className="relative z-10">{step.detail}</span>
                </div>

                {/* Bottom accent line — animated width on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />
                </div>

                {/* Floating particles on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ background: step.color, animationDelay: '0s' }} />
                <div className="absolute top-1/3 left-1/4 w-0.5 h-0.5 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping" style={{ background: step.color, animationDelay: '0.3s' }} />
                <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping" style={{ background: step.color, animationDelay: '0.6s' }} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Connecting arrows between cards — desktop */}
        <div className="hidden lg:flex absolute top-[calc(50%+40px)] left-0 right-0 pointer-events-none justify-around px-[calc(33.33%/2)]">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="flex items-center gap-1"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
            >
              <div className="w-8 h-px" style={{ background: 'rgba(230,57,70,0.4)' }} />
              <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </motion.div>
          ))}
        </div>

        {/* Stats bar with counter animation */}
        <AnimatedSection>
          <motion.div
            className="mt-12 glass rounded-2xl p-6 grid grid-cols-3 gap-4 text-center"
            whileHover={{ borderColor: 'rgba(230,57,70,0.3)' }}
          >
            {[
              { value: '10', label: 'Days of Learning' },
              { value: '5', label: 'Cloud Projects' },
              { value: '100%', label: 'Practical Output' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <motion.div
                  className="text-2xl sm:text-3xl font-black"
                  style={{ color: '#e63946' }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-text-secondary text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
