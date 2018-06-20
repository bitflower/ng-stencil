# Bootstrap Angular 2+ app inside a StencilJS component

I'm trying to use the [Angular Gridster component](https://github.com/tiberiuzuld/angular-gridster2) inside Stencil.

The problem is that Angular on bootstrap is setup globally on the document trying to "angularize" the whole page including my own Stencil component:

The source is inside `ng-app`. `ng-stencil` was just a test to see how a standard Angular app is structured.