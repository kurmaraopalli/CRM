# Blueprint: Custom CRM Application

## 1. Project Overview
A lightweight, modern Customer Relationship Management (CRM) application designed for small businesses to track leads, manage sales funnels, and organize client communication history.

## 2. Core Feature Requirements

### A. Authentication & Access
* Secure user sign-up, login, and logout.
* Password reset functionality.
* Protected dashboard routes (accessible only to logged-in users).

### B. Lead & Contact Management
* **Fields:** Name, Company, Email, Phone, Deal Value, Status, Assigned Rep, Notes.
* **Actions:** Add, edit, view, delete (CRUD) contacts.
* **Search:** Live filter search bar to find contacts by name, email, or company.

### C. Visual Kanban Sales Pipeline
* Dynamic columns representing deal stages:
  1. Lead / Prospect
  2. Contacted / Qualified
  3. Proposal Sent
  4. Negotiation
  5. Closed Won
  6. Closed Lost
* Ability to update a contact's stage dynamically.

### D. Activity & History Log
* A timeline view inside each contact's profile page.
* Log interactions manually (e.g., "Sent introductory email", "Conducted discovery call").

---

## 3. Technical Stack (Proposed)

* **Frontend:** React.js (or Next.js) built with Tailwind CSS for clean UI.
* **State Management:** React Context API or simple custom hooks.
* **Backend & Database:** Firebase (Authentication + Firestore Database) for live real-time synchronization.
* **Hosting Integration:** Ready for Vercel deployment and GitHub tracking.

---

## 4. Initial Antigravity Implementation Instructions

1. Scaffold a clean, multi-file workspace folder structure.
2. Initialize structural layout using standard UI principles (Sidebar Navigation + Main Content Area).
3. Create mock data profiles to verify UI states before database binding.
4. Implement clean error boundaries on all interactive forms.
