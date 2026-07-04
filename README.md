# CRM Project

## Overview
This workspace now contains a lightweight CRM starter app that demonstrates a dashboard, contact form, searchable contact list, and a simple sales pipeline view.

## Business purpose
This app is suitable for small businesses and service-based companies that need a simple way to manage customer relationships and sales opportunities. It can be used by:
- real estate agencies
- marketing agencies
- IT service companies
- consulting firms
- training providers
- small retail and wholesale businesses

It helps teams track leads, follow up with prospects, manage opportunities, and keep customer information in one place without needing a heavy enterprise CRM system.

## Target Users

### By Role
- **Sales Representatives** – Track leads, manage personal pipeline, log activities, and track deal progress
- **Sales Managers** – Monitor team performance, view pipeline analytics, track win rates, and forecast revenue
- **Business Development Officers** – Manage prospects, identify opportunities, and track lead sources
- **Account Executives** – Manage complex deals, track multiple contacts per company, log all interactions
- **Small Business Owners** – Manage their own sales process, track leads, and maintain customer relationships

### By Use Case
Users of this app typically need to:
- Track leads from first contact to closure
- Log activities (calls, emails, meetings, notes)
- Manage tasks and follow-ups with due dates
- Monitor deal probability and expected closure dates
- View sales pipeline value and analytics
- Filter contacts by status and tags for quick access
- Make informed sales decisions based on win rates and funnel data
- Maintain a centralized database of all customer interactions

### Ideal For
- Sales teams at small-to-medium businesses
- Teams without budget for expensive enterprise CRM systems (Salesforce, HubSpot)
- Businesses transitioning from spreadsheets to CRM
- Remote and distributed sales teams
- Startups and early-stage companies
- Organizations prioritizing simplicity over complexity

## What is included
- A React + Vite front end
- A contact management experience with mock CRM data
- A searchable contact list and kanban-style pipeline
- Browser-based local storage for free-tier persistence
- Automated tests with Vitest

## Local development
1. Install dependencies:
   - npm install
2. Start the local dev server:
   - npm run dev
3. Run tests:
   - npm test
4. Build for production:
   - npm run build

## GitHub deployment
This project is set up for GitHub Pages deployment through GitHub Actions.

### Steps
1. Push the repository to GitHub.
2. In GitHub, open the repository Settings > Pages.
3. Set the source to GitHub Actions.
4. Commit and push the workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
5. The workflow will build and publish the site automatically.

> If the repository name is not CRM, update the base path in [vite.config.js](vite.config.js) to match your repository name.

## Architectural design
The current app follows a simple client-side architecture:

- Frontend: React with Vite for fast development and build performance
- UI layout: sidebar navigation, dashboard summary cards, contact form, searchable contact list, and sales pipeline columns
- State management: React component state with browser localStorage for free-tier persistence
- Data flow: user actions update local state and are saved in the browser for future visits
- Testing: Vitest with React Testing Library for component-level validation
- Deployment: GitHub Pages via GitHub Actions for free hosting

### Architecture overview
1. User opens the app in a browser.
2. The React UI renders the CRM dashboard and pipeline view.
3. User adds or searches contacts through the form and list views.
4. Data is stored in browser localStorage so no backend service is required.
5. The app can be built and deployed as a static site.

## Next improvements
- Connect the app to Firebase or Supabase for real persistence
- Add authentication and protected routes
- Add editing and deletion of contacts
- Add drag-and-drop pipeline updates
