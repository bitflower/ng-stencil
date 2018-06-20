import { Component, Prop } from '@stencil/core';

import { enableProdMode } from '@angular/core'; //   NgModuleRef, NgZone, Injector, ApplicationRef 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '../../ng/app/app.module';
import { environment } from '../../ng/environments/environment';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  componentDidLoad(): void {

    // setTimeout(function () {
    if (environment.production) {
      enableProdMode();
    }

    // THIS CAUSES ANGULAR TO BOOTSTRAP GLOBALLY ON THE PAGE. IT TRIES TO READ THE STENCIL COMPONENTS IN THE ROOT.
    // WHAT WE WANT IS TO BOOT ANGULAR IN A SPECIFIC DOM NODE.

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => {
        console.log(err);
      });


    // ANOTHER APPROACH: https://stackoverflow.com/questions/43355848/using-angular-2-components-throughout-a-non-angular-app

    //   let bootstrapComponentFn: (node: HTMLElement) => void;

    //   platformBrowserDynamic().bootstrapModule(AppModule).then((moduleRef: NgModuleRef<AppModule>) => {
    //     const appRef = moduleRef.injector.get(ApplicationRef);
    //     const zone: NgZone = moduleRef.injector.get(NgZone);
    //     const rootComponentFactory = (moduleRef as any).bootstrapFactories[0];>

    //     bootstrapComponentFn = (node) => {
    //       zone.run(() => {
    //         const compRef = rootComponentFactory.create(Injector.NULL, [], node);
    //         appRef.attachView(compRef.hostView);
    //       })
    //     };
    //   });

    //   setTimeout(function () {
    //     let node = document.createElement('app-root');
    //     document.body.appendChild(node);

    //     bootstrapComponentFn(node);
    //   }, 2000);



    // STILL TO TRY: https://stackoverflow.com/questions/39231943/multiple-instances-of-the-same-root-application-in-angular-2


  }

  // Recommended here: https://stackoverflow.com/questions/44228735/bootstrap-angular-app-in-specific-element
  // => placing the app-root "where you want the Angular app to reside"

  render() {
    return (
      <div id="status">
        Hello, World! I'm {this.first} {this.last}

        <app-root></app-root>
      </div>
    );
  }
}
