import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TableHttpService} from "./table/table-http.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public routes: any[] =[
    {
      path:'table',
      viewValue: 'table'
    },
    {
      path:'cards',
      viewValue: 'cards'
    },
  ]

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  public  navigateTo(path: string): void{
    this.router.navigate(['dashboard', path])
  }
}
