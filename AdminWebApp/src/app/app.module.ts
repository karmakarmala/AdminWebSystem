
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeywordGetComponent } from './keyword-get/keyword-get.component';

import{ KeywordService } from './_services/keyword.service';
import { NavComponent } from './nav/nav.component';
import { KeywordAddComponent } from './keyword-add/keyword-add.component';
import { KeywordEditComponent } from './keyword-edit/keyword-edit.component';
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';
import { PromodocGetComponent } from './promodoc-get/promodoc-get.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    KeywordGetComponent,
    NavComponent,
    KeywordAddComponent,
    KeywordEditComponent,
    KeywordSearchComponent,
    PromodocGetComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    KeywordService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
