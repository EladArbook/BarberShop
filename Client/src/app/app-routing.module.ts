import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AuthComponent } from './Components/auth/auth.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
