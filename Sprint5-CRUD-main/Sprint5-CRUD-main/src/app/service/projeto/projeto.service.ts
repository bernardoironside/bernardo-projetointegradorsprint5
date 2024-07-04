import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projeto } from '../../interface/projeto';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  private readonly baseUrl: string;


  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiServer + 'projeto';
  }

  //GET
 // getProjeto(): Observable<any> {
 //   return this.http.get(`http://academico3.rj.senac.br/projeto`, {});
// }

  getProjeto(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    )
  }
  findAll(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    )
  }
  //GETPORID
 // getProjetoPorId(idProjeto: number): Observable<Projeto> {
 //   return this.http
  //    .get<Projeto>('http://academico3.rj.senac.br/projeto/' + idProjeto)
 //     .pipe();
 // }
  getProjetoPorId(id: number): Observable<Projeto> {
    return this.http.get<Projeto>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  findOne(id: number): Observable<Projeto> {
    return this.http.get<Projeto>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError) // Handle potential errors
    );
  }

 //  criarProjeto(projeto: Projeto): Observable<Projeto> {
 //    return this.http
  //     .post<Projeto>(`http://academico3.rj.senac.br/api/projeto`, projeto)
  //     .pipe(catchError(this.handleError));
  // }

   criarProjeto(projeto: Projeto): Observable<Projeto> {
    return this.http.post<Projeto>(this.baseUrl, projeto).pipe(
      catchError(this.handleError)
    );
  }

 // criarProjeto(projeto: Projeto): Observable<Projeto> {
 //   return this.http.post<Projeto>(this.baseUrl, projeto, this.httpOptions).pipe(
 //     catchError(this.handleError)
 //   );
 // }

  //PATCH
  atualizarProjeto(
    dadosProjeto: Partial<Projeto>,
    idProjeto: number
  ): Observable<Projeto> {
    return this.http
      .patch<Projeto>(
        `http://academico3.rj.senac.br/projeto/${idProjeto}`,
        dadosProjeto
      )
      .pipe();
  }

  //DELETE
  removerProjeto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: any): Observable<never> {
    // Use 'never' instead of 'void' for error handling
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente ou da rede. Trate de acordo com a necessidade.
      errorMessage = 'Ocorreu um erro: ' + error.error.message;
    } else {
      // O backend retornou um código de resposta sem sucesso.
      // O corpo da resposta pode conter pistas sobre o que deu errado.
      errorMessage = `O backend retornou o código ${error.status}: ${error.message}`;
    }
    console.error(errorMessage); // Registra o erro no console
    return throwError(errorMessage); // Dispara um novo erro como um observável
  }

}
