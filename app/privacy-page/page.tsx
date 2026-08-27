import React from 'react';
import PolicyLayout from '@/components/PolicyLayout';

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="August 27, 2026">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">1. Overview</h2>
        <p>
          Welcome to my portfolio site (<strong className="text-slate-100">sarthaktambde.vercel.app</strong>). 
          This Privacy Policy explains how personal information is collected, used, and protected when you visit this website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">2. Information Collected</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-400">
          <li>
            <strong className="text-slate-200">Direct Contact Information:</strong> When you submit a message via the contact form 
            or reach out directly through email (<code className="text-primary bg-slate-900 px-1.5 py-0.5 rounded">tambdesarthak@gmail.com</code>), 
            I collect your name, email address, and any content included in your message to respond to your inquiry.
          </li>
          <li>
            <strong className="text-slate-200">Automated Analytics:</strong> Standard non-personally identifiable information such as browser type, 
            IP address, and pages visited may be collected automatically by hosting services (Vercel) for operational performance and monitoring.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">3. How Information Is Used</h2>
        <p>Your information is strictly used to:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-400">
          <li>Respond to direct communications, job opportunities, or project proposals.</li>
          <li>Maintain site health and optimize web performance.</li>
        </ul>
        <p className="text-sm italic text-slate-400">
          I do not sell, rent, or trade your personal information with third parties for marketing purposes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">4. Third-Party Links</h2>
        <p>
          This website contains links to external platforms including GitHub, LinkedIn, Kaggle, and live project demos. 
          I am not responsible for the privacy practices or content of third-party websites.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">5. Contact</h2>
        <p>
          If you have questions about this policy, please reach out directly at{' '}
          <a href="mailto:tambdesarthak@gmail.com" className=" text-primary ">
            tambdesarthak@gmail.com
          </a>.
        </p>
      </section>
    </PolicyLayout>
  );
}