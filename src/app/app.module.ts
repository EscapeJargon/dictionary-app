import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, DictionaryComponent, SearchComponent],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
