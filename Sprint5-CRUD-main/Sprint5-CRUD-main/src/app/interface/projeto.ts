export interface Projeto {
  projeto_id: number;
  projeto_descricao: string;
  projeto_data_inicio?: Date;
  projeto_data_fim?: Date;
  projeto_orcamento: number;
  projeto_status?: number;
  empresa_id: number;

}
