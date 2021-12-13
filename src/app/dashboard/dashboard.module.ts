import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {TableComponent} from "./table/table.component";
import { CardsComponent } from './cards/cards.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'cards',
        component: CardsComponent,
      },
    ]
  }
]

@NgModule({
  declarations: [
    CardsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
