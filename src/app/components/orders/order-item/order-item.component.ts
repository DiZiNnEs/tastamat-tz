import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {OrderListItemComponent} from "../order-list-item/order-list-item.component";

import * as dayjs from "dayjs";
import 'dayjs/locale/ru'

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
  imports: [
    IonicModule,
    NgForOf,
    RouterLink,
    OrderListItemComponent
  ],
  standalone: true
})
export class OrderItemComponent implements OnInit {
  protected readonly dayjs = dayjs;

  @Input() orders!: {
    date: dayjs.Dayjs,
    data: {id: number, name: string, statusText: string, status: boolean, leftTime: string}[]
  }[];
  constructor() { }

  ngOnInit() {}

}
