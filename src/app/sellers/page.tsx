"use client";

import React from 'react';

const sellers = [
  {
    id: 1,
    businessName: 'SaaS Pro',
    price: '$450,000',
    industry: 'Software',
    location: 'Jakarta',
    financials: 'Profitable, ARR $120k',
    description: 'SaaS platform for SMEs, 3 years in market.',
    contact: 'owner@saaspro.com',
    references: 'Available on request',
    documents: ['Financials.pdf', 'Growth.pdf'],
  },
  {
    id: 2,
    businessName: 'RetailMart',
    price: '$1,000,000',
    industry: 'Retail',
    location: 'Bandung',
    financials: 'Stable, Revenue $500k/year',
    description: 'Retail chain with 5 outlets.',
    contact: 'ceo@retailmart.com',
    references: 'Available on request',
    documents: ['RetailReport.pdf'],
  },
  {
    id: 3,
    businessName: 'Cafe Surya',
    price: '$250,000',
    industry: 'Food & Beverage',
    location: 'Surabaya',
    financials: 'Profitable, Net $60k/year',
    description: 'Popular cafe in city center.',
    contact: 'info@cafesurya.com',
    references: 'Available on request',
    documents: ['CafeFinancials.pdf'],
  },
];

function SellerCard({ seller, onExpand, onAccept, onReject, status }: { seller: typeof sellers[0], onExpand: () => void, onAccept: () => void, onReject: () => void, status: string }) {
  return (
    <div style={{
      border: '1px solid #ffe082',
      borderRadius: 12,
      padding: '1rem',
      marginBottom: '1rem',
      background: '#fffde4',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      opacity: status === 'rejected' ? 0.5 : 1,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <strong>{seller.businessName}</strong> <span style={{ color: '#fbc02d' }}>({seller.industry})</span>
          <div>{seller.location} • Price: {seller.price}</div>
          <div>Financials: {seller.financials}</div>
        </div>
        <div>
          <button style={{ marginRight: 8, background: status === 'accepted' ? '#ffe082' : '#fbc02d', color: '#fff', borderRadius: 6, border: 'none', padding: '0.5rem 1rem', cursor: status ? 'not-allowed' : 'pointer' }} onClick={onAccept} disabled={!!status}>Accept</button>
          <button style={{ background: status === 'rejected' ? '#ffe082' : '#fff', color: '#fbc02d', borderRadius: 6, border: '1px solid #fbc02d', padding: '0.5rem 1rem', cursor: status ? 'not-allowed' : 'pointer' }} onClick={onReject} disabled={!!status}>Reject</button>
        </div>
      </div>
      <button style={{ marginTop: 8, background: 'none', border: 'none', color: '#fbc02d', cursor: 'pointer' }} onClick={onExpand}>
        Lihat Detail
      </button>
      {status === 'accepted' && <div style={{ color: '#388e3c', marginTop: 8 }}><strong>Seller Accepted ✔️</strong></div>}
      {status === 'rejected' && <div style={{ color: '#d32f2f', marginTop: 8 }}><strong>Seller Rejected ✖️</strong></div>}
    </div>
  );
}

function SellerProfileDetail({ seller, onClose }: { seller: typeof sellers[0], onClose: () => void }) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2rem', maxWidth: 600, margin: '2rem auto' }}>
      <h3 style={{ color: '#fbc02d' }}>{seller.businessName} ({seller.industry})</h3>
      <div><strong>Location:</strong> {seller.location}</div>
      <div><strong>Price:</strong> {seller.price}</div>
      <div><strong>Financials:</strong> {seller.financials}</div>
      <div style={{ marginTop: 12 }}><strong>Description:</strong> {seller.description}</div>
      <div><strong>Contact:</strong> {seller.contact}</div>
      <div><strong>References:</strong> {seller.references}</div>
      <div style={{ marginTop: 12 }}>
        <strong>Documents:</strong>
        <ul>
          {seller.documents?.map(doc => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>
      <button style={{ marginTop: 16, background: '#fbc02d', color: '#fff', borderRadius: 8, border: 'none', padding: '0.5rem 1.5rem' }} onClick={onClose}>
        Tutup
      </button>
    </div>
  );
}

export default function SellerProfiles() {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);
  const [statuses, setStatuses] = React.useState<{ [id: number]: string }>({});
  const [notification, setNotification] = React.useState<string | null>(null);
  const expandedSeller = sellers.find(s => s.id === expandedId);

  const handleAccept = (id: number) => {
    setStatuses(s => ({ ...s, [id]: 'accepted' }));
    setNotification('Seller accepted!');
    setTimeout(() => setNotification(null), 2000);
  };
  const handleReject = (id: number) => {
    setStatuses(s => ({ ...s, [id]: 'rejected' }));
    setNotification('Seller rejected!');
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Seller Profiles</h2>
      <p>Browse sellers and accept or reject at a glance.</p>
      {notification && (
        <div style={{ background: '#e0f7fa', color: '#fbc02d', borderRadius: 8, padding: '0.5rem 1rem', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          {notification}
        </div>
      )}
      <div style={{ maxWidth: 600, margin: '2rem auto' }}>
        {expandedSeller ? (
          <SellerProfileDetail seller={expandedSeller} onClose={() => setExpandedId(null)} />
        ) : (
          sellers.map(seller => (
            <SellerCard
              key={seller.id}
              seller={seller}
              onExpand={() => setExpandedId(seller.id)}
              onAccept={() => handleAccept(seller.id)}
              onReject={() => handleReject(seller.id)}
              status={statuses[seller.id] || ''}
            />
          ))
        )}
      </div>
    </main>
  );
}