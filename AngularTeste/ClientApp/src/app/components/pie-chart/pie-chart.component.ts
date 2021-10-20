import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels = ['Ghost', 'Dragon', 'Ice', 'Fighting', 'Electric', 'Rock', 'Bug', 'Fire', 'Grass', 'Ground', 'Psychic', 'Flying', 'Normal', 'Water', 'Poison'];
  public pieChartData = [3, 3, 5, 8, 9, 11, 12, 12, 14, 14, 14, 19, 24, 32, 33];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
