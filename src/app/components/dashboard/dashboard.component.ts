import { Component } from '@angular/core';

//Angular Material
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [MatTableModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
