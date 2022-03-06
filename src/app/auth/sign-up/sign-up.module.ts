import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { AuthModule } from '../auth.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, AuthModule],
})
export class SignUpModule {}
