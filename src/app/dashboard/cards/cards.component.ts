import { Component, OnInit } from '@angular/core';
import {TableHttpService} from "../table/table-http.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public ships: any[] =[
  //MGLT: "60"
    // cargo_capacity: "3000000"
    // consumables: "1 year"
    // cost_in_credits: "3500000"
    // created: "2014-12-10T14:20:33.369000Z"
    // crew: "30-165"
    // edited: "2014-12-20T21:23:49.867000Z"
    // films: (3) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
    // hyperdrive_rating: "2.0"
    // length: "150"
    // manufacturer: "Corellian Engineering Corporation"
    // max_atmosphering_speed: "950"
    // model: "CR90 corvette"
    // name: "CR90 corvette"
    // passengers: "600"
    // pilots: []
    // starship_class: "corvette"
    // url: "https://swapi.dev/api/starship
  ]
  constructor(private service: TableHttpService) { }

  ngOnInit(): void {
    this.service.getData().subscribe( (res: any) => {
      console.log(res);
      this.ships= res.results;
    })
  }

}
