import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Zap } from "lucide-react"

const updates = [
  {
    version: "1.0.0",
    date: "الإصدار الأول",
    changes: [
      "إطلاق البرنامج بجميع الميزات الأساسية",
      "نظام إدارة المشاريع والعملاء",
      "تتبع الوقت وتقنية البومودورو",
      "إدارة الأموال والتقارير المالية",
      "حاسبة مقاسات الطباعة",
      "تحليلات مصادر العملاء",
    ],
  },
]

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              التحديثات
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تابع آخر التحديثات والميزات الجديدة في X-WorkFlow
            </p>
          </div>

          <div className="space-y-8">
            {updates.map((update, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">الإصدار {update.version}</h2>
                    <p className="text-sm text-muted-foreground">{update.date}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {update.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
