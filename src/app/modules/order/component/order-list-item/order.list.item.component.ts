import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {arrowUpCircleOutline, arrowDownCircleOutline} from "ionicons/icons";
import {addIcons} from "ionicons";
import {RouterLink} from "@angular/router";
import {IOrder} from "../../../../core/models/interfaces";

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order.list.item.component.html',
  styleUrls: ['./order.list.item.component.scss'],
  imports: [
    IonicModule,
    RouterLink
  ],
  standalone: true
})
export class OrderListItemComponent implements OnInit {
  @Input() order!: IOrder;
  constructor() {
    addIcons({arrowUpCircleOutline, arrowDownCircleOutline})
  }

  ngOnInit() {}
}
