import React, { useState } from 'react';
import { Shield, FileText, Mail, Building2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  const appName = "Venics Sales";
  const companyName = "Venics Software Company";
  const email = "jexesmiten@gmail.com";
  const lastUpdated = "07/03/2026";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span className="font-semibold text-xl tracking-tight">{appName}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> {companyName}</span>
            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> {email}</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="sm:w-64 shrink-0">
            <nav className="flex sm:flex-col gap-2 overflow-x-auto pb-4 sm:pb-0 sticky top-24">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'privacy'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'terms'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <FileText className="w-4 h-4" />
                Terms of Service
              </button>
            </nav>
          </aside>

          {/* Content Area */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
            {activeTab === 'privacy' ? (
              <div className="prose prose-slate max-w-none">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Privacy Policy for {appName}</h1>
                <p className="text-slate-500 mb-8">Last updated: {lastUpdated}</p>

                <p className="mb-6 text-slate-700 leading-relaxed">
                  {appName} (“we”, “our”, or “us”) is built to help businesses manage their sales with confidence. We understand that your business data is sensitive and valuable, and we are committed to protecting it.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Your Data Ownership</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">
                  All business data you enter into {appName} (including products, sales, and transactions) belongs entirely to you. We do not claim ownership of your data.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We only collect information necessary to operate the POS system.</p>
                
                <h3 className="font-medium text-slate-900 mt-4 mb-2">Account Information:</h3>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Shop name</li>
                  <li>Email address</li>
                  <li>Password (securely stored and encrypted)</li>
                </ul>

                <h3 className="font-medium text-slate-900 mt-4 mb-2">Business Data:</h3>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Products and inventory</li>
                  <li>Sales records</li>
                  <li>Profit calculations</li>
                  <li>Transaction history</li>
                </ul>

                <h3 className="font-medium text-slate-900 mt-4 mb-2">Technical Information:</h3>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Device type</li>
                  <li>App usage data (to improve performance)</li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We use your data strictly to:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Provide and maintain the POS system</li>
                  <li>Store and manage your business operations</li>
                  <li>Improve app performance and reliability</li>
                  <li>Provide customer support</li>
                </ul>
                <p className="mb-6 text-slate-700 leading-relaxed">We do NOT use your data for advertising or resale.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Data Sharing and Privacy Commitment</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We do NOT sell, rent, or trade your personal or business data to any third party.</p>
                <p className="mb-4 text-slate-700 leading-relaxed">Your data is only shared in limited situations:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>If required by law</li>
                  <li>To protect our legal rights</li>
                  <li>With essential service providers (such as secure cloud hosting), strictly to operate the app</li>
                </ul>
                <p className="mb-6 text-slate-700 leading-relaxed">We never share your business data for marketing or commercial purposes.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Who Can Access Your Data</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">Access to your data is strictly limited:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Only authorized systems process your data</li>
                  <li>Our team may only access data when necessary for customer support, and only with proper safeguards</li>
                </ul>
                <p className="mb-6 text-slate-700 leading-relaxed">We do not casually view or monitor your business data.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. Data Security</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We take security seriously and implement:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Encrypted connections (HTTPS)</li>
                  <li>Secure password storage</li>
                  <li>Restricted internal access</li>
                  <li>Regular system monitoring</li>
                </ul>
                <p className="mb-6 text-slate-700 leading-relaxed">While no system is 100% secure, we continuously improve our security to protect your data.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">7. Data Retention and Deletion</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We retain your data only as long as your account is active.</p>
                <p className="mb-4 text-slate-700 leading-relaxed">You can:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Request access to your data</li>
                  <li>Update your information</li>
                  <li>Request permanent deletion of your account and data at any time</li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">8. Your Rights</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">You have full control over your data, including:</p>
                <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
                  <li>Accessing your information</li>
                  <li>Updating your account</li>
                  <li>Requesting deletion</li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">9. Children's Privacy</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">{appName} is not intended for children under 13, and we do not knowingly collect their data.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">10. Changes to This Policy</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">We may update this Privacy Policy from time to time. Any updates will be clearly communicated within the app or website.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">11. Pricing and Payments</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">{appName} is offered as a subscription service at a fee of TZS 20,000 per month.</p>
                <p className="mb-4 text-slate-700 leading-relaxed">By subscribing, you agree to:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Pay the applicable subscription fees</li>
                  <li>Keep your payment information up to date</li>
                </ul>
                <p className="mb-4 text-slate-700 leading-relaxed">Payments are non-refundable except where required by law.</p>
                <p className="mb-4 text-slate-700 leading-relaxed">We reserve the right to update pricing. Any changes will be communicated in advance.</p>
                <p className="mb-6 text-slate-700 leading-relaxed">Failure to make payment may result in suspension or termination of access to the Service.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">12. Contact Us</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">If you have any questions or concerns, contact us:</p>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <p className="text-slate-700"><strong>Email:</strong> <a href={`mailto:${email}`} className="text-indigo-600 hover:underline">{email}</a></p>
                  <p className="text-slate-700 mt-2"><strong>Company:</strong> {companyName}</p>
                </div>
                <p className="text-slate-700 leading-relaxed mt-6 font-medium">We are committed to earning and maintaining your trust.</p>
              </div>
            ) : (
              <div className="prose prose-slate max-w-none">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Terms of Service for {appName}</h1>
                <p className="text-slate-500 mb-8">Last updated: {lastUpdated}</p>

                <p className="mb-6 text-slate-700 leading-relaxed">
                  By accessing or using {appName} (“the Service”), you agree to be bound by these Terms of Service.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Description of Service</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">
                  {appName} provides a point-of-sale (POS) system that helps businesses manage products, sales, and financial records.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Use of the Service</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">You agree to use the Service only for lawful business purposes.</p>
                <p className="mb-4 text-slate-700 leading-relaxed">You must not:</p>
                <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
                  <li>Use the system for fraudulent or illegal activities</li>
                  <li>Attempt to disrupt or damage the system</li>
                  <li>Reverse engineer or attempt to access restricted parts of the Service</li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. User Accounts</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">You are responsible for:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Keeping your login credentials secure</li>
                  <li>All activities under your account</li>
                </ul>
                <p className="mb-6 text-slate-700 leading-relaxed">We are not responsible for unauthorized access caused by your failure to protect your account.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Your Business Data</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">You are responsible for:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>The accuracy of your data</li>
                  <li>Maintaining your own backups where necessary</li>
                </ul>
                <p className="mb-6 text-slate-700 leading-relaxed">While we take steps to protect your data, we recommend users keep independent records of critical business information.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Service Availability</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We aim to provide reliable service, but we do not guarantee uninterrupted or error-free operation.</p>
                <p className="mb-4 text-slate-700 leading-relaxed">The Service may be temporarily unavailable due to:</p>
                <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
                  <li>Maintenance</li>
                  <li>Updates</li>
                  <li>Technical issues</li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. Limitation of Liability</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">The Service is provided “as is” and “as available.”</p>
                <p className="mb-4 text-slate-700 leading-relaxed">To the maximum extent permitted by law, {appName} is not liable for:</p>
                <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
                  <li>Loss of data</li>
                  <li>Loss of profits or revenue</li>
                  <li>Business interruption</li>
                  <li>Indirect or consequential damages</li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">7. Termination</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We may suspend or terminate your account if you:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Violate these Terms</li>
                  <li>Misuse the Service</li>
                </ul>
                <p className="mb-6 text-slate-700 leading-relaxed">You may stop using the Service at any time.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">8. Updates to the Service and Terms</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We may update or modify the Service and these Terms at any time.</p>
                <p className="mb-6 text-slate-700 leading-relaxed">Continued use of the Service after changes means you accept the updated Terms.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">9. Governing Law</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">These Terms are governed by the laws of the United Republic of Tanzania.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">10. Contact Information</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">If you have any questions about these Terms, contact:</p>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <p className="text-slate-700"><strong>Email:</strong> <a href={`mailto:${email}`} className="text-indigo-600 hover:underline">{email}</a></p>
                  <p className="text-slate-700 mt-2"><strong>Company:</strong> {companyName}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
