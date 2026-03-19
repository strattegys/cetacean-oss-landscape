import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  radius: number
}

interface Particle {
  fromIdx: number
  toIdx: number
  progress: number
  speed: number
  color: string
}

export function AgentNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let w = 0
    let h = 0

    const colors = ['#22d3ee', '#06b6d4', '#10b981', '#f59e0b', '#8b5cf6', '#0e7490', '#14b8a6']

    const nodes: Node[] = []
    const particles: Particle[] = []
    const nodeCount = 18
    const particleCount = 25

    function resize() {
      w = canvas!.clientWidth
      h = canvas!.clientHeight
      canvas!.width = w * devicePixelRatio
      canvas!.height = h * devicePixelRatio
      ctx!.scale(devicePixelRatio, devicePixelRatio)
    }

    function initNodes() {
      nodes.length = 0
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          color: colors[i % colors.length],
          radius: 2 + Math.random() * 2,
        })
      }
    }

    function initParticles() {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        const from = Math.floor(Math.random() * nodeCount)
        let to = Math.floor(Math.random() * nodeCount)
        if (to === from) to = (to + 1) % nodeCount
        particles.push({
          fromIdx: from,
          toIdx: to,
          progress: Math.random(),
          speed: 0.002 + Math.random() * 0.004,
          color: nodes[from]?.color || colors[0],
        })
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      // Update nodes
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 250) {
            const alpha = (1 - dist / 250) * 0.08
            ctx!.beginPath()
            ctx!.strokeStyle = `rgba(14, 116, 144, ${alpha})`
            ctx!.lineWidth = 1
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.progress += p.speed
        if (p.progress >= 1) {
          p.progress = 0
          p.fromIdx = p.toIdx
          p.toIdx = Math.floor(Math.random() * nodeCount)
          if (p.toIdx === p.fromIdx) p.toIdx = (p.toIdx + 1) % nodeCount
          p.color = nodes[p.fromIdx]?.color || colors[0]
        }
        const from = nodes[p.fromIdx]
        const to = nodes[p.toIdx]
        if (!from || !to) continue
        const x = from.x + (to.x - from.x) * p.progress
        const y = from.y + (to.y - from.y) * p.progress
        ctx!.beginPath()
        ctx!.arc(x, y, 1.5, 0, Math.PI * 2)
        ctx!.fillStyle = p.color
        ctx!.globalAlpha = 0.6
        ctx!.fill()
        ctx!.globalAlpha = 1
      }

      // Draw nodes
      for (const node of nodes) {
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx!.fillStyle = node.color
        ctx!.globalAlpha = 0.4
        ctx!.fill()
        ctx!.globalAlpha = 1
      }

      raf = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resize()
      initNodes()
      initParticles()
    }

    handleResize()
    draw()

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
    />
  )
}
