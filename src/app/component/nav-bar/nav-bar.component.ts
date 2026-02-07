import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  title = "StaHat";
  list = [
    { rout: 'dashboard', name: "Dashboard" },
    { rout: "employee", name: "Employees" },
    { name: "jobs", rout: "job" },
    { name: "Tasks", rout: "task" },
    { name: "Leave management", rout: "leav" }
  ]
}
