import React from 'react';
import PolicyLayout from '@/components/PolicyLayout';

export default function TermsOfService() {
  return (
    <PolicyLayout title="Terms and Conditions" lastUpdated="August 27, 2026">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">1. Agreement to Terms</h2>
        <p>
          By accessing and using <strong className="text-slate-100">sarthaktambde.vercel.app</strong>, 
          you agree to comply with and be bound by the following terms and conditions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">2. Intellectual Property</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-400">
          <li>
            <strong className="text-slate-200">Content Ownership:</strong> Unless explicitly stated otherwise, all code snippets, project descriptions, UI designs, and portfolio assets are the property of Sarthak Tambde.
          </li>
          <li>
            <strong className="text-slate-200">Open-Source Code:</strong> Open-source project repositories linked on this site are governed by their respective licenses (e.g., MIT, Apache 2.0) as hosted on GitHub.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">3. Acceptable Use</h2>
        <p>
          You agree to use this site strictly for personal, professional, and non-commercial informational purposes. 
          Automated scraping, attempting to disrupt site stability, or sending malicious requests to endpoint services is strictly prohibited.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">4. Disclaimer of Liability</h2>
        <p>
          This portfolio and associated live project demonstrations (e.g., PumpkinAI, ClimateApp) are provided on an 
          <strong className="text-slate-200"> "as-is"</strong> basis. I accept no liability for third-party API downtime, project link deprecation, or external hosting outages.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">5. Contact Information</h2>
        <p>
          For inquiries concerning these terms, email me at{' '}
          <a href="mailto:tambdesarthak@gmail.com" className="text-primary">
            tambdesarthak@gmail.com
          </a>.
        </p>
      </section>
    </PolicyLayout>
  );
}