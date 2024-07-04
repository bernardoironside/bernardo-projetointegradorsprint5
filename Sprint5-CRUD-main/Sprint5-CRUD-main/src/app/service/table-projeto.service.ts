
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableProjetosComponent } from '../table-projetos/table-projetos.component';
import { environment } from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class TableProjetosComponentService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiServer + TableProjetosComponent;
   }

  getTableProjetosComponent(): Observable<any> {
    return this.http.get(
      `http://academico3.rj.senac.br/projeto`, {});

  }
  getTableProjetosComponentPorId(id:number):Observable<any>{
    return this.http.get(
      `http://academico3.rj.senac.br/projeto/${id}`, {});

  }

  gravarProjeto(projeto: TableProjetosComponent): Observable<TableProjetosComponent>{
   return this.http.post<TableProjetosComponent>("http://academico3.rj.senac.br/projeto", TableProjetosComponent).pipe(
    );

 // atualizarProjeto(projeto: TableProjetosComponent, projeto_id: number): Observable<Empresa>{
 //   return this.http.put<Empresa>("http://academico3.rj.senac.br/projeto/"+idEmpresa, empresa).pipe(
//    );
 // }
  }
}




