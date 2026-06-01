import { Check, DollarSign, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 border-t border-border/40 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <DollarSign className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">التسعير</span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">ترخيص مدى الحياة</h2>
          <p className="mt-4 text-muted-foreground">دفعة واحدة فقط واحصل على البرنامج مدى الحياة مع جميع التحديثات المستقبلية.</p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="relative rounded-2xl border border-accent bg-card/50 p-12 text-center shadow-lg shadow-accent/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-full px-4 py-1.5 text-sm font-semibold text-accent-foreground bg-accent">
                الخيار الوحيد
              </span>
            </div>
            
            <h3 className="mt-4 font-mono text-2xl font-semibold">X-WorkFlow Pro</h3>
            
            <div className="mt-8 flex items-baseline justify-center gap-2">
              <span className="font-mono text-5xl font-bold text-accent">350</span>
              <span className="text-lg text-muted-foreground">جنيه مصري (لفترة محدودة)</span>
            </div>

            <p className="mt-4 text-base text-muted-foreground">
              السعر الاساسي: 500 جنيه
            </p>

            <ul className="mt-10 space-y-4 text-right">
              <li className="flex items-center gap-3 text-base">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>لوحة كانبان متقدمة للمشاريع والعملاء</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>تتبع الوقت وتقنية البومودورو</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>إدارة شاملة للأموال والفواتير</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>تحليلات وإحصائيات مفصلة</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>حاسبة مقاسات الطباعة</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>قاعدة بيانات العملاء والمشاريع</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>إدارة الأسعار والعروض</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>ملفات العمل والأرشيف المنظم</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>جميع التحديثات والميزات الجديدة مجاناً</span>
              </li>
            </ul>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link href="/download">
                <Button size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  اشترِ الآن وحمّل البرنامج
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 mx-auto max-w-4xl">
          <div className="rounded-lg border border-border/40 bg-card/30 p-6 text-center">
            <p className="text-sm font-semibold text-accent">مرة واحدة</p>
            <p className="mt-2 text-2xl font-bold">350 ج.م</p>
            <p className="mt-2 text-sm text-muted-foreground">دفع واحد فقط</p>
          </div>
          <div className="rounded-lg border border-border/40 bg-card/30 p-6 text-center">
            <p className="text-sm font-semibold text-accent">مدى الحياة</p>
            <p className="mt-2 text-2xl font-bold">∞</p>
            <p className="mt-2 text-sm text-muted-foreground">استخدام غير محدود</p>
          </div>
          <div className="rounded-lg border border-border/40 bg-card/30 p-6 text-center">
            <p className="text-sm font-semibold text-accent">التحديثات</p>
            <p className="mt-2 text-2xl font-bold">مجاني</p>
            <p className="mt-2 text-sm text-muted-foreground">جميع التحديثات الجديدة</p>
          </div>
        </div>
      </div>
    </section>
  )
}
