import { Component, OnInit } from '@angular/core';
import {TableHttpService} from "./table-http.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cost_in_credits', 'created', 'max_atmosphering_speed', 'hyperdrive_rating'];
  dataSource = [

  ];

  constructor(private service: TableHttpService) { }

  ngOnInit(): void {
    this.service.getData().subscribe( (res: any) => {
      console.log(res);
      this.dataSource = res.results;
    })
  }

}
