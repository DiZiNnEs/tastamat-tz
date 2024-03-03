import { Component } from '@angular/core';
import {
  IonApp,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRouterOutlet,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from "../../components/explore-container/explore-container.component";
import {basketballOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-get-package-page',
  templateUrl: 'get.package.page.html',
  styleUrls: ['get.package.page.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet, ExploreContainerComponent, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonText, IonList, IonItem, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonImg, IonLabel, IonInput, IonButton, IonBackButton, IonButtons],
})
export class GetPackagePage {
  constructor() {
    addIcons({basketballOutline})
  }
}
