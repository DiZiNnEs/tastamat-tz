import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../core/components/explore-container/explore-container.component';

@Component({
    selector: 'app-tastamats-page',
    templateUrl: 'tastamats.page.html',
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class TastamatsPage {
    constructor() { }
}
