import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              تواصل معنا
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              يسعدنا تواصلك معنا لأي استفسار أو اقتراح
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mx-auto mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">البريد الإلكتروني</h3>
              <p className="text-sm text-muted-foreground">support@x-workflow.com</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">الدعم الفني</h3>
              <p className="text-sm text-muted-foreground">متاح عبر الواتساب</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mx-auto mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">مصر</h3>
              <p className="text-sm text-muted-foreground">القاهرة</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
