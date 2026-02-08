import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../module/Employee';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  employeeList:Employee[]=[]

  constructor( private http:HttpClient) {}

    // createNewEmployee(obj:Employee):Observable<any[]>{
    //   return this.http.post <any[]>("http://localhost:3000/api/data" ,obj)
    // }
    
    getEmployee(){

      return this.http.get<Employee[]>("http://localhost:3000/api/data");
    }
   
}
