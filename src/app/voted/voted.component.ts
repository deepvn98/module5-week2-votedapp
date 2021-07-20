import {Component, OnInit} from '@angular/core';
import {Ivoted} from "../ivoted";

@Component({
  selector: 'app-voted',
  templateUrl: './voted.component.html',
  styleUrls: ['./voted.component.css']
})
export class VotedComponent implements OnInit {
  max = 10;
  curentvoted = 0;
  listvoted: Array<Ivoted> = [];


  constructor() {
    this.loadRating();

  }

  ngOnInit(): void {


  }

  loadRating() {

    this.listvoted = Array.from({length: this.max},
      (_, index) => ({
        value: index + 1,
        active: index < this.curentvoted
      }));
  }

  horver(index: number) {
    this.curentvoted = index + 1;
    this.listvoted.forEach((item, idx) => item.active = idx < this.curentvoted);
  }

  select(index: number) {
    this.listvoted.forEach((item, idx) => item.active = idx < index+1);

  }


}
