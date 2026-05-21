import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Sync",
  description: "Sync Privacy Policy - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary via-background to-accent/20">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: May 20, 2026</p>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <Section title="Introduction">
              <p>
                Welcome to Sync (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy 
                and ensuring you understand how we collect, use, and safeguard your information when you use 
                our mobile application (&quot;Sync&quot; or the &quot;App&quot;).
              </p>
              <p>
                Sync is a calendar coordination application that helps you find time together with friends 
                by connecting to your Google Calendar. This Privacy Policy explains our practices regarding 
                data collection and usage.
              </p>
            </Section>
            
            <Section title="Information We Collect">
              <h4 className="text-lg font-semibold text-primary mt-4 mb-2">Account Information</h4>
              <p>When you create an account with Sync, we collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your name and email address (provided through Google OAuth)</li>
                <li>Profile picture (if provided through your Google account)</li>
                <li>Unique user identifier</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-primary mt-6 mb-2">Google Calendar Data</h4>
              <p>
                To provide our core functionality, we access the following Google Calendar information 
                with your explicit permission:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Event times and durations:</strong> To determine your availability for group scheduling</li>
                <li><strong>Event titles:</strong> Only displayed to you, never shared with other users (friends only see that you are &quot;busy&quot;)</li>
                <li><strong>Calendar list:</strong> To allow you to select which calendars to use for availability</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-primary mt-6 mb-2">Usage Information</h4>
              <p>We automatically collect certain information about how you use Sync:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Groups you create and join</li>
                <li>Events you schedule through the App</li>
                <li>Friend connections within the App</li>
                <li>App usage patterns and preferences</li>
              </ul>
            </Section>
            
            <Section title="How We Use Your Information">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Provide the Service:</strong> Display your availability to friends and groups, find common free times, and create calendar events</li>
                <li><strong>Manage Your Account:</strong> Authenticate your identity and manage your profile</li>
                <li><strong>Communicate:</strong> Send notifications about events, RSVPs, and important updates</li>
                <li><strong>Improve Sync:</strong> Analyze usage patterns to enhance features and user experience</li>
                <li><strong>Ensure Security:</strong> Detect and prevent fraud, abuse, and security threats</li>
              </ul>
            </Section>
            
            <Section title="Google API Services - Limited Use Disclosure">
              <p>
                Sync&apos;s use and transfer to any other app of information received from Google APIs will 
                adhere to the{" "}
                <a 
                  href="https://developers.google.com/terms/api-services-user-data-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
              
              <h4 className="text-lg font-semibold text-primary mt-6 mb-2">Specifically, we:</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Only request access to data necessary for the App&apos;s core functionality</li>
                <li>Do not use Google data for advertising purposes</li>
                <li>Do not sell your Google data to third parties</li>
                <li>Do not use Google data for purposes unrelated to providing our scheduling service</li>
                <li>Allow you to revoke access at any time through your Google Account settings</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-primary mt-6 mb-2">Google OAuth Scopes We Use:</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><code className="bg-secondary px-2 py-1 rounded text-sm">https://www.googleapis.com/auth/calendar.readonly</code> - To read your calendar events and determine availability</li>
                <li><code className="bg-secondary px-2 py-1 rounded text-sm">https://www.googleapis.com/auth/calendar.events</code> - To create, modify, and delete events you schedule through Sync</li>
                <li><code className="bg-secondary px-2 py-1 rounded text-sm">https://www.googleapis.com/auth/userinfo.email</code> - To identify your account</li>
                <li><code className="bg-secondary px-2 py-1 rounded text-sm">https://www.googleapis.com/auth/userinfo.profile</code> - To display your name and profile picture</li>
              </ul>
            </Section>
            
            <Section title="Information Sharing">
              <h4 className="text-lg font-semibold text-primary mt-4 mb-2">With Other Users</h4>
              <p>
                When you join a group or connect with friends, we share limited information to enable coordination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your name and profile picture</li>
                <li>Your availability (shown as &quot;busy&quot; or &quot;free&quot; time blocks - event details are never shared)</li>
                <li>Events you create within groups</li>
                <li>Your RSVP status for group events</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-primary mt-6 mb-2">With Service Providers</h4>
              <p>
                We may share data with trusted third-party service providers who assist in operating our 
                service (e.g., cloud hosting, analytics). These providers are bound by confidentiality 
                agreements and may only use data to provide services to us.
              </p>
              
              <h4 className="text-lg font-semibold text-primary mt-6 mb-2">Legal Requirements</h4>
              <p>
                We may disclose information if required by law, regulation, legal process, or governmental request.
              </p>
            </Section>
            
            <Section title="Data Security">
              <p>
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                <li>Secure OAuth 2.0 authentication with Google</li>
                <li>Regular security audits and updates</li>
                <li>Access controls limiting employee access to user data</li>
              </ul>
            </Section>
            
            <Section title="Data Retention">
              <p>
                We retain your data for as long as your account is active or as needed to provide services. 
                You may request deletion of your account and associated data at any time. Upon deletion:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your profile and personal data will be removed from our systems</li>
                <li>Your Google Calendar connection will be revoked</li>
                <li>Events you created through Sync will remain on participants&apos; calendars</li>
                <li>Some anonymized usage data may be retained for analytics</li>
              </ul>
            </Section>
            
            <Section title="Your Rights and Choices">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Revoke Access:</strong> Disconnect Google Calendar at any time through the App settings or your Google Account</li>
                <li><strong>Opt-out:</strong> Disable certain notifications and communications</li>
              </ul>
            </Section>
            
            <Section title="Children&apos;s Privacy">
              <p>
                Sync is not intended for users under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If we learn that we have collected 
                information from a child under 13, we will delete that information promptly.
              </p>
            </Section>
            
            <Section title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new Privacy Policy in the App and updating the 
                &quot;Last updated&quot; date. Your continued use of Sync after changes constitutes 
                acceptance of the updated policy.
              </p>
            </Section>
            
            <Section title="Contact Us">
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-card p-6 rounded-xl border border-border mt-4">
                <p className="text-muted-foreground">
                  <strong className="text-primary">Email:</strong>{" "}
                  <a href="mailto:sync.devx@gmail.com" className="text-primary underline hover:no-underline">
                    sync.devx@gmail.com
                  </a>
                </p>
              </div>
            </Section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pb-6 border-b border-border last:border-0">
      <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
      <div className="text-muted-foreground space-y-4">{children}</div>
    </section>
  )
}
