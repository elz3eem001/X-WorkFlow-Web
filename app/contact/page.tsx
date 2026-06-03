"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", "3614b489-15f3-494b-869a-2d57626a5037")
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData })
      if (r.ok) { setIsSubmitted(true); form.reset() }
    } catch (err) { console.error(err) }
    finally { setIsSubmitting(false) }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">تواصل معنا</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">نحن هنا لمساعدتك. تواصل معنا في أي وقت.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a href="mailto:elz3eemx@gmail.com" className="rounded-xl border border-border bg-card p-8 text-center hover:border-accent/50 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 mx-auto mb-6">
                <Mail className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-xl font-bold mb-3">البريد الإلكتروني</h2>
              <p className="text-muted-foreground mb-4">راسلنا وسنرد عليك في أقرب وقت</p>
              <p className="text-accent font-mono text-sm">elz3eemx@gmail.com</p>
            </a>
            <a href="https://wa.me/201015675272" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-card p-8 text-center hover:border-accent/50 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-green-500/10 mx-auto mb-6">
                <MessageCircle className="h-7 w-7 text-green-500" />
              </div>
              <h2 className="text-xl font-bold mb-3">الدعم الفني (واتساب)</h2>
              <p className="text-muted-foreground mb-4">للاستفسارات التقنية والمساعدة</p>
              <p className="text-green-500 font-mono text-sm" dir="ltr">+20 10 1567 5272</p>
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">أرسل رسالة</h2>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">تم إرسال رسالتك بنجاح!</h3>
                <p className="text-muted-foreground mb-6">سنرد عليك في أقرب وقت ممكن.</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">إرسال رسالة أخرى</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">الاسم</label>
                    <input type="text" id="name" name="name" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder="اسمك الكامل" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                    <input type="email" id="email" name="email" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder="example@email.com" dir="ltr" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">الرسالة</label>
                  <textarea id="message" name="message" required rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none" placeholder="اكتب رسالتك هنا..." />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? <>جاري الإرسال...</> : <><Send className="h-4 w-4" /> إرسال الرسالة</>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
