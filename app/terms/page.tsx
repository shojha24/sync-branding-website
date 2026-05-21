import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - Sync",
  description: "Sync Terms of Service - Read the terms and conditions for using the Sync app.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary via-background to-accent/20">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: May 20, 2026</p>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing or using Sync (&quot;the App&quot;), you agree to be bound by these Terms of Service 
                (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the App.
              </p>
              <p>
                Sync is a mobile application that helps you coordinate calendar availability and schedule 
                events with friends through Google Calendar integration. These Terms govern your use of 
                all features and services provided by Sync.
              </p>
            </Section>
            
            <Section title="2. Eligibility">
              <p>
                To use Sync, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Be at least 13 years of age</li>
                <li>Have a valid Google account</li>
                <li>Have the legal capacity to enter into these Terms</li>
                <li>Not be prohibited from using the service under applicable laws</li>
              </ul>
              <p>
                By using Sync, you represent and warrant that you meet all eligibility requirements.
              </p>
            </Section>
            
            <Section title="3. Account Registration">
              <p>
                To use Sync, you must sign in using your Google account through Google OAuth. 
                By signing in, you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Authorize Sync to access certain information from your Google account as described in our Privacy Policy</li>
                <li>Agree to provide accurate and complete information</li>
                <li>Are responsible for maintaining the security of your account credentials</li>
                <li>Are responsible for all activities that occur under your account</li>
              </ul>
              <p>
                You must notify us immediately of any unauthorized use of your account.
              </p>
            </Section>
            
            <Section title="4. Google Calendar Integration">
              <p>
                Sync integrates with Google Calendar to provide its core functionality. By using Sync, you authorize us to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Read your calendar events:</strong> To determine your availability and display it to friends and groups you&apos;ve connected with</li>
                <li><strong>Create calendar events:</strong> To add events you schedule through Sync to your Google Calendar</li>
                <li><strong>Modify events:</strong> To update events you&apos;ve created through Sync when details change</li>
                <li><strong>Delete events:</strong> To remove events you&apos;ve created through Sync if you or the group organizer cancels them</li>
              </ul>
              <p>
                You can revoke this access at any time through your Google Account settings or the Sync app settings. 
                Revoking access will limit or disable Sync&apos;s functionality.
              </p>
            </Section>
            
            <Section title="5. Acceptable Use">
              <p>You agree to use Sync only for lawful purposes. You shall not:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the App to harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the App or servers</li>
                <li>Attempt to gain unauthorized access to any part of the App</li>
                <li>Use automated means to access the App without our permission</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Collect or store personal data about other users without their consent</li>
                <li>Use the App for any commercial purpose without our written consent</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </Section>
            
            <Section title="6. User Content">
              <p>
                You may create content through Sync, including group names, event descriptions, and messages. 
                You retain ownership of your content, but grant us a license to use, store, and display it 
                as necessary to provide the service.
              </p>
              <p>
                You are responsible for ensuring your content does not violate any laws or third-party rights. 
                We may remove content that violates these Terms.
              </p>
            </Section>
            
            <Section title="7. Privacy">
              <p>
                Your privacy is important to us. Our{" "}
                <a href="/privacy" className="text-primary underline hover:no-underline">
                  Privacy Policy
                </a>{" "}
                explains how we collect, use, and protect your information. By using Sync, you consent to 
                our data practices as described in the Privacy Policy.
              </p>
            </Section>
            
            <Section title="8. Intellectual Property">
              <p>
                Sync and its original content, features, and functionality are owned by Sync and are 
                protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not copy, modify, distribute, sell, or lease any part of the App or its content 
                without our written permission.
              </p>
            </Section>
            
            <Section title="9. Third-Party Services">
              <p>
                Sync integrates with Google Calendar and may link to other third-party services. 
                These services have their own terms and privacy policies. We are not responsible for 
                the content, privacy practices, or terms of third-party services.
              </p>
              <p>
                Your use of Google Calendar through Sync is also subject to Google&apos;s Terms of Service 
                and Privacy Policy.
              </p>
            </Section>
            
            <Section title="10. Service Availability">
              <p>
                We strive to keep Sync available and functioning properly, but we do not guarantee 
                uninterrupted access. The service may be temporarily unavailable due to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Scheduled maintenance</li>
                <li>System updates and improvements</li>
                <li>Technical difficulties beyond our control</li>
                <li>Issues with third-party services (including Google)</li>
              </ul>
            </Section>
            
            <Section title="11. Disclaimer of Warranties">
              <p>
                SYNC IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY OR RELIABILITY OF INFORMATION</li>
              </ul>
              <p>
                We do not warrant that the App will meet your requirements, be error-free, or be 
                available without interruption.
              </p>
            </Section>
            
            <Section title="12. Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SYNC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, 
                AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP.
              </p>
              <p>
                OUR TOTAL LIABILITY FOR ANY CLAIMS RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT 
                YOU PAID US (IF ANY) IN THE TWELVE MONTHS PRIOR TO THE CLAIM.
              </p>
            </Section>
            
            <Section title="13. Indemnification">
              <p>
                You agree to indemnify and hold harmless Sync and its officers, directors, employees, 
                and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your use of the App</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your content or data</li>
              </ul>
            </Section>
            
            <Section title="14. Termination">
              <p>
                We may suspend or terminate your access to Sync at any time, with or without cause, 
                and with or without notice. You may also delete your account at any time through 
                the app settings.
              </p>
              <p>
                Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your right to use Sync will immediately cease</li>
                <li>Your Google Calendar connection will be revoked</li>
                <li>Your data will be handled according to our Privacy Policy</li>
                <li>Events created through Sync will remain on participants&apos; calendars</li>
              </ul>
            </Section>
            
            <Section title="15. Changes to Terms">
              <p>
                We may modify these Terms at any time. We will notify you of material changes by 
                posting the updated Terms in the App and updating the &quot;Last updated&quot; date.
              </p>
              <p>
                Your continued use of Sync after changes constitutes acceptance of the modified Terms. 
                If you do not agree to the changes, you must stop using the App.
              </p>
            </Section>
            
            <Section title="16. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the 
                United States, without regard to conflict of law principles.
              </p>
            </Section>
            
            <Section title="17. Dispute Resolution">
              <p>
                Any disputes arising from these Terms or your use of Sync shall be resolved through 
                binding arbitration in accordance with the rules of the American Arbitration Association. 
                You agree to waive any right to a jury trial or to participate in a class action.
              </p>
            </Section>
            
            <Section title="18. Severability">
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions 
                will remain in full force and effect.
              </p>
            </Section>
            
            <Section title="19. Entire Agreement">
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between 
                you and Sync regarding your use of the App.
              </p>
            </Section>
            
            <Section title="20. Contact Information">
              <p>
                If you have questions about these Terms of Service, please contact us at:
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
