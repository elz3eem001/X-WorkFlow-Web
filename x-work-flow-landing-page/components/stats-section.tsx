const stats = [
  { value: "8", label: "ميزات رئيسية" },
  { value: "98%", label: "زيادة في الإنتاجية" },
  { value: "10 دقائق", label: "وقت الإعداد الأولي" },
  { value: "24/7", label: "دعم فني موثوق" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-center">
              <p className="font-mono font-bold tracking-tight text-5xl text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
