import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticatedScheduleGuard: CanActivateFn = (route, state) => {
  const id = sessionStorage.getItem('id');
  const router = inject(Router);

  if (id) {
    return true;
  }
  router.navigate(['']);
  return false;
};
