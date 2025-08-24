"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (role: 'buyer' | 'seller') => {
    setLoading(true);
    window.localStorage.setItem('role', role);
    if (role === 'buyer') {
      router.push('/onboarding-buyer');
    } else {
      router.push('/onboarding-seller');
    }
  };

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(90deg, #e0f7fa 0%, #fffde4 100%)' }}>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2.5rem', maxWidth: 400, width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
          <Image src="/globe.svg" alt="DealNest" width={48} height={48} style={{ borderRadius: '50%' }} />
          <h1 style={{ color: '#00796b', fontSize: '2rem', margin: 0 }}>DealNest</h1>
        </div>
        <p style={{ color: '#222', marginBottom: 24 }}>A friendly platform for connecting business buyers and sellers. The acquisition process becomes easier, faster, and more modern.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <button onClick={() => handleLogin('buyer')} style={{ background: '#00796b', color: '#fff', borderRadius: 12, padding: '1rem 2rem', fontSize: '1.1rem', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} disabled={loading}>
            Continue as Buyer
          </button>
          <button onClick={() => handleLogin('seller')} style={{ background: '#388e3c', color: '#fff', borderRadius: 12, padding: '1rem 2rem', fontSize: '1.1rem', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} disabled={loading}>
            Continue as Seller
          </button>
        </div>
      </div>
    </main>
  );
}
