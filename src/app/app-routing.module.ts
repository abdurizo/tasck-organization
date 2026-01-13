import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { OrganizationPageComponent } from './pages/organization-page/organization-page.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
  {
    path: 'sing-in',
    component: SingInComponent,
  },
  {
    path: 'dashboard',
    component: BasicPageComponent,
    children: [
      {
        path:'',
        redirectTo: 'organization',
        pathMatch: 'full',
      },
      {
        path: 'organization',
        component: OrganizationPageComponent,
      },
      {
        path: 'card',
        component: CardPageComponent,
      },
      {
        path:'card/:id',
         component: CardPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
