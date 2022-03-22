import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


import { EditprofileRoutingModule } from './editprofile-routing.module';
import { EditprofileComponent } from './editprofile.component';


@NgModule({
  declarations: [
    EditprofileComponent
  ],
  imports: [
    CommonModule,
    EditprofileRoutingModule,
    FormsModule,
  ]
})
export class EditprofileModule {
  
 }
