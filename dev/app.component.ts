import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { DialogService }  from './dialog.service';
import { HeroService }    from './heroes/hero.service';

@Component({
  selector: 'my-app',
  templateUrl : '../dev/app.component.html',
  providers:  [
    HeroService,
    DialogService
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/