import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Auth } from '../../../../core/services/auth';


@Component({
  selector: 'app-access-denied',
  imports: [],
  templateUrl: './access-denied.html',
  styleUrl: './access-denied.css',
})
export class AccessDenied {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private auth = inject(Auth);

  voltar(): void {
  if (!this.auth.isAuthenticated()) { // se nao ta autenticado volta pro login
    this.router.navigate(['/login']);
    return;
  }

  if (history.length > 1) { // se esta autenticado, volta pra pagiuna anterior
    this.location.back();
  } else {
    this.router.navigate(['/home']);
  }
}

}
