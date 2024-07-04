import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { PreencherUsuarioComponent } from './preencher-usuario/preencher-usuario.component';
import { ManagementComponent } from './management/management.component';
import { ProjetosComponent } from './projetos/projetos.component';

export const routes: Routes = [

  {path: 'navbar', component: NavbarComponent },
  {path: 'sidebar', component: SidebarComponent},
  {path: 'breadcumb', component: BreadcumbComponent},
  {path: 'preencher-usuario', component: PreencherUsuarioComponent},
  {path: 'management', component: ManagementComponent},

 // {path: 'table-projetos', component: TableProjetosComponent},
  {path: 'projetos', component:ProjetosComponent},


































];
