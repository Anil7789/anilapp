import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  todaydate;
  constructor(private myService: EmpService) { }

  ngOnInit() {
    this.todaydate = this.myService.showTodayDate();
  }

}
