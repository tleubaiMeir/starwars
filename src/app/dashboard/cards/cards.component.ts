import { Component, OnInit } from '@angular/core';
import {TableHttpService} from "../table/table-http.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public jokes: any[] =[
  ]
  constructor(private service: TableHttpService) { }

  ngOnInit(): void {
    this.service.getData().subscribe( (res: any) => {
      console.log(res);
      this.jokes= res.value;
    })
  }

}
