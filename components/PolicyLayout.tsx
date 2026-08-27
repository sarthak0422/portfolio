import React from 'react';
import Link from 'next/link';

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Navigation back to portfolio */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-medium  hover:text-primary transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>

        {/* Header */}
        <header className="border-b border-slate-800 pb-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            {title}
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: <span className="text-slate-200">{lastUpdated}</span>
          </p>
        </header>

        {/* Dynamic Content */}
        <main className="prose prose-invert max-w-none space-y-8 text-slate-300 leading-relaxed">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sarthak S Tambde. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}