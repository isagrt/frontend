import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = () => {

  const auth = inject(Auth);
  const router = inject(Router);

  // Verifica se o usuário está autenticado
  if (auth.isAuthenticated()) {
    return true;
  }
  // Se NÃO estiver autenticado:
  // cria um redirecionamento para /login
  return router.createUrlTree(['/login']);
};
