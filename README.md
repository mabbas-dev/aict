# AICT Lab Group Registration System — Fall 2026

**Course:** Applications of Information & Communication Technologies (AICT) - Lab  
**Department:** BS Software Engineering  
**Instructor:** Mis Maira (Lab Instructor)  
**Institution:** Ibadat International University Islamabad (IIUI)  
**Developed by:** CR. M ABBAS  

## Features
- **Individual & Team Registration:** Register as an individual (1 person) or a team (2 to 3 members including team leader).
- **Group Labeling:** Automatically assigns groups as G-01, G-02, G-03, etc.
- **Duplicate Prevention:** Live check and backend validation preventing students from registering in multiple groups.
- **Countdown Timer:** Live countdown to the deadline (13th Oct 2026, 9:00 AM PKT) with auto-locking.
- **Welcome Notice:** Popup reminder with class guidelines and rules.
- **Crown Badge:** Crown indicator on team leaders in group cards.
- **Export Reports:** One-click download of official formatted PDF and MS Word (.docx) project group sheets.
- **Hostinger MySQL & Vercel Ready:** Persistent storage backed by Hostinger MySQL database.
- **Admin Control Panel:** Dedicated password-protected `/admin` dashboard with real-time editing, student search, and group management.

## Local Setup
```bash
npm install
npm start
```
Open `http://localhost:3000` in your browser.
Open `http://localhost:3000/admin` for the admin portal.

## Database Configuration
The application is pre-configured to connect to Hostinger MySQL:
- **Host:** `srv1768.hstgr.io`
- **Database:** `u132832831_aict`
- **Username:** `u132832831_aict`
