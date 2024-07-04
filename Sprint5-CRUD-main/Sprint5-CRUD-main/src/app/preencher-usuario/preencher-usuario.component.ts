import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-preencher-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './preencher-usuario.component.html',
  styleUrl: './preencher-usuario.component.css'
})
export class PreencherUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initFlowbite;
  }

}
