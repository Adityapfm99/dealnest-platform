"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const questions = [
  { label: 'Business Name', type: 'text', name: 'businessName' },
  { label: 'Asking Price', type: 'number', name: 'price' },
  { label: 'Industry', type: 'text', name: 'industry' },
  { label: 'Location', type: 'text', name: 'location' },
  { label: 'Key Financials', type: 'text', name: 'financials' },
];

export default function OnboardingSeller() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<{ [key: string]: string | number }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [questions[step].name]: e.target.value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, questions.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));
  const handleSubmit = () => setSubmitted(true);
  const handleRestart = () => {
    setStep(0);
    setForm({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2rem', maxWidth: 400, textAlign: 'center' }}>
          <h2 style={{ color: '#00796b' }}>Thank you for completing the Seller Onboarding!</h2>
          <p style={{ color: '#00796b', marginTop: '1rem' }}>Your information has been submitted. You can now browse buyers and get matched.</p>
          <a href="/buyers">
            <button style={{ marginTop: '2rem', background: '#004d40', color: '#fff', borderRadius: 8, padding: '0.75rem 2rem', border: 'none', fontSize: '1rem' }}>
              Go to Buyer List
            </button>
          </a>
          <button onClick={handleRestart} style={{ marginTop: '1rem', background: '#b2dfdb', color: '#00796b', borderRadius: 8, padding: '0.5rem 1.5rem', border: 'none' }}>Restart Questionnaire</button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2rem', maxWidth: 400, width: '100%' }}>
        <div style={{ marginBottom: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/icon.png" alt="Seller" style={{ width: 32, height: 32, borderRadius: '50%' }} />
            <h2 style={{ color: '#00796b', margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Seller Onboarding</h2>
          </div>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor={questions[step].name} style={{ fontWeight: 700, color: '#222', display: 'block', marginBottom: 4, fontSize: '1.15rem' }}>{questions[step].label}</label>
          <input
            id={questions[step].name}
            type={questions[step].type}
            name={questions[step].name}
            value={form[questions[step].name] || ''}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', borderRadius: 8, border: '1px solid #b2dfdb', marginBottom: 8, color: '#222', fontSize: '1.15rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <button onClick={prevStep} disabled={step === 0} style={{ background: '#e0f7fa', color: '#00796b', borderRadius: 8, padding: '0.5rem 1rem', border: 'none' }}>Back</button>
          <div style={{ flex: 1, margin: '0 8px' }}>
            <div style={{ height: 6, background: '#e0f7fa', borderRadius: 4 }}>
              <div style={{ width: `${((step + 1) / questions.length) * 100}%`, height: '100%', background: '#00796b', borderRadius: 4, transition: 'width 0.3s' }} />
            </div>
            <div style={{ fontSize: 12, color: '#00796b', marginTop: 2 }}>Step {step + 1} of {questions.length}</div>
          </div>
          {step === questions.length - 1 ? (
            <button onClick={handleSubmit} style={{ background: '#00796b', color: '#fff', borderRadius: 8, padding: '0.5rem 1.5rem', border: 'none' }}>Submit</button>
          ) : (
            <button onClick={nextStep} style={{ background: '#00796b', color: '#fff', borderRadius: 8, padding: '0.5rem 1.5rem', border: 'none' }}>Next</button>
          )}
        </div>
        <Link href="/">
          <button style={{ marginTop: '1.5rem', background: '#00796b', color: '#fff', borderRadius: 8, padding: '0.5rem 1.5rem', border: 'none', fontSize: '1rem', width: '100%' }}>
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}