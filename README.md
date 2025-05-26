# CompoundExplorer_IshaanGaba_nuvertos

A full-stack web application for browsing and editing chemical compounds using Angular (frontend), Express.js + Sequelize (backend), and MySQL (database).

## Features

- Paginated gallery of chemical compounds
- View compound details (image, name, description)
- Edit compound data
- CSV import functionality
- REST API backend
- Angular Material UI

## Technologies Used

- Frontend: Angular 15+, Angular Material
- Backend: Node.js, Express.js
- ORM: Sequelize
- Database: MySQL
- CSV Parser: csv-parser

## Prerequisites

- Node.js (LTS version)
- MySQL Server installed and running
- Angular CLI (`npm install -g @angular/cli`)
- csv-parser (`npm install csv-parser` in backend)

## Backend Setup

1. Navigate to the backend folder  
   `cd backend`

2. Install dependencies  
   `npm install`

3. Create a MySQL database  
   `CREATE DATABASE compound_db;`

4. Configure DB credentials in `config/config.json`

5. Place your `compound.csv` file inside the `backend` folder

6. Import compound data  
   `node importCompounds.js`

7. Start the backend server  
   `npm run dev`  
   (Runs on: `http://localhost:5000/compounds`)

## Frontend Setup

1. Navigate to the Angular project  
   `cd my-angular-app`

2. Install dependencies  
   `npm install`

3. Install Angular animations  
   `npm install @angular/animations`

4. Start the frontend development server  
   `ng serve`  
   (Runs on: `http://localhost:4200`)

## Usage

- Visit `http://localhost:4200/compounds` to view the compounds gallery.
- Click on a card to view compound details.
- Use the Edit button to update compound information.
- Changes are saved to the MySQL database via the backend API.

## Notes

- Run backend and frontend in separate terminals.
- If you update the CSV file, re-run `node importCompounds.js` to refresh the database.
- To change Angular Material theme, edit `angular.json` under the "styles" section.

