import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BookmarksModule } from '../bookmarks/bookmarks.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, BookmarksModule],
})
export class HomeModule {}
