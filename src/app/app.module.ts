import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopListItemComponent } from './components/top-list-component/top-list-item/top-list-item.component';
import { StatCardComponent } from './components/stat-card-component/stat-card.component';
import { TopListComponent } from './components/top-list-component/top-list.component';
import { AllOrganizationComponent } from './components/all-organization/all-organization.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './pages/registration/registration.component';
import { OrganizationPageComponent } from './pages/organization-page/organization-page.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatCardComponent,
    TopListComponent,
    TopListItemComponent,
    AllOrganizationComponent,
    EditFormComponent,
    RegistrationComponent,
    OrganizationPageComponent,
    SingInComponent,
    AddFormComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    NzDividerModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
