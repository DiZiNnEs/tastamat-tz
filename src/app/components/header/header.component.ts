import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonicModule,
    NgIf,
  ],
  standalone: true
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() backOptions!: {
    isActive: boolean,
    href?: string
  }
  constructor() { }

  ngOnInit() {
  }

}
