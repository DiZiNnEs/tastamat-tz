import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../components/explore-container/explore-container.component';

@Component({
    selector: 'app-putpackage-page',
    templateUrl: 'put.package.page.html',
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class PutPackagePage {
    constructor() { }
}