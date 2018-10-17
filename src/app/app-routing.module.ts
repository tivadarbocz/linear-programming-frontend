import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {CreatorComponent} from './creator/creator.component';
import {GraphTwoDimensionComponent} from './graph-two-dimension/graph-two-dimension.component';
import {GraphThreeDimensionComponent} from './graph-three-dimension/graph-three-dimension.component';


const routes: Routes = [
  { path: '2d', pathMatch: 'full', component: GraphTwoDimensionComponent},
  { path: '3d', pathMatch: 'full', component: GraphThreeDimensionComponent},
  { path: '**', redirectTo: '2d'}
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


