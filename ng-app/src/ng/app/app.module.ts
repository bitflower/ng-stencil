import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule
  ],
  // providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {

  // SOURCE: https://blog.angularindepth.com/how-to-manually-bootstrap-an-angular-application-9a36ccf86429

  // ngDoBootstrap(app) {
  //   bootstrapRootComponent(app, 'a-comp');
  // }


}

// // app - reference to the running application (ApplicationRef)
// // name - name (selector) of the component to bootstrap
// function bootstrapRootComponent(app, name) {
//   // define the possible bootstrap components 
//   // with their selectors (html host elements)
//   const options = {
//     'a-comp': AppComponent
//   };
//   // obtain reference to the DOM element that shows status
//   // and change the status to `Loaded`
//   const statusElement = document.querySelector('#status');
//   statusElement.textContent = 'Loaded';
//   // create DOM element for the component being bootstrapped
//   // and add it to the DOM
//   const componentElement = document.createElement(name);
//   document.body.appendChild(componentElement);
//   // bootstrap the application with the selected component
//   const component = options[name];
//   app.bootstrap(component);
// }