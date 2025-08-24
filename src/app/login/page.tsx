import Link from 'next/link';

export default function Login() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(90deg, #e0f7fa 0%, #fffde4 100%)' }}>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2.5rem', maxWidth: 400, width: '100%', textAlign: 'center' }}>
        <img src="/icon.png" alt="Login" style={{ width: 48, height: 48, borderRadius: '50%', marginBottom: 16 }} />
        <h1 style={{ color: '#00796b', fontSize: '2rem', marginBottom: 16 }}>Sign In</h1>
        <p style={{ color: '#222', marginBottom: 24 }}>Choose your role to start onboarding:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Link href="/onboarding-buyer">
            <button style={{ background: '#00796b', color: '#fff', borderRadius: 12, padding: '1rem 2rem', fontSize: '1.1rem', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              Continue as Buyer
            </button>
          </Link>
          <Link href="/onboarding-seller">
            <button style={{ background: '#388e3c', color: '#fff', borderRadius: 12, padding: '1rem 2rem', fontSize: '1.1rem', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              Continue as Seller
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}