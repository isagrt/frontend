import { Component, inject } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  private authService = inject(Auth);
  menuOpen = false;

  toggleMenu() : void {
    this.menuOpen = !this.menuOpen;
  }

  logout() : void{
    this.authService.logout();
  }
}
