import {Component, OnDestroy, OnInit,} from "@angular/core";
import {IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {HeaderComponent} from "../../components/header/header.component";
import {IonicModule} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {IHeaderOptions} from "../../core/models/interfaces";



@Component({
  selector: 'app-order-page',
  templateUrl: 'order.page.html',
  styleUrls: ['order.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    HeaderComponent,
    IonicModule
  ],
  standalone: true
})
export class OrderPage implements OnInit, OnDestroy{
  id = 0;
  private sub: any;

  title = 'Мои посылки'
  headerOpt: IHeaderOptions = {
    isActive: true,
    href: '/main/orders'
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => this.id = +params['id'])
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
