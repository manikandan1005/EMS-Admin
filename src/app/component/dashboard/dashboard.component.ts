import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
icons = [
  { class: 'fa-regular fa-bell text-red-500 w-6 h-6' },
  { class: 'fa-solid fa-gear text-blue-500 w-6 h-6' },
  { class: 'fa-regular fa-envelope text-green-500 w-6 h-6' }
];


  Dashboard=[
    {
      icon:'',
      count:2,
      name:'message'
    },
    {
      icon:'',
      count:2,
      name:'message'
    },{
      icon:'',
      count:2,
      name:'message'
    },{
      icon:'',
      count:2,
      name:'message'
    }
  ]
}
