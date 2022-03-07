import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { KeywordGetComponent } from './keyword-get/keyword-get.component';
import { KeywordAddComponent } from './keyword-add/keyword-add.component';
import { KeywordEditComponent } from './keyword-edit/keyword-edit.component';


const routes: Routes = [
 // { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'keywords', component: KeywordGetComponent },
  { path: 'keywords/add',component:KeywordAddComponent},
  { path: 'keywords/edit/:id',component:KeywordEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
