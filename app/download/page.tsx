import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, Monitor, CheckCircle2 } from "lucide-react"

const DOWNLOAD_URL = "https://release-assets.githubusercontent.com/github-production-release-asset/1253711537/5d8498fc-2d63-45d7-8dbf-7fd3dadb9c17?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-06-01T19%3A47%3A33Z&rscd=attachment%3B+filename%3DX-WorkFlow-Setup-1.0.0.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-06-01T18%3A47%3A03Z&ske=2026-06-01T19%3A47%3A33Z&sks=b&skv=2018-11-09&sig=sQ3xVbBXp3ApV1uQM0cK0gv8hYEPvB7doNP5XFs3y%2F8%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4MDM0MjAzMCwibmJmIjoxNzgwMzQwMjMwLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.FpKPoTCi88JxCTQJZig3dpy3Wei_OhuvxJKDxTN6FF8&response-content-disposition=attachment%3B%20filename%3DX-WorkFlow-Setup-1.0.0.exe&response-content-type=application%2Foctet-stream"

const requirements = [
  "نظام التشغيل: Windows 10 أو أحدث",
  "المعالج: Intel Core i3 أو ما يعادله",
  "الذاكرة: 4 جيجابايت RAM",
  "مساحة التخزين: 200 ميجابايت",
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
              <a href={DOWNLOAD_URL} download="X-WorkFlow-Setup-1.0.0.exe">
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
