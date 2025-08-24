# DealNest Platform UI Design

## Overview
DealNest is a modern, approachable digital platform connecting business buyers and sellers. Inspired by the Bumble model, sellers initiate contact with buyers. The platform streamlines onboarding, matching, and acquisition workflows, integrating AI-powered tools to reduce friction and maximize deal success.

---

## Navigation Structure
- Home/Login: Role selection (Buyer/Seller)
- Onboarding Buyer: Multi-step questionnaire
- Onboarding Seller: Multi-step questionnaire
- Buyers: Buyer profile cards (accept/reject, expand for details)
- Sellers: Seller profile cards (accept/reject, expand for details)
- Match Workflow: Step-by-step acquisition process, AI document analyzer
- Settings: Account preferences
- Help: FAQ & support

---

## 1. Home / Login
- Centered card with platform logo and name
- Two main buttons: Continue as Buyer, Continue as Seller
- After selection, user is redirected to the relevant onboarding flow

---

## 2. Onboarding Questionnaire
### Buyer Onboarding
- Questions: Business Type, Acquisition Budget, Preferred Industry, Location, Deal Urgency
- Design: Centered card, dark background, progress bar, step indicator, large readable labels and inputs, restart and Back to Home buttons

### Seller Onboarding
- Questions: Business Name, Asking Price, Industry, Location, Key Financials
- Design: Centered card, dark background, progress bar, step indicator, large readable labels and inputs, restart and Back to Home buttons

---

## 3. Buyer Profile Cards
- Card layout with profile icon, business type, industry, location, budget, urgency
- Actions: Accept / Reject (with status indicator)
- Expand for Details: Description, Experience, Contact, References, Documents

---

## 4. Seller Profile Cards
- Card layout with profile icon, business name, industry, location, price, financials
- Actions: Accept / Reject (with status indicator)
- Expand for Details: Description, Contact, References, Documents

---

## 5. Match Workflow
- Steps:
  1. Initial Chat & Introduction
  2. Share Financial Documents
  3. AI-powered Document Analysis (upload, analyze, summary)
  4. Smart Checklist & Milestones
  5. Negotiate Terms
  6. E-signature & Deal Completion
- Design: Large, bold headings, step cards with clear separation, file upload and “Analyze Document” button (demo: static summary), Chat Assistant and Document Upload sections

---

## 6. Navigation Bar
- Top navigation with links to all main sections
- User role indicator (icon + Buyer/Seller) in top right (hidden on homepage)
- Links are only visible after login

---

## 7. Settings & Help
- Settings: Account preferences, notifications, privacy
- Help: FAQ, contact support

---

## Design Language
- Friendly, inviting colors (teal, blue, white, dark backgrounds)
- Rounded corners, soft shadows
- Large, readable fonts
- Consistent icon usage
- Responsive and accessible layout

---

## AI Integration (Demo)
- Financial document analyzer: upload file, click “Analyze Document”, view static summary
- Chat assistant: placeholder for instant help

---

## User Flow
1. User lands on Home/Login, selects Buyer or Seller
2. Completes onboarding questionnaire
3. Browses profiles, accepts/rejects matches
4. Proceeds to Match Workflow for acquisition process
5. Uses AI tools and checklists to complete the deal

---

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open in your browser: [http://localhost:3000](http://localhost:3000)

---

## Notes
- All data is static/dummy for demo
- Accept/Reject and AI features are UI only (no backend)
- Role-based navigation and content visibility

---

## Contributing
Pull requests and feedback are welcome!
# dealnest-platform
