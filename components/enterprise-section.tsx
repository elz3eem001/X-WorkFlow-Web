import { Zap, Shield, Headphones, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "أمان عالي",
    description: "حماية عالية للبيانات والملفات مع التشفير الكامل.",
  },
  {
    icon: Headphones,
    title: "دعم فني متخصص",
    description: "دعم سريع من فريق متخصص في المصممين.",
  },
  {
    icon: Clock,
    title: "نسخ احتياطية",
    description: "نسخ احتياطية تلقائية وآمنة لجميع بيانات مشاريعك.",
  },
  {
    icon: FileText,
    title: "تحديثات مستمرة",
    description: "تحديثات ميزات جديدة وتحسينات دورية.",
  },
]

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="py-24 border-t border-border/40 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <Zap className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">المميزات الإضافية</span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">حماية وموثوقية</h2>
          <p className="mt-4 text-muted-foreground">
            أمان عالي ودعم فني متخصص لضمان راحتك أثناء العمل.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
          {enterpriseFeatures.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-accent/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-mono text-sm font-semibold">{feature.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
