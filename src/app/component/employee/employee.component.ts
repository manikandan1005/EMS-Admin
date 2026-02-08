// import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { DataServicesService } from '../../service/data-services.service';


@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})

export class EmployeeComponent implements OnInit {

  // http=inject(HttpClient);
  dataService=inject(DataServicesService)
  tableHeader: string[] = [
    'Employee ID',
    'Name',
    'Role',
    
    'Gender',
    'Email ID',
    'Address',
    'Work Mode','Action'
  ];
  employeeList:any[]=[]
  ngOnInit(): void {
  //     fetch("http://localhost:3000/api/data").then(res=>res.json())
  //     .then(data=>console.log(data))
  //     .catch(err=>console.log(err))
  // }
    this.getData();
    
  }
  getData(){
    this.dataService.getEmployee().subscribe({
      next:data=>this.employeeList=data,
      error:err=>alert(err.message)
    })
  }


  remove=(id:string)=>{
    const userId=id;
    console.log(`remove ${userId}`)
  }
  // console.log(this.employees)
}
