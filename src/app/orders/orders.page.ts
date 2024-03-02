import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonLabel,
  IonTabButton,
  IonList,
  IonItem,
  IonNote,
  IonBadge,
  IonText
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { timeOutline, chevronForwardOutline, arrowUpCircleOutline } from 'ionicons/icons';

import { ExploreContainerComponent } from '../components/explore-container/explore-container.component';

@Component({
    selector: 'app-orders-page',
    templateUrl: 'orders.page.html',
    styleUrls: ['orders.page.scss'],
    standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonIcon, IonLabel, IonTabButton, IonList, IonItem, IonNote, IonBadge, IonText],
})
export class OrdersPage {
    constructor() {
        addIcons({ timeOutline, chevronForwardOutline, arrowUpCircleOutline })
    }
}
