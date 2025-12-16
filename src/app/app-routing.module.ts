import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { OrganizationPageComponent } from './pages/organization-page/organization-page.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';

const routes: Routes = [
  {
    path:'',
    component:RegistrationComponent,
  },
  {
    path:'organization',
    component:OrganizationPageComponent,
  },
  {
    path:'sing-in',
    component:SingInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
