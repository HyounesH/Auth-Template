import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from '../utils/CustomMaterial.Module';


@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    
    ReactiveFormsModule,
    FlexLayoutModule,
    CustomMaterialModule
  ],
  exports : [
    CustomMaterialModule
  ]
      
    })
export class AuthenticationModule { }
