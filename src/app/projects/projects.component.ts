import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  display = false;

  project = {
    projectName: 'Project 1',
    projectImage: 'DS-projects.png',
    projectDesc: 'Details of project 1 wow Details of project 1 wow Details of project 1 wow',
    projectLink: 'https://github.com/AnkitS97'
  }

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }
}
