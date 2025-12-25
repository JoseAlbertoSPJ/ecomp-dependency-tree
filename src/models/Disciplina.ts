export interface Disciplina {
  codigo: string;
  nome: string;
  semestreRecomendado: number;
  tipo: 'DO' | 'MO' | 'MI' | 'TCC' | 'ESTAGIO' | 'EXTENSAO';
  cargaHorariaTotal: number;
  cargaHorariaExtensao: number;
  preRequisitos: string[];
  coRequisitos: string[];
}