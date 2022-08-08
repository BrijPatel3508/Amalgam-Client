import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.scss']
})
export class DeveloperDetailsComponent implements OnInit {

  constructor() { }

  startingDate = "2019-10-01"; //DD/MM/YY
  totalExp;
  description: string = "To get an environment where my knowledge and skill increase with time " +
  "which help to achieve my personal goal and organizational goal."

  ngOnInit(): void {
    this.calculateExp();
  }

  calculateExp() {
    const currentDate = moment();
    const startingDate = moment(this.startingDate);
    const diffYear = currentDate.diff(startingDate, 'years');
    const diffMonths = currentDate.diff(startingDate, 'months');
    const dMonth = diffMonths - (diffYear * 12);
    this.totalExp = `${diffYear} Years, ${dMonth} Months`;
}

}
