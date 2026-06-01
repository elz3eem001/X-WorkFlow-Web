import { LayoutGrid, Clock, BarChart3, Palette, DollarSign, Users, Settings, FileText } from "lucide-react"
import Link from "next/link"

const docCategories = [
  {
    icon: LayoutGrid,
    title: "البدء السريع",
    description: "دليل بدء سريع لتثبيت البرنامج في دقائق",
    links: ["التثبيت", "الإعداد الأولي", "أول مشروع"],
  },
  {
    icon: Clock,
    title: "تتبع الوقت",
    description: "شرح مفصل لتقنية البومودورو وتتبع الوقت",
    links: ["البومودورو", "جلسات العمل", "الإحصائيات"],
  },
  {
    icon: BarChart3,
    title: "التحليلات",
    description: "استخدام التحليلات والإحصائيات المتقدمة",
    links: ["المصادر", "الرسوم البيانية", "التقارير"],
  },
  {
    icon: DollarSign,
    title: "إدارة الأموال",
    description: "تتبع الفواتير والدخل وديون العملاء",
    links: ["الفواتير", "التقارير المالية", "الديون"],
  },
  {
    icon: LayoutGrid,
    title: "المشاريع",
    description: "إدارة المشاريع والعملاء بنظام كانبان",
    links: ["الكانبان", "العملاء", "المراحل"],
  },
  {
    icon: Settings,
    title: "الإعدادات",
    description: "تخصيص البرنامج حسب احتياجاتك",
    links: ["الأسعار", "العروض", "البيانات الشخصية"],
  },
]

export function DocsSection() {
  return (
    <section id="docs" className="py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <FileText className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">التوثيق</span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">كل ما تحتاج معرفته</h2>
          <p className="mt-4 text-muted-foreground">
            توثيق شامل يساعدك على البدء واستخدام جميع ميزات X-WorkFlow.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {docCategories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-card scale-100 hover:scale-105"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <category.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-mono font-semibold">{category.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              <ul className="mt-4 space-y-2 text-right">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="flex items-center justify-end gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link}
                      <FileText className="h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
