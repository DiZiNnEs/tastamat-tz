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
  IonText, IonNavLink
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import { addIcons } from 'ionicons';
import { timeOutline, chevronForwardOutline, arrowUpCircleOutline } from 'ionicons/icons';

import { ExploreContainerComponent } from '../../components/explore-container/explore-container.component';
import {GetPackagePage} from "../get-package/get.package.page";

@Component({
    selector: 'app-orders-page',
    templateUrl: 'orders.page.html',
    styleUrls: ['orders.page.scss'],
    standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonIcon, IonLabel, IonTabButton, IonList, IonItem, IonNote, IonBadge, IonText, RouterLink, IonNavLink],
})
export class OrdersPage {
    component = GetPackagePage
    constructor() {
        addIcons({ timeOutline, chevronForwardOutline, arrowUpCircleOutline })
    }
}
