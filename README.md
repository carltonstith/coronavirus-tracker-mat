# Coronavirus Tracker

A tool used for tracking the 2019-20 Coronavirus (COVID-19) pandemic. The cases are tracked by country.

MEAN Stack CRUD application with a REST API (GET, POST, PUT, DELETE).

The Client/Presentation or UI uses Angular and Angular Material.
The Server/Business Logic uses Node, Express and MongoDB.

## Dependencies
Express
Mongoose
Cors
Body-parser
MongoDB
Angular
Node.js
Angular-Material
Chart.js
ng2-charts
Nodemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Back-End Development server
From root, run `nodemon` for a backend server. Navigate to `localhost:3000/` for the API endpoints.

## Terminal 
Open 3 tabs in your terminal. 

* Tab 1: Use this tab to run Nodemon. From the project root, type `nodemon`
* Tab 2: Use this tab to run mongodb.
** Type `mongo` to start the shell from the folder within your system root folder. Type `cd /` to navigative to your root folder location of MongoDB on your system, for instance).
** `show dbs` : Show databases
** `use coronavirus-tracker` : Use your project database
** `show collections` : Show the database tables
** `db.cases.deleteMany({});`: To drop documents in the Cases collection
* Tab 3: Use this tab to run the Angular application from the client folder. Type `ng serve` for a dev server.

## Front-End Development server
From the client folder, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

All cases from the Dashboard are from `https://covid-193.p.rapidapi.com/statistics`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
