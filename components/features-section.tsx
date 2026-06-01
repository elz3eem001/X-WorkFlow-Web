"use client"

import { LayoutDashboard, FolderKanban, Clock, BarChart3, Printer, FolderOpen, DollarSign, Settings } from "lucide-react"

const features = [
  {
    icon: LayoutDashboard,
    title: "الرئيسية",
    description: "لوحة معلومات شاملة لمتابعة أهم إحصائيات مشاريعك",
  },
  {
    icon: FolderKanban,
    title: "المشاريع والعملاء",
    description: "إدارة مشاريعك وعملائك بنظام كانبان سهل الاستخدام",
  },
  {
    icon: Clock,
    title: "إدارة الوقت",
    description: "تتبع الوقت المستغرق لكل مشروع مع جهاز بومودورو",
  },
  {
    icon: BarChart3,
    title: "تحليلات المصادر",
    description: "تحليل مفصل لمصادر عملائك ونسب التحويل",
  },
  {
    icon: Printer,
    title: "مقاسات الطباعة",
    description: "حاسبة مقاسات الطباعة والهوامش التلقائية",
  },
  {
    icon: FolderOpen,
    title: "ملفات العمل",
    description: "منظم لملفات المشاريع والأصول الخاصة بك",
  },
  {
    icon: DollarSign,
    title: "الأموال والتقارير",
    description: "إدارة الأموال والديون والتقارير المالية",
  },
  {
    icon: Settings,
    title: "الإعدادات والأسعار",
    description: "إدارة إعدادات البرنامج وأسعار خدماتك",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            الميزات الرئيسية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8 ميزات قوية لإدارة عملك بكفاءة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
