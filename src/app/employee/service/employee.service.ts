import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Employee } from '../model/employee-model';

@Injectable()
export class EmployeeService {
  public employeeURL = 'mock-data/employees.json';

  constructor(public http: Http) { }

  public getEmployees(): Observable<any> {
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
}
