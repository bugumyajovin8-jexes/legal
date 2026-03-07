import React, { useState } from 'react';
import { Shield, FileText, Mail, Building2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  const appName = "POS Yangu";
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
                  {appName} (“we”, “our”, or “us”) respects your privacy and is committed to protecting your information. This Privacy Policy explains how we collect, use, and protect information when you use our mobile application.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">When using our application, we may collect the following information:</p>
                
                <h3 className="font-medium text-slate-900 mt-4 mb-2">Account Information</h3>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Shop name</li>
                  <li>Email address</li>
                  <li>Password (stored securely)</li>
                </ul>

                <h3 className="font-medium text-slate-900 mt-4 mb-2">Business Data</h3>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Products and inventory information</li>
                  <li>Sales records</li>
                  <li>Profit calculations</li>
                  <li>Transaction history</li>
                </ul>

                <h3 className="font-medium text-slate-900 mt-4 mb-2">Technical Information</h3>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Device type</li>
                  <li>App usage data (for performance improvement)</li>
                </ul>
                
                <p className="mb-6 text-slate-700 leading-relaxed">We only collect information necessary for the operation of the POS system.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We use the collected information to:</p>
                <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
                  <li>Create and manage your account</li>
                  <li>Store and manage your shop inventory</li>
                  <li>Record and calculate sales and profits</li>
                  <li>Improve app performance and reliability</li>
                  <li>Provide customer support</li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Data Storage and Security</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We take reasonable steps to protect your information. This includes:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Secure storage of user data</li>
                  <li>Encryption of sensitive information such as passwords</li>
                  <li>Restricted system access</li>
                </ul>
                <p className="mb-6 text-slate-700 leading-relaxed">However, no system can guarantee absolute security.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Data Sharing</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We do not sell, trade, or rent your personal or business data to third parties.</p>
                <p className="mb-4 text-slate-700 leading-relaxed">Your information may only be shared if:</p>
                <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
                  <li>Required by law</li>
                  <li>Necessary to protect our legal rights</li>
                  <li>Needed to operate essential services supporting the app</li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Data Retention</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">We keep your data for as long as your account remains active or as needed to provide the service.</p>
                <p className="mb-6 text-slate-700 leading-relaxed">Users may request deletion of their account and associated data at any time.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. User Rights</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">Users have the right to:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Access their stored information</li>
                  <li>Update their account information</li>
                  <li>Request account deletion</li>
                </ul>
                <p className="mb-6 text-slate-700 leading-relaxed">Requests can be made by contacting us.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">7. Children's Privacy</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">Our application is not intended for children under the age of 13, and we do not knowingly collect personal information from children.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">8. Changes to This Privacy Policy</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">We may update this Privacy Policy from time to time. Updates will be posted within the application or on our website.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">9. Contact Us</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">If you have any questions about this Privacy Policy, you can contact us at:</p>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <p className="text-slate-700"><strong>Email:</strong> <a href={`mailto:${email}`} className="text-indigo-600 hover:underline">{email}</a></p>
                  <p className="text-slate-700 mt-2"><strong>Company/Developer:</strong> {companyName}</p>
                </div>
              </div>
            ) : (
              <div className="prose prose-slate max-w-none">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Terms of Service for {appName}</h1>
                <p className="text-slate-500 mb-8">Last updated: {lastUpdated}</p>

                <p className="mb-6 text-slate-700 leading-relaxed">
                  By downloading or using {appName}, you agree to these Terms of Service.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Use of the Service</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">
                  {appName} provides a point-of-sale system that helps businesses manage products, sales, and profit records.
                </p>
                <p className="mb-6 text-slate-700 leading-relaxed">
                  Users agree to use the application only for lawful business purposes.
                </p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. User Accounts</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">To use certain features, users may need to create an account.</p>
                <p className="mb-4 text-slate-700 leading-relaxed">Users are responsible for:</p>
                <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
                  <li>Maintaining the confidentiality of their login credentials</li>
                  <li>All activities that occur under their account</li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Business Data Responsibility</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">Users are responsible for the accuracy of:</p>
                <ul className="list-disc pl-5 mb-4 text-slate-700 space-y-1">
                  <li>Sales records</li>
                  <li>Inventory data</li>
                  <li>Financial calculations entered into the system</li>
                </ul>
                <p className="mb-6 text-slate-700 leading-relaxed">We are not responsible for business decisions made based on the information stored in the application.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Service Availability</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">We strive to keep the service running smoothly. However, we do not guarantee uninterrupted access and may occasionally perform maintenance or updates.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Limitation of Liability</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">The application is provided “as is.”</p>
                <p className="mb-4 text-slate-700 leading-relaxed">We are not liable for:</p>
                <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
                  <li>Loss of business data</li>
                  <li>Financial losses</li>
                  <li>System interruptions</li>
                  <li>Errors caused by incorrect data entry</li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. Termination</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">We reserve the right to suspend or terminate accounts that violate these Terms or misuse the application.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">7. Updates to the Service</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">We may update or modify the application and these Terms at any time. Continued use of the app indicates acceptance of the updated terms.</p>

                <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">8. Contact Information</h2>
                <p className="mb-4 text-slate-700 leading-relaxed">For questions about these Terms, contact:</p>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <p className="text-slate-700"><strong>Email:</strong> <a href={`mailto:${email}`} className="text-indigo-600 hover:underline">{email}</a></p>
                  <p className="text-slate-700 mt-2"><strong>Developer:</strong> {companyName}</p>
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
