import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestritoComponent } from '../restrito/restrito.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { GuardGuard } from '../guard.guard';

const routes: Routes = [
  {
    path: 'restrito',
    component: RestritoComponent,
    children: [
      {
        path: 'listar',
        component: ListaProdutoComponent,
        canActivate: [GuardGuard],
      },
      {
        path: 'cadastro',
        component: CadastroProdutoComponent,
        canActivate: [GuardGuard],
      },
      {
        path: 'editar/:id',
        component: AtualizaProdutoComponent,
        canActivate: [GuardGuard],
      },
    ],
  },

  { path: '', redirectTo: '/restrito/listar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RestritoRoutingModule {}
