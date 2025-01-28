import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrl: './cal.component.css'
})
export class CalComponent implements OnInit {
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
  ];
  weeks: any[] = [];
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth();

  ngOnInit() {
      this.generateCalendar(this.year, this.month);
  }

  generateCalendar(year: number, month: number) {
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      let day = 1;
      this.weeks = [];

      for (let i = 0; i < 6; i++) {
          const week = [];
          for (let j = 0; j < 7; j++) {
              if (i === 0 && j < firstDay || day > daysInMonth) {
                  week.push('');
              } else {
                  week.push(day);
                  day++;
              }
          }
          this.weeks.push(week);
      }
  }

  prevMonth() {
      if (this.month === 0) {
          this.month = 11;
          this.year--;
      } else {
          this.month--;
      }
      this.generateCalendar(this.year, this.month);
  }

  nextMonth() {
      if (this.month === 11) {
          this.month = 0;
          this.year++;
      } else {
          this.month++;
      }
      this.generateCalendar(this.year, this.month);
  }
}