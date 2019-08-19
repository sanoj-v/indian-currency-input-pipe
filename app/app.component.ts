import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lotteryWinnings;
  debts = 1000;
  moneyRemaining;

  ngOnInit() {
     this.moneyRemaining = 50000;
  }
}
