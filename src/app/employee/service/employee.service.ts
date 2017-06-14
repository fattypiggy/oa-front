import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Employee } from '../model/employee-model';
import { Test } from "../model/test-model";

@Injectable()
export class EmployeeService {
  public employeeURL = 'mock-data/employees.json';
  public testURL = 'https://jsonplaceholder.typicode.com/posts';
  public usersURL ='https://jsonplaceholder.typicode.com/users';
  public homeURL = 'http://localhost:8080';
  constructor(public http: Http) { }

  public getEmployees(): Observable<Employee[]> {
    let url = this.employeeURL;
    let params = new URLSearchParams();
    // params.set('page',String(page));

    return this.http
      .get(url)
      .map((res: any) => {
        let result = res.json();
        console.log(result);
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  public test():Observable<Employee[]>{
    let usersURL = this.usersURL;
    return this.http.get(usersURL).map((res:any)=>{
      let result = res.json();
      // console.log("res");
      // console.log(res);
      console.log("result:");
      console.log(result);
      return result;
    })
    .catch((error:any)=> Observable.throw(error ||`Server error`));
  }

  public testNginx():Observable<any>{
    let url = this.homeURL+"/hello";
    return this.http.get(url).map((res:any)=>{
      let result = res.json();
      return result;
    })
  }
}
