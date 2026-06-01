import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Download } from "lucide-react"

const features = [
  "جميع الميزات الـ 8 الرئيسية",
  "تحديثات مجانية مدى الحياة",
  "دعم فني متخصص",
  "نسخ احتياطية آمنة",
  "ترخيص شخصي دائم",
  "بدون اشتراك شهري",
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              التسعير
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              دفعة واحدة فقط، ترخيص مدى الحياة
            </p>
          </div>

          <div className="rounded-2xl border-2 border-accent bg-card p-8 sm:p-12 text-center">
            <div className="inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent mb-6">
              عرض لفترة محدودة
            </div>
            
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-6xl font-bold text-accent">350</span>
              <span className="text-xl text-muted-foreground">جنيه مصري</span>
            </div>
            
            <p className="text-muted-foreground mb-8">
              السعر الاساسي: 500 جنيه
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-right">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              اشترِ الآن وحمّل البرنامج
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
