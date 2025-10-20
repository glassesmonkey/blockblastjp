import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found" />
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <meta name="googlebot" content="noindex, nofollow, noarchive" />
        <meta name="googlebot-news" content="noindex, nosnippet" />
        <meta name="bingbot" content="noindex, nofollow, noarchive" />
        <meta name="msnbot" content="noindex, nofollow, noarchive" />
        <meta name="google-adsense" content="none" />
        <meta name="google-ad-client" content="none" />
        <meta name="advertisement" content="none" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval'; frame-src 'none'"
        />
      </Head>

      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-2">Oops! Page not found</p>
        <p className="text-gray-500 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        >
          Return Home
        </Link>
      </main>

      <Footer />
    </div>
  );
} 