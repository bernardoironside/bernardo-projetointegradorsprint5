
import { Component, inject } from '@angular/core';
import { TableProjetosComponentService } from '../service/table-projeto.service';

@Component({
  selector: 'app-table-projetos',
  standalone: true,
  imports: [],
  templateUrl: './table-projetos.component.html',
  styleUrl: './table-projetos.component.css'
})
export class TableProjetosComponent {
  mailPrefix: string = 'bonnie';
    emailDomain: string = 'gmail.com';

    getEmail(): string {
        return `${this.mailPrefix}@${this.emailDomain}`;
    }

  constructor(){}

  title = 'table-projetos';

  tableProjetoResponse!: any;
  private TableProjetosComponentService = inject(TableProjetosComponentService);
  items: any;


  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      import('flowbite').then(module => {
        module.initFlowbite();
      }).catch(err => {
        console.error('Erro ao inicializar o Flowbite:', err);
      });
    }

    this.getTableProjetosComponent();
  }

  getTableProjetosComponent(): void {
    this.TableProjetosComponentService.getTableProjetosComponent().subscribe({
      next: (response) => {
        response && (this.tableProjetoResponse = response);
        console.log(this.tableProjetoResponse);
      },
      error: (error) => console.log(error),
    });
  }


}
