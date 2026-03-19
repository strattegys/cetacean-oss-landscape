export function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 bg-ocean-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" />
                <path d="M12 16v-4" />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-white">Cetacean Labs</span>
              <p className="text-xs text-slate-500">AI Infrastructure for the Autonomous Economy</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="https://oceanicai.io" target="_blank" rel="noopener" className="hover:text-cyan-400 transition-colors">OceanicAI</a>
            <a href="https://cetaceanlabs.com" target="_blank" rel="noopener" className="hover:text-cyan-400 transition-colors">Cetacean Labs</a>
            <a href="https://www.strattegys.com/are-you-paying-attention-to-attention-is-all-you-need/" target="_blank" rel="noopener" className="hover:text-cyan-400 transition-colors">Research</a>
          </div>

          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Cetacean Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
