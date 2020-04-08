import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { UpdateComponent } from './update/update.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    InventoryComponent,
    DetailComponent,
    CreateComponent,
    HomeComponent,
    ItemComponent,
    UpdateComponent,
    FormComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'create', component: CreateComponent},
      {path: 'detail/:phoneId', component: DetailComponent},
      {path: 'update/:phoneId', component: UpdateComponent},
      {path: 'delete/:phoneId', component: DeleteComponent},
      {path: 'inventory', component: InventoryComponent},
    ]),
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
