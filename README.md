# Ekart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

Git Commands:
============-------------------------------------------------------------------
…or create a new repository on the command line
 echo "# temp" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/rajuch61/temp.git
git push -u origin master
…or push an existing repository from the command line
 git remote add origin https://github.com/rajuch61/temp.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

My comments:
========================================================================================================
.LOG

11:21 AM 9/3/2019
=================
To install angular  - npm install @angular/cli -g (g- globally)
Create Angular APP  - ng new App-Name
Serve angular APP   - ng serve --open
To create component - ng g c componentName
To create Service   - ng g c serviceName

To install bootsrap - 
	npm i bootstrap --save
	npm i --save @ng-bootstrap/ng-bootstrap



To set up a npm package - npm init -yes
To install Express      - npm i express
To install body-parser  - npm i body-parser --save
To insatll mongoose     - npm i mongoose --save
To install nodemon      - npm i nodemon -g

5:51 PM 9/5/2019
================
To install firebase tools
  --> npm i g firebase-tools
	--> firebase login
	--> firebase init (Note execute these commands in project folder)
	--> select one option from options (Database, Functions, Hosting)
	--> select project, then it will add two file "firebase.json", ".firebaserc"
	--> open .json file and set basic settings 
        {
          "hosting": {
            "public": "dist"
          }
        }
    --> ng build --prod
    --> firebase deploy
