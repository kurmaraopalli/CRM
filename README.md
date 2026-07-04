# CRM Project

## Overview
This workspace now contains a lightweight CRM starter app that demonstrates a dashboard, contact form, searchable contact list, and a simple sales pipeline view.

## What is included
- A React + Vite front end
- A contact management experience with mock CRM data
- A searchable contact list and kanban-style pipeline
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

## Next improvements
- Connect the app to Firebase or Supabase for real persistence
- Add authentication and protected routes
- Add editing and deletion of contacts
- Add drag-and-drop pipeline updates
