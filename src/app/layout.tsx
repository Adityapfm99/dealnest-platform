"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Removed metadata export to fix 'use client' + metadata error

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [role, setRole] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const role = window.localStorage.getItem('role');
      setRole(role);
      if (window.location.pathname === '/onboarding-seller') {
        setRole('seller');
        window.localStorage.setItem('role', 'seller');
      }
      if (window.location.pathname === '/onboarding-buyer') {
        setRole('buyer');
        window.localStorage.setItem('role', 'buyer');
      }
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          background: 'linear-gradient(90deg, #e0f7fa 0%, #fffde4 100%)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          borderRadius: '0 0 16px 16px',
          marginBottom: '2rem',
        }}>
          <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#222' }}>
            DealNest
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {pathname !== '/' && (
              <>
                <Link href="/buyers" style={{ color: '#222', background: 'none', textDecoration: 'none', fontWeight: 500 }}>Buyers</Link>
                {role && (
                  <Link href="/match" style={{ color: '#222', background: 'none', textDecoration: 'none', fontWeight: 500 }}>Match Workflow</Link>
                )}
                <Link href="/settings" style={{ color: '#222', background: 'none', textDecoration: 'none', fontWeight: 500 }}>Settings</Link>
                <Link href="/help" style={{ color: '#222', background: 'none', textDecoration: 'none', fontWeight: 500 }}>Help</Link>
                {role && (
                  <span style={{ marginLeft: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <img src="/icon.png" alt="User" style={{ width: 24, height: 24, borderRadius: '50%' }} />
                    <span style={{ color: '#222', fontWeight: 500, fontSize: '1rem' }}>{role.charAt(0).toUpperCase() + role.slice(1)}</span>
                  </span>
                )}
              </>
            )}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
