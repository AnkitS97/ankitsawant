import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  display = false;

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }
}
