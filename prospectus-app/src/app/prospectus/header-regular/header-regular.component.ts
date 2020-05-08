import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-regular',
  templateUrl: './header-regular.component.html',
  styleUrls: ['./header-regular.component.scss'],
})
export class HeaderRegularComponent implements OnInit {

  @Input("title") title: string = "";

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {}
  
  /**
   * Navigates to the back link. 
   */
    public navigate(): void {
    this.navCtrl.back();
  }

}
