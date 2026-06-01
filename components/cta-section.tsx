import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            جاهز لتنظيم عملك؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            حمّل X-WorkFlow الآن وابدأ إدارة مشاريعك بكفاءة.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/download">
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                حمّل البرنامج الآن
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
