import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class OrderItemComponent implements OnInit {
  @Input() order!: {
    id: number,
    name: string,
    status: boolean,
    statusText: string,
    leftTime: string
  };
  constructor() { }

  ngOnInit() {}

}
