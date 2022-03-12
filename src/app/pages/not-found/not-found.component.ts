import { Component, OnInit } from '@angular/core';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  icons = {
    faRobot : faRobot,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
