import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopListItemComponent } from './top-list-component/top-list-item/top-list-item.component';
import { StatCardComponent } from './stat-card-component/stat-card.component';
import { TopListComponent } from './top-list-component/top-list.component';
import { AllOrganizationComponent } from './all-organization/all-organization.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatCardComponent,
    TopListComponent,
    TopListItemComponent,
    AllOrganizationComponent,
    EditFormComponent,
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
