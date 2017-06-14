import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EmployeeService } from './service/employee.service';
import { Employee } from './model/employee-model';
import { Test } from "./model/test-model";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // public maxSize:number = 5;
  // public itemsPerPage:number=5;
  public totalItems: number;
  //不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
  public currentPage: number = 1;
  // public numPages

  // public searchText:string;
  // public searchTextStream:Subject<string> = new Subject<string>();
  public testList: Array<Test>;
  public employeeList: Array<Employee>;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log(params);
      this.loadData(this.currentPage);
    });

    console.log("employee component init->load data");
  }

  public loadData(page: number) {
    // let offset = (this.currentPage-1)*this.itemsPerPage;
    // let end = (this.currentPage)*this.itemsPerPage;

    return this.employeeService.test().subscribe(
      res => {
        //this.totalItems = res;
        //TODO.正式环境中，需要去掉slice
        // this.employeeList = res;
        console.log('res');
        console.log(res);

        this.employeeList = res;
        this.employeeList.forEach(element => {
          element.tooltip = element.address.city +`,`+ element.address.street +`,`+ element.address.zipcode;
        });
      },
      error => { console.log(error) },
      () => { }
    );
  }

}
