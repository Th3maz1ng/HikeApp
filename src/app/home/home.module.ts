import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { Second2TimePipe } from './second2time.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: HomePage }
    ])
  ],
  declarations: 
  [
  HomePage,
	Second2TimePipe,
  ],
  exports: [
	Second2TimePipe,
  ],
})
export class HomePageModule {}
