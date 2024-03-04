import {Component} from '@angular/core';

import {addIcons} from 'ionicons';
import {timeOutline, chevronForwardOutline, arrowUpCircleOutline} from 'ionicons/icons';

import {HeaderComponent} from "../../components/header/header.component";
import {OrderItemComponent} from "../../components/orders/order-item/order-item.component";
import * as dayjs from "dayjs";
import {NgForOf} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-orders-page',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, OrderItemComponent, NgForOf],
})
export class OrdersPage {
  title = 'Мои посылки'
  headerOpt = {
    isActive: false,
  }

  orders = [
    {
      date: dayjs(), data: [
        {id: 1, name: 'Арыстан', statusText: 'Готов к выдаче (тек)', status: true, leftTime: '04ч 27м'},
        {id: 2, name: 'ТОО "Lamoda"', statusText: 'Можно забирать', status: false, leftTime: '23ч 16м'}
      ]
    },
    {
      date: dayjs().subtract(7, 'd'), data: [
        {id: 3, name: 'Зарина', statusText: 'Изъято', status: false, leftTime: '04ч 27м'},
        {id: 4, name: 'Рустам', statusText: 'Завершен', status: true, leftTime: '04ч 27м'}
      ]
    }
  ]

  constructor() {
    addIcons({timeOutline, chevronForwardOutline, arrowUpCircleOutline})
  }
}
