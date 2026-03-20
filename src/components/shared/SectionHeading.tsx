import { ScrollReveal } from './ScrollReveal'

interface Props {
  eyebrow: string
  title: string
  subtitle?: string
  eyebrowColor?: string
}

export function SectionHeading({ eyebrow, title, subtitle, eyebrowColor = 'text-cyan-400' }: Props) {
  return (
    <ScrollReveal className="text-center mb-12 md:mb-16">
      <span className={`font-mono text-xs tracking-[0.2em] uppercase ${eyebrowColor} block mb-4`}>
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
