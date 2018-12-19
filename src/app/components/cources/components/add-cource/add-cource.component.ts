import { Component, OnInit } from '@angular/core';
import { CourceService } from "../../../../services";

@Component({
  selector: 'app-add-cource',
  templateUrl: './add-cource.component.html',
  styleUrls: ['./add-cource.component.css']
})
export class AddCourceComponent implements OnInit {
  duration: number = 0;
  title: string = '';
  description: string = '';
  date: string = '';

  constructor(
    private courceService: CourceService,
  ) {}

  ngOnInit() {
  }

  addNewCource() {
    const cource = {
      'id': String(Math.random()),
      'title': this.title,
      'creation': new Date(this.date),
      'duration': String(this.duration),
      'description': this.description,
      'topRated': true
    };

    this.courceService.addCource(cource)
  }
}
