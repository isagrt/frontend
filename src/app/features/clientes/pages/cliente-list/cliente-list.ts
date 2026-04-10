import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ClienteService } from '../../../../core/services/cliente';
import { Router } from '@angular/router';
import { Cliente } from '../../../../core/models/cliente';

@Component({
  selector: 'app-cliente-list',
  imports: [],
  templateUrl: './cliente-list.html',
  styleUrl: './cliente-list.css',
})
export class ClienteList {
  private clienteService = inject(ClienteService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);


  clientes: Cliente[] = [];
  loading = true;
}
