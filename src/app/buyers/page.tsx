"use client";

import React from 'react';
import Link from 'next/link';

const buyers = [
  {
    id: 1,
    businessType: 'Tech Startup',
    budget: '$500,000',
    industry: 'Software',
    location: 'Jakarta',
    urgency: 'High',
    description: 'Looking for SaaS businesses with strong recurring revenue.',
    experience: '3 previous acquisitions',
    contact: 'buyer1@email.com',
    references: 'Available on request',
    documents: ['Financial Statement.pdf', 'Acquisition History.pdf'],
  },
  {
    id: 2,
    businessType: 'Retail Group',
    budget: '$1,200,000',
    industry: 'Retail',
    location: 'Bandung',
    urgency: 'Medium',
    description: 'Interested in expanding retail footprint in West Java.',
    experience: '5 previous acquisitions',
    contact: 'buyer2@email.com',
    references: 'Available on request',
    documents: ['Retail Portfolio.pdf'],
  },
  {
    id: 3,
    businessType: 'F&B Investor',
    budget: '$300,000',
    industry: 'Food & Beverage',
    location: 'Surabaya',
    urgency: 'Low',
    description: 'Seeking profitable cafes or restaurants.',
    experience: '2 previous acquisitions',
    contact: 'buyer3@email.com',
    references: 'Available on request',
    documents: ['Investment History.pdf'],
  },
  {
    id: 4,
    businessType: 'Healthcare Group',
    budget: '$2,000,000',
    industry: 'Healthcare',
    location: 'Medan',
    urgency: 'High',
    description: 'Looking for clinics or small hospitals.',
    experience: '7 previous acquisitions',
    contact: 'buyer4@email.com',
    references: 'Available on request',
    documents: ['Healthcare Assets.pdf'],
  },
  {
    id: 5,
    businessType: 'Logistics Company',
    budget: '$800,000',
    industry: 'Logistics',
    location: 'Semarang',
    urgency: 'Medium',
    description: 'Interested in expanding logistics network.',
    experience: '4 previous acquisitions',
    contact: 'buyer5@email.com',
    references: 'Available on request',
    documents: ['Logistics Report.pdf'],
  },
];

function BuyerCard({ buyer, onExpand, onAccept, onReject, status }: { buyer: typeof buyers[0], onExpand: () => void, onAccept: () => void, onReject: () => void, status: string }) {
  return (
    <div style={{
      border: '1px solid #b2dfdb',
      borderRadius: 12,
      padding: '1rem',
      marginBottom: '1rem',
      background: '#e0f7fa',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      opacity: status === 'rejected' ? 0.5 : 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <img src="/icon.png" alt="Profile" style={{ width: 72, height: 72, borderRadius: '50%', marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
      <div style={{ width: '100%' }}>
        <div className="buyer-card-text" style={{ textAlign: 'center', marginBottom: 8 }}>
          <strong style={{ fontSize: '1.2rem', color: '#222' }}>{buyer.businessType}</strong> <span style={{ color: '#00796b' }}>({buyer.industry})</span>
          <div style={{ fontStyle: 'italic', color: '#555', fontSize: '1rem' }}>{buyer.location} • Budget: {buyer.budget}</div>
          <div style={{ color: '#00796b', fontWeight: 500 }}>Urgency: {buyer.urgency}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
          <button style={{ background: status === 'accepted' ? '#b2dfdb' : '#00796b', color: '#fff', borderRadius: 6, border: 'none', padding: '0.5rem 1rem', cursor: status ? 'not-allowed' : 'pointer' }} onClick={onAccept} disabled={!!status}>Accept</button>
          <button style={{ background: status === 'rejected' ? '#b2dfdb' : '#fff', color: '#00796b', borderRadius: 6, border: '1px solid #00796b', padding: '0.5rem 1rem', cursor: status ? 'not-allowed' : 'pointer' }} onClick={onReject} disabled={!!status}>Reject</button>
        </div>
        <button style={{ marginTop: 8, background: 'none', border: 'none', color: '#00796b', cursor: 'pointer' }} onClick={onExpand}>
          See Detail
        </button>
        {status === 'accepted' && <div style={{ color: '#388e3c', marginTop: 8, textAlign: 'center' }}><strong>Buyer Accepted ✔️</strong></div>}
        {status === 'rejected' && <div style={{ color: '#d32f2f', marginTop: 8, textAlign: 'center' }}><strong>Buyer Rejected ✖️</strong></div>}
      </div>
    </div>
  );
}

function BuyerProfileDetail({ buyer, onClose }: { buyer: typeof buyers[0], onClose: () => void }) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2rem', maxWidth: 600, margin: '2rem auto', color: '#222' }}>
      <h3 style={{ color: '#00796b' }}>{buyer.businessType} ({buyer.industry})</h3>
      <div><strong>Location:</strong> {buyer.location}</div>
      <div><strong>Budget:</strong> {buyer.budget}</div>
      <div><strong>Urgency:</strong> {buyer.urgency}</div>
      <div style={{ marginTop: 12 }}><strong>Description:</strong> {buyer.description}</div>
      <div><strong>Experience:</strong> {buyer.experience}</div>
      <div><strong>Contact:</strong> {buyer.contact}</div>
      <div><strong>References:</strong> {buyer.references}</div>
      <div style={{ marginTop: 12 }}>
        <strong>Documents:</strong>
        <ul>
          {buyer.documents?.map(doc => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>
      <button style={{ marginTop: 16, background: '#00796b', color: '#fff', borderRadius: 8, border: 'none', padding: '0.5rem 1.5rem' }} onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default function Buyers() {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);
  const [statuses, setStatuses] = React.useState<{ [id: number]: string }>({});
  const [notification, setNotification] = React.useState<string | null>(null);
  const expandedBuyer = buyers.find(b => b.id === expandedId);

  const handleAccept = (id: number) => {
    setStatuses(s => ({ ...s, [id]: 'accepted' }));
    setNotification('Buyer accepted!');
    setTimeout(() => setNotification(null), 2000);
  };
  const handleReject = (id: number) => {
    setStatuses(s => ({ ...s, [id]: 'rejected' }));
    setNotification('Buyer rejected!');
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <Link href="/">
        <button style={{ marginBottom: '1.5rem', background: '#00796b', color: '#fff', borderRadius: 8, padding: '0.5rem 1.5rem', border: 'none', fontSize: '1rem' }}>
          Back to Home
        </button>
      </Link>
      <h2>Buyer Profiles</h2>
      <p>Browse buyers and accept or reject at a glance.</p>
      {notification && (
        <div style={{ background: '#fffde4', color: '#00796b', borderRadius: 8, padding: '0.5rem 1rem', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          {notification}
        </div>
      )}
      <div style={{ maxWidth: 600, margin: '2rem auto' }}>
        {expandedBuyer ? (
          <BuyerProfileDetail buyer={expandedBuyer} onClose={() => setExpandedId(null)} />
        ) : (
          buyers.map(buyer => (
            <BuyerCard
              key={buyer.id}
              buyer={buyer}
              onExpand={() => setExpandedId(buyer.id)}
              onAccept={() => handleAccept(buyer.id)}
              onReject={() => handleReject(buyer.id)}
              status={statuses[buyer.id] || ''}
            />
          ))
        )}
      </div>
      <style>{`
        .buyer-card-text {
          color: #222 !important;
        }
      `}</style>
    </main>
  );
}