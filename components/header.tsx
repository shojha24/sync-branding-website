"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SyncIcon } from "./sync-logo"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <SyncIcon className="w-7 h-7 shrink-0" />
          <span className="text-xl font-bold tracking-tight leading-none translate-y-px">sync</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/privacy"
            className={`text-sm font-medium transition-colors ${
              pathname === "/privacy" ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className={`text-sm font-medium transition-colors ${
              pathname === "/terms" ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Terms
          </Link>
        </div>
      </nav>
    </header>
  )
}
