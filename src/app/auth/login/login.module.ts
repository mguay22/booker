import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthModule } from '../auth.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthModule],
})
export class LoginModule {}
