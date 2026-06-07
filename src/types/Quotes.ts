export interface Traveller {
  nome: string;
  data_nascimento: string;
  adicionais: string[];
}

export interface QuoteForm {
  destino: string;
  data_inicio: string;
  data_fim: string;
  viajantes: Traveller[];
}