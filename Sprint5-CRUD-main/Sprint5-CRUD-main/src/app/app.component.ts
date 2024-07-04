import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcumbComponent } from "./breadcumb/breadcumb.component";
import { PreencherUsuarioComponent } from "./preencher-usuario/preencher-usuario.component";
import { ManagementComponent } from "./management/management.component";

import { TableProjetosComponent } from "./table-projetos/table-projetos.component";
import { initFlowbite } from 'flowbite';
import { isPlatformBrowser } from '@angular/common';
import { ProjetosComponent } from './projetos/projetos.component';
import { ReactiveFormsModule } from '@angular/forms';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    template: `<div></div>`,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ReactiveFormsModule, NavbarComponent, SidebarComponent, BreadcumbComponent, PreencherUsuarioComponent, ManagementComponent, ProjetosComponent, TableProjetosComponent]
})
export class AppComponent implements OnInit{
  title = 'GerenciarProjetosSuperADM';
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId))
    initFlowbite();
  }
}
