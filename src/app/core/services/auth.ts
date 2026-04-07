import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:5157/auth'

}
