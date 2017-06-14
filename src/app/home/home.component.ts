import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/service/employee.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public result;
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadData();
  }
  public loadData(){
    return this.employeeService.testNginx().subscribe(
      res => {
        this.result = JSON.stringify(res);
      },
      error => { console.log(error) },
      () => { }
    );
  }
}
