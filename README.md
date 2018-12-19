school-project with Angular CLI- Express - MongoDB
Website regarding students who want to be mentor and students need help. Application responsive ( mobile / Desktop )

NEW FACTIS PROJECT

OS windows10 / Express / NodeJS / Bootstrap
Already setup locally ( Interface ). Navbar / Banner / Cards / Slide from left (Introducing Mentors) / Carousel / Modals ( register Mentors / Students ) / Cards ( social network ) / Price Cards / Contact mail /

setup upload file image for presentation cards (dynamic) setup fields for mentors registration (mongodb and components).
Interface, navbar, carousel, modal, cards, emailer.


----------- Upgrade Angular cli 5.2.0 to Angular 7 ----

First, step 1 : go to your folder and remove node_modules ( do not remove from your Editor VSCode), this allows not to block your editor.

Reinstall NPM :

- npm install npm@latest -g

Following those steps : 

Upgrade Angular dependencies :

- npm install @angular/animations@latest @angular/common@latest @angular/compiler@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest --save

Angular dev dependencies :

- npm install @angular-devkit/build-angular@latest @angular/compiler-cli@latest @angular/cli@latest @angular/language-service@latest --save-dev

Dependencies; Core-js and Zone.js

- npm install core-js@latest zone.js@latest --save

Dev dependencies; Types, codelyzer, karma tools, jasmine, protractor and tslint :

- npm install @types/jasmine@latest @types/node@latest codelyzer@latest karma@latest karma-chrome-launcher@latest karma-cli@latest karma-jasmine@latest karma-jasmine-html-reporter@latest jasmine-core@latest jasmine-spec-reporter@latest protractor@latest tslint@latest --save-dev

The new version 3+ of TypeScript :

- npm install typescript@latest --save-dev

Latest version 6+ of RxJS :

- npm install rxjs@latest rxjs-compat@latest --save

- npm install rxjs-tslint@latest --save-dev

Latest version 4+ of Webpack :

- npm install webpack@latest --save-dev

----------- then -----------
step 2
rename your folder " proxy.config.json " to " proxy.conf.json "
----------- then -------------------
step 3 
change the path in " package.json " the line with " ng serve nproxy.config.json --open " with " ng serve --proxy-config proxy.conf.json -o "

then you can run " yarn dev "
----------- End upgrade angular 5.2.0 to angular 7.1.3 ----
