import { Component, OnInit } from '@angular/core';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private menuService: MenuService){
    
  }

  ngOnInit(): void {
    this.setMenu();
  }

  setMenu(){
    this.menuService.getMenu().subscribe({next: (data) => {
      console.log('Menu data received:', data);
    },
    error: (error) => {
      console.error('Error fetching menu:', error);
    },
    complete: () => {
      console.log('Menu fetch completed');
    }
  });
    };
  }


