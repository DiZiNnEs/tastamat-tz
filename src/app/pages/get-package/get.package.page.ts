import { Component } from '@angular/core';
import {IonApp, IonContent, IonHeader, IonRouterOutlet, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from "../../components/explore-container/explore-container.component";

@Component({
  selector: 'app-get-package-page',
  templateUrl: 'get.package.page.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, ExploreContainerComponent, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class GetPackagePage {
  constructor() {}
}
