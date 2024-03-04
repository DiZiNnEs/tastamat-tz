import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {arrowUpCircleOutline, arrowDownCircleOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class OrderListItemComponent implements OnInit {
  @Input() order!: {
    id: number,
    name: string,
    status: boolean,
    statusText: string,
    leftTime: string
  };
  constructor() {
    addIcons({arrowUpCircleOutline, arrowDownCircleOutline})
  }

  ngOnInit() {}
}
