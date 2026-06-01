"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, CheckCircle2, Zap } from "lucide-react"

export function HeroSection() {
  const [displayedText1, setDisplayedText1] = useState("")
  const [displayedText2, setDisplayedText2] = useState("")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const text1 = "نظام إدارة"
  const text2 = "مشاريع المصممين"

  useEffect(() => {
    let currentIndex = 0
    const fullText = text1 + "|" + text2

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        const currentChar = fullText.substring(0, currentIndex)
        const parts = currentChar.split("|")
        setDisplayedText1(parts[0] || "")
        setDisplayedText2(parts[1] || "")
        currentIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface GridDot {
      x: number
      y: number
      direction: "horizontal" | "vertical"
      speed: number
      size: number
      opacity: number
      color: string
      targetX: number
      targetY: number
      trail: { x: number; y: number }[]
    }

    const colors = ["rgba(230, 156, 58, 0.6)"]
    const gridSize = 64
    const dotCount = 25

    const snapToGrid = (value: number) => Math.round(value / gridSize) * gridSize

    const gridDots: GridDot[] = []

    for (let i = 0; i < dotCount; i++) {
      const isHorizontal = Math.random() > 0.5
      const x = snapToGrid(Math.random() * canvas.offsetWidth)
      const y = snapToGrid(Math.random() * canvas.offsetHeight)

      gridDots.push({
        x,
        y,
        direction: isHorizontal ? "horizontal" : "vertical",
        speed: Math.random() * 9 + 7.5,
        size: Math.random() * 2 + 2,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        targetX: x,
        targetY: y,
        trail: [],
      })
    }

    let animationId: number
    let lastTime = 0
    const frameInterval = 1000 / 30

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate)

      const deltaTime = currentTime - lastTime
      if (deltaTime < frameInterval) return
      lastTime = currentTime - (deltaTime % frameInterval)

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      gridDots.forEach((dot) => {
        dot.trail.unshift({ x: dot.x, y: dot.y })
        if (dot.trail.length > 10) dot.trail.pop()

        if (dot.direction === "horizontal") {
          if (Math.abs(dot.x - dot.targetX) < dot.speed) {
            dot.x = dot.targetX
            if (Math.random() > 0.7) {
              dot.direction = "vertical"
              const steps = Math.floor(Math.random() * 5) + 1
              dot.targetY = dot.y + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize
            } else {
              const steps = Math.floor(Math.random() * 8) + 2
              dot.targetX = dot.x + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize
            }
          } else {
            dot.x += dot.x < dot.targetX ? dot.speed : -dot.speed
          }
        } else {
          if (Math.abs(dot.y - dot.targetY) < dot.speed) {
            dot.y = dot.targetY
            if (Math.random() > 0.7) {
              dot.direction = "horizontal"
              const steps = Math.floor(Math.random() * 8) + 2
              dot.targetX = dot.x + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize
            } else {
              const steps = Math.floor(Math.random() * 5) + 1
              dot.targetY = dot.y + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize
            }
          } else {
            dot.y += dot.y < dot.targetY ? dot.speed : -dot.speed
          }
        }

        if (dot.x < -gridSize) {
          dot.x = canvas.offsetWidth + gridSize
          dot.targetX = dot.x
          dot.trail = []
        }
        if (dot.x > canvas.offsetWidth + gridSize) {
          dot.x = -gridSize
          dot.targetX = dot.x
          dot.trail = []
        }
        if (dot.y < -gridSize) {
          dot.y = canvas.offsetHeight + gridSize
          dot.targetY = dot.y
          dot.trail = []
        }
        if (dot.y > canvas.offsetHeight + gridSize) {
          dot.y = -gridSize
          dot.targetY = dot.y
          dot.trail = []
        }

        if (dot.trail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          for (let i = 0; i < dot.trail.length; i++) {
            ctx.lineTo(dot.trail[i].x, dot.trail[i].y)
          }
          ctx.strokeStyle = dot.color
          ctx.globalAlpha = dot.opacity * 0.4
          ctx.lineWidth = dot.size
          ctx.lineCap = "round"
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.globalAlpha = dot.opacity * 0.15
        ctx.fill()

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.globalAlpha = dot.opacity
        ctx.fill()
      })

      ctx.globalAlpha = 1
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_40%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl relative">
            <span className="invisible" aria-hidden="true">
              <span className="text-balance">نظام إدارة</span>
              <br />
              <span className="text-balance">مشاريع المصممين</span>
            </span>

            <span className="absolute inset-0 flex flex-col items-center">
              <span className="text-balance bg-gradient-to-r from-[#E69C3A] to-[#F0B156] bg-clip-text text-transparent">
                {displayedText1}
                {displayedText2 === "" && (
                  <span className="inline-block w-[3px] h-[0.9em] bg-accent mr-2 animate-pulse" />
                )}
              </span>
              <span className="text-balance bg-gradient-to-r from-[#E69C3A] to-[#F0B156] bg-clip-text text-transparent">
                {displayedText2}
                {displayedText2 !== "" && (
                  <span className="inline-block w-[3px] h-[0.9em] bg-accent mr-2 animate-pulse" />
                )}
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-12 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            برنامج متخصص لإدارة مشاريعك وعملائك وأوقاتك وأموالك، مصمم خصيصاً لاحتياجات المصممين المحترفين
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/download">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                حمّل البرنامج الآن
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">8 ميزات رئيسية</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">ترخيص مدى الحياة</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">تحديثات مجانية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
