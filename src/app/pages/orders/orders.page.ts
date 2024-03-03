import {Component} from '@angular/core';
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
import {addIcons} from 'ionicons';
import {timeOutline, chevronForwardOutline, arrowUpCircleOutline} from 'ionicons/icons';

import {ExploreContainerComponent} from '../../components/explore-container/explore-container.component';
import {HeaderComponent} from "../../components/header/header.component";
import {OrderItemComponent} from "../../components/orders/order-item/order-item.component";
import * as dayjs from "dayjs";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-orders-page',
    templateUrl: 'orders.page.html',
    styleUrls: ['orders.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonIcon, IonLabel, IonTabButton, IonList, IonItem, IonNote, IonBadge, IonText, RouterLink, IonNavLink, HeaderComponent, OrderItemComponent, NgForOf],
})
export class OrdersPage {
    orders = [
        {
            date: dayjs(), data: [
                {id: 1, name: 'Арыстан', statusText: 'Готов к выдаче (тек)', status: true, leftTime: '04ч 27м'},
                {id: 2, name: 'ТОО "Lamoda"', statusText: 'Можно забирать', status: true, leftTime: '23ч 16м'}]
        },
        {
            date: dayjs().subtract(7, 'd'), data: [
                {id: 3, name: 'Зарина', statusText: 'Завершен', status: false, leftTime: '04ч 27м'},
                {id: 4, name: 'Рустам', statusText: 'Изъято', status: false, leftTime: '04ч 27м'}
            ]
        }
    ]

    constructor() {
        addIcons({timeOutline, chevronForwardOutline, arrowUpCircleOutline})
    }
}
