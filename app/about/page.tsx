import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              من نحن
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تعرّف على قصة X-WorkFlow
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 sm:p-12">
            <div className="space-y-8 text-right">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">رسالتنا</h2>
                <p className="text-muted-foreground leading-relaxed">
                  X-WorkFlow هو برنامج متخصص لإدارة مشاريع المصممين، تم تطويره لتلبية الاحتياجات الفعلية للمصممين المحترفين في إدارة أعمالهم اليومية.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نسعى لتوفير أداة شاملة تساعد المصممين على تنظيم وقتهم ومشاريعهم وأموالهم في مكان واحد سهل الاستخدام.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">لماذا X-WorkFlow؟</h2>
                <p className="text-muted-foreground leading-relaxed">
                  لأننا نفهم احتياجات المصممين. البرنامج مصمم خصيصاً للمصممين العرب مع واجهة عربية كاملة ودعم RTL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
