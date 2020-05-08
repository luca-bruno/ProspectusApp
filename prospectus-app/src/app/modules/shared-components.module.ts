import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRegularComponent } from '../prospectus/header-regular/header-regular.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderRegularComponent
  ],
  entryComponents: [
    HeaderRegularComponent
  ],
  exports: [
    HeaderRegularComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class SharedComponentsModule { }
