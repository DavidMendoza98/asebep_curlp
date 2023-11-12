import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FeedComponent } from './pages/feed/feed.component';
import { LoginComponent } from './pages/login/login.component';
import { HandleErrorComponent } from './pages/handle-error/handle-error.component';
import { ActividadDetailComponent } from './pages/actividad-detail/actividad-detail.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { AccountComponent } from './pages/account/account.component';
import { MisHorasComponent } from './pages/mis-horas/mis-horas.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingComponent },
  // { path: 'admin', component: DashboardComponent },
  // { path: 'admin/actividad', component: ActividadesComponent , data: { queryParams: ['view'] }},
  // { path: 'admin/estudiante', component: EstudiantesComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'feed', component: FeedComponent },
  // { path: 'account', component: AccountComponent },
  // { path: 'hours', component: MisHorasComponent },
  // { path: 'payments', component: MisHorasComponent },
  // { path: 'actividad_detail', component: ActividadDetailComponent, data: { queryParams: ['id'] }},
  // { path: 'error', component: HandleErrorComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
