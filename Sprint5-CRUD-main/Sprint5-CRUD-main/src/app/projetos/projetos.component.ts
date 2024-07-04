import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,FormsModule,ReactiveFormsModule,Validators,} from '@angular/forms';
import { ProjetoService } from '../service/projeto/projeto.service';
import { Projeto } from '../interface/projeto';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css',
})
export class ProjetosComponent implements OnInit {
  title = 'projetos';
  mailPrefix = 'bonnie';
  emailDomain = 'gmail.com';
  projetoForm: FormGroup;
  projetoResponse: any;
  buscarControl = new FormControl('');
  projetos: Projeto[] = [];



  constructor(private fb: FormBuilder, private projetoService: ProjetoService) {
    this.projetoForm = this.fb.group({
      projeto_id: new FormControl('', Validators.required),
      projeto_descricao: new FormControl('', Validators.required),
      projeto_orcamento: new FormControl('', Validators.required),
      empresa_id: new FormControl('', Validators.required),
      // Adicione outros campos do seu projeto aqui, se necessário
    });
  }


//-----------------------------------------------------------
//Chamando
  ngOnInit(): void {
    setTimeout(() => {
      initFlowbite();
    });
    this.obterProjetos();
  }
  onSubmit() {
    if (this.projetoForm.valid) {
      this.atualizarProjeto();
      this.criarProjeto();


    }
  }
  //Busca o email
  getEmail(): string {
    return `${this.mailPrefix}@${this.emailDomain}`;
  }
//-----------------------------------------------------------
  //GET
  obterProjetos(): void {
    this.projetoService.getProjeto().subscribe({
      next: (response) => {
        this.projetoResponse = response;
        console.log('Resposta do serviço: ', this.projetoResponse);
      },
      error: (error: any) => {
        console.error('Erro ao obter projetos:', error);
      },
    });
  }
  //GetProjetoPorId
  getProjetoPorId() {
    const projetoId = this.buscarControl.value;
    if (projetoId) {
      this.projetoService
        .getProjetoPorId(+projetoId)
        .subscribe({
          next: (response: Projeto) => {
            console.log('Resposta da busca por ID:', response);

            // Acessando diretamente as propriedades do projeto
            this.projetoForm.patchValue({
              projetoId: response.projeto_id,
              projetoId_descricao: response.projeto_descricao,
            });
          },
          error: (error) => {
            console.error('Erro ao buscar projeto por ID:', error);
          },
        });
    } else {
      console.warn('Por favor, digite um ID válido.');
    }
  }

  //Gravar/Criar Projeto
  criarProjeto() {
    if (this.projetoForm.valid) {
      this.projetoService.criarProjeto(<Projeto>this.projetoForm.value).subscribe({
        next: (response) => {
          console.log('Projeto criado com sucesso:', response);
          alert('Projeto criado com sucesso!');
          this.projetoForm.reset();
          this.obterProjetos();
        },
        error: (error) => {
          console.error('Erro ao criar projeto:', error);
          alert('Erro ao criar projeto. Por favor, tente novamente.');
        }
      });
    } else {
      console.error("Formulário inválido. Verifique os campos.");
    }
  }

  //AtualizarProjeto
  atualizarProjeto() {
    console.log(this.projetoForm.value);

    const idProjetoControl = this.projetoForm.get('projeto_id');
    const descricaoControl = this.projetoForm.get('projeto_descricao');
    const orcamentoControl = this.projetoForm.get('projeto_orcamento');

    if (idProjetoControl && descricaoControl && orcamentoControl) {
      const idProjeto = idProjetoControl.value;
      const novaDescricao = descricaoControl.value;
      const novoOrcamento = orcamentoControl.value;

      const dadosAtualizados: Partial<Projeto> = {
        projeto_descricao: novaDescricao,
        projeto_orcamento: novoOrcamento
      };

      if (idProjeto) {
        this.projetoService
          .atualizarProjeto(dadosAtualizados, idProjeto)
          .subscribe({
            next: (response) => {
              console.log('Projeto atualizado com sucesso:', response);
              // ... (Outras ações, como atualizar a lista de projetos, etc.)
            },
            error: (error) => console.error('Erro ao atualizar projeto:', error)
          });
      } else {
        console.error("ID do projeto não encontrado no formulário.");
      }
    } else {
      console.error("Controles do formulário não encontrados.");
    }
  }
  //DeletarProjeto
  deletarProjeto(IdProjeto: number): void {
    this.projetoService.removerProjeto(IdProjeto).subscribe(() => {
      this.projetos = this.projetos.filter(
        (m) => m.projeto_id !== IdProjeto
      );
    });
  }
}
