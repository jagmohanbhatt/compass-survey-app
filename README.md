# Compass Survey App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Take the clone of the project and run `npm install`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project Structure

Compass survey project uses survey-data.json as the source for data. Project uses services to fetch data from the json file. In an ideal world, angular services could be extended to connect to back-end API using HTTP module.

Project also uses angular services for state management. In an enerprise application, Ngrx could be the ideal replacement. In this project, sruvey.services plays a role of single source of truth. It uses SubjectBehaviour to expose its subscription model.

"Survey" is created as an independed module which means, it is lazyily loaded. Module information is loaded when user clicks on a survey menu link.
