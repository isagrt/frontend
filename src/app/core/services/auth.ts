import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/login-response';
import { LoginRequest } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:5157/auth';

  // Verifica se já existe usuário cadastrado no sistema
  hasUser(): Observable<{ exists: boolean }> {
    // Faz uma requisição GET para /has-user
    return this.http.get<{ exists: boolean }>(`${this.apiUrl}/has-user`);
  }

  // Registra um novo usuário
  register(data: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/register`, data, {
    responseType: 'text' as 'json'
  });
}
  // Faz login do usuário
  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data);
  }

  // Salva o token JWT no localStorage do navegador
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Recupera o token salvo no localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Verifica se o usuário está autenticado (se existe token)
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Faz logout do usuário
  logout(): void {
    // Remove o token do navegador e redireciona para tela de login
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
