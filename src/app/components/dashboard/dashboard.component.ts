import { Component } from '@angular/core';

//Angular Material
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  imports: [MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
