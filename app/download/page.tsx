import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, Monitor, CheckCircle2 } from "lucide-react"

const DOWNLOAD_URL = "https://github.com/MrX-619/Mr-x/releases/download/v1.0.2/X-WorkFlow-Setup-1.0.2.exe"

const requirements = [
  "نظام التشغيل: Windows 10 أو أحدث",
  "المعالج: Intel Core i3 أو ما يعادله",
  "الذاكرة: 4 جيجابايت RAM",
  "مساحة التخزين: 350 ميجابايت",
]

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              تحميل البرنامج
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              حمّل X-WorkFlow وابدأ إدارة مشاريعك باحترافية
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 mx-auto mb-6">
              <Monitor className="h-10 w-10 text-accent" />
            </div>

            <h2 className="text-2xl font-bold mb-2">X-WorkFlow لـ Windows</h2>
            <p className="text-muted-foreground mb-8">الإصدار الأخير متوافق مع Windows 10/11</p>

            <Button size="lg" className="gap-2 mb-8" asChild>
              <a href={DOWNLOAD_URL} download="X-WorkFlow-Setup-1.0.1.exe">
                <Download className="h-5 w-5" />
                تحميل للـ Windows
              </a>
            </Button>

            <div className="border-t border-border pt-8">
              <h3 className="font-semibold mb-4">متطلبات النظام</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground text-right">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
