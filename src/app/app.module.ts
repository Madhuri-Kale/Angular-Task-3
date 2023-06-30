import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    MessagesModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
