import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Material Components

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [DashboardComponent, RouterOutlet],
})
export class AppComponent {
  title = 'TrackItAll';
}
