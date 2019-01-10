import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './components/modal/modal.component';

import { AuthService } from "./services/auth/auth.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService
  ],
  declarations: [ModalComponent]
})
export class SharedModule { }
