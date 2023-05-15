import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './pages/login/login.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ActividadDetailComponent } from './pages/actividad-detail/actividad-detail.component';
import { MisHorasComponent } from './pages/mis-horas/mis-horas.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { ReclamosComponent } from './pages/reclamos/reclamos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './reusable_components/header/header.component';
import { ActividadFilterPipe } from './pipes/actividad-filter.pipe';
import { HandleErrorComponent } from './pages/handle-error/handle-error.component';
import { LandingComponent } from './pages/landing/landing.component';
import { EnviarBtnComponent } from './reusable_components/enviar-btn/enviar-btn.component';
import { AccountComponent } from './pages/account/account.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    LoginComponent,
    FeedComponent,
    ActividadDetailComponent,
    MisHorasComponent,
    PagosComponent,
    ActividadesComponent,
    EstudiantesComponent,
    ReclamosComponent,
    DashboardComponent,
    NotFoundComponent,
    HeaderComponent,
    ActividadFilterPipe,
    HandleErrorComponent,
    LandingComponent,
    EnviarBtnComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NzInputModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzPaginationModule,
    NzCardModule,
    NzUploadModule,
    NzIconModule,
    NzDatePickerModule,
    NzTimePickerModule,

  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
