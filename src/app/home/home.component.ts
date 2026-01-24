import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title="StaHat";
  list=["Message","jobs","Employes","Leave managament"]
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
    }
  ]

}
