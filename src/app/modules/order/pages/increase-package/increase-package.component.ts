import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {HeaderComponent} from "../../../../core/components/header/header.component";
import {IHeaderOptions} from "../../../../core/models/interfaces";

@Component({
  selector: 'app-increase-package',
  templateUrl: './increase-package.component.html',
  styleUrls: ['./increase-package.component.scss'],
  imports: [IonicModule, HeaderComponent],
  standalone: true
})
export class IncreasePackageComponent  implements OnInit {
  title = 'Продление'
  headerOpt: IHeaderOptions = {
    isActive: true,
    href: '/main/order-single/1'
  }
  constructor() { }

  ngOnInit() {}

}
