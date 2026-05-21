import Link from "next/link"
import { SyncLogo } from "./sync-logo"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <SyncLogo className="w-10 h-10 rounded-lg" />
              <span className="text-xl font-bold tracking-tight">sync</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Making it effortless to find time together with friends.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-primary">Legal</h4>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-primary">Contact</h4>
            <a href="mailto:sync.devx@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              sync.devx@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-primary">Social</h4>
            <a 
              href="https://instagram.com/syncofficial.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <a 
              href="https://tiktok.com/@syncofficial.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Sync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
