import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {CreatorComponent} from './creator/creator.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
//  { path: '', component: DashboardComponent }
  //{ path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
 // { path: 'quiz/:id', component: ConcreteQuizComponent, canActivate: [AuthGuard] },
  //{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }


