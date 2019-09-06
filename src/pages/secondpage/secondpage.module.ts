import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondpagePage } from './secondpage';

@NgModule({
  declarations: [
    SecondpagePage,
  ],
  imports: [
    IonicPageModule.forChild(SecondpagePage),
  ],
})
export class SecondpagePageModule {}
