import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LayoutDashboard, FolderKanban, Clock, BarChart3, Printer, FolderOpen, DollarSign, Settings } from "lucide-react"

const features = [
  {
    icon: LayoutDashboard,
    title: "الرئيسية",
    description: "لوحة معلومات شاملة لمتابعة أهم إحصائيات مشاريعك وأدائك اليومي.",
  },
  {
    icon: FolderKanban,
    title: "المشاريع والعملاء",
    description: "إدارة مشاريعك وعملائك بنظام كانبان سهل الاستخدام مع تتبع حالة كل مشروع.",
  },
  {
    icon: Clock,
    title: "إدارة الوقت",
    description: "تتبع الوقت المستغرق لكل مشروع مع تقنية بومودورو المدمجة لزيادة الإنتاجية.",
  },
  {
    icon: BarChart3,
    title: "تحليلات المصادر",
    description: "تحليل مفصل لمصادر عملائك ونسب التحويل لمعرفة أفضل قنوات التسويق.",
  },
  {
    icon: Printer,
    title: "مقاسات الطباعة",
    description: "حاسبة مقاسات الطباعة والهوامش التلقائية لجميع أنواع المطبوعات.",
  },
  {
    icon: FolderOpen,
    title: "ملفات العمل",
    description: "منظم لملفات المشاريع والأصول الخاصة بك مع نظام بحث متقدم.",
  },
  {
    icon: DollarSign,
    title: "الأموال والتقارير",
    description: "إدارة الأموال والديون والتقارير المالية مع تتبع الفواتير والمدفوعات.",
  },
  {
    icon: Settings,
    title: "الإعدادات والأسعار",
    description: "إدارة إعدادات البرنامج وتحديد أسعار خدماتك والعروض الخاصة.",
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              الميزات الرئيسية
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8 ميزات قوية صممت خصيصاً لتلبية احتياجات المصممين المحترفين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-8 hover:border-accent/50 transition-colors"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 mb-6">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
