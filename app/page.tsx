import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Instagram, Users, Calendar, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary via-background to-accent/20">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/sync-logo.svg"
                alt="Sync Logo"
                width={140}
                height={140}
                className="mb-8 rounded-3xl shadow-lg"
              />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Find Time Together,{" "}
                <span className="text-primary/70">Effortlessly</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-pretty">
                Sync makes coordinating calendars with friends simple. Create groups, 
                share availability, and schedule events that work for everyone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#features"
                  className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
                >
                  Learn More
                </a>
                <Link
                  href="/privacy"
                  className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 mt-10">
                <a 
                  href="https://instagram.com/syncofficial.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a 
                  href="https://tiktok.com/@syncofficial.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span className="text-sm font-medium">TikTok</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-24 relative">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
              How Sync Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users className="w-7 h-7 text-primary" />}
                title="Create Groups"
                description="Organize your friends into groups for easy event coordination. Family, coworkers, book club - you decide."
              />
              <FeatureCard
                icon={<Calendar className="w-7 h-7 text-primary" />}
                title="Share Availability"
                description="Connect your Google Calendar and automatically share when you're free with your groups."
              />
              <FeatureCard
                icon={<Sparkles className="w-7 h-7 text-primary" />}
                title="Find Perfect Times"
                description="Let Sync find the best time slots that work for everyone. No more endless back-and-forth."
              />
            </div>
          </div>
        </section>
        
        {/* Google Calendar Integration Section */}
        <section className="py-24 bg-card/50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Seamless Google Calendar Integration
                </h2>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Sync integrates directly with Google Calendar to read your availability 
                  and create events. We only access what&apos;s necessary to help you coordinate 
                  with friends - nothing more.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</span>
                    Read calendar events to show availability
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</span>
                    Create events when you schedule with friends
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</span>
                    Delete or modify events you&apos;ve created through Sync
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-secondary to-accent/40 rounded-3xl flex items-center justify-center shadow-lg">
                  <svg className="w-24 h-24 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Sync Up?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Download Sync and start coordinating with friends today. 
              Finding time together has never been easier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/terms"
                className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
      <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
