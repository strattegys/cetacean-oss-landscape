import { cn } from '../../utils/cn'

interface Props {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export function GlowButton({ children, href, onClick, variant = 'primary', className }: Props) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer'
  const styles = variant === 'primary'
    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-[0_0_20px_rgba(14,116,144,0.4)] hover:shadow-[0_0_30px_rgba(14,116,144,0.6)] hover:-translate-y-0.5'
    : 'border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50'

  if (href) {
    return (
      <a href={href} className={cn(base, styles, className)}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cn(base, styles, className)}>
      {children}
    </button>
  )
}
