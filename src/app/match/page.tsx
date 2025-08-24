"use client";

import React, { useState } from 'react';

const steps = [
  'Initial Chat & Introduction',
  'Share Financial Documents',
  'AI-powered Document Analysis',
  'Smart Checklist & Milestones',
  'Negotiate Terms',
  'E-signature & Deal Completion',
];

export default function MatchWorkflow() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setSummary(null);
    }
  };

  const handleAnalyze = () => {
    setSummary('Revenue: $500,000\nNet Profit: $120,000\nGrowth: 15% YoY\nDebt Ratio: 0.2\nAI Summary: The business shows strong revenue growth and healthy profit margins.');
  };

  return (
    <main style={{ padding: '2rem', maxWidth: 700, margin: '0 auto', background: '#111', minHeight: '100vh' }}>
      <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 700, letterSpacing: 1 }}>Match Workflow</h1>
      <p style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '2.5rem', textAlign: 'center', fontWeight: 400 }}>Guide matched buyers and sellers through the acquisition process with smart tools.</p>
      <ol style={{ margin: '2rem 0', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
        {steps.map((step, idx) => (
          <li key={step} style={{
            marginBottom: 0,
            background: '#e0f7fa',
            borderRadius: 12,
            padding: '1.25rem 1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            color: '#222',
            fontSize: '1.15rem',
            fontWeight: 500,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}>
            <span style={{ color: '#00796b', fontWeight: 700, fontSize: '1.15rem' }}>Step {idx + 1}:</span> {step}
            {step === 'AI-powered Document Analysis' && (
              <div style={{ marginTop: 8, color: '#00796b', fontWeight: 400, fontSize: '1rem' }}>
                <em style={{ color: '#222', fontSize: '1rem' }}>Let our AI review and summarize key financials for you.</em>
                <div style={{ marginTop: 12, background: '#fff', borderRadius: 8, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <input type="file" accept=".pdf,.xls,.xlsx,.csv" onChange={handleFileChange} style={{ marginBottom: 8, fontSize: '1rem' }} />
                  <button onClick={handleAnalyze} disabled={!file} style={{ background: '#00796b', color: '#fff', borderRadius: 8, padding: '0.75rem 2rem', border: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
                    Analyze Document
                  </button>
                  {summary && (
                    <div style={{ background: '#e0f7fa', borderRadius: 8, padding: 12, marginTop: 8, color: '#222', whiteSpace: 'pre-line', fontSize: '1rem' }}>
                      <strong style={{ fontSize: '1.1rem' }}>AI Summary:</strong>
                      <div>{summary}</div>
                      <div style={{ fontSize: 12, color: '#888', marginTop: 8 }}>
                        (Demo only: This summary is static. In production, AI would analyze your uploaded document.)
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {step === 'Smart Checklist & Milestones' && (
              <div style={{ marginTop: 8, color: '#222', fontWeight: 400, fontSize: '1rem' }}>
                <em>Track progress and never miss a step with our smart checklist.</em>
              </div>
            )}
          </li>
        ))}
      </ol>
      <div style={{ background: '#fffde4', borderRadius: 12, padding: 18, marginTop: 32, color: '#222', fontSize: '1.15rem', fontWeight: 500, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <span style={{ color: '#00796b', fontWeight: 700 }}>Chat Assistant:</span> Get instant help and guidance at every step.
      </div>
      <div style={{ background: '#e0f7fa', borderRadius: 12, padding: 18, marginTop: 18, color: '#222', fontSize: '1.15rem', fontWeight: 500, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <span style={{ color: '#00796b', fontWeight: 700 }}>Document Upload:</span> Securely share and analyze files.
      </div>
    </main>
  );
}