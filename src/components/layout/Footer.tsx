import { Logo } from '../shared/Logo'

export function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 bg-ocean-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <span className="font-display font-bold text-white">Cetacean Labs</span>
              <p className="text-xs text-slate-500">AI Infrastructure for the Autonomous Economy</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="https://oceanicai.io" target="_blank" rel="noopener" className="hover:text-cyan-400 transition-colors">OceanicAI</a>
            <a href="https://cetaceanlabs.com" target="_blank" rel="noopener" className="hover:text-cyan-400 transition-colors">Cetacean Labs</a>
          </div>

          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Cetacean Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
