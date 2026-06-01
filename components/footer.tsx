import Link from "next/link"

const footerLinks = {
  المنتج: [
    { name: "الميزات", href: "/features" },
    { name: "التسعير", href: "/pricing" },
    { name: "التحميل", href: "/download" },
    { name: "التحديثات", href: "/updates" },
  ],
  الشركة: [
    { name: "من نحن", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight font-mono text-accent">X-WorkFlow</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              برنامج متخصص لإدارة مشاريع المصممين بسهولة وكفاءة عالية.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold">{title}</h3>
              <ul className="mt-4 space-y-2 text-right">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} X-WorkFlow. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
