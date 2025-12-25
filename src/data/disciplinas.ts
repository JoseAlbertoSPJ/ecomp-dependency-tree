import rawData from './disciplinas.json';
import type { Disciplina } from '../models/Disciplina';


type DisciplinaCSV = {
  Semestre: number;
  Código: string;
  Disciplina: string;
  Natureza: string;
  cargaHorariaTotal: number;
  cargaHorariaExtensao: number;
  preRequisitos: string | null;
  coRequisitos: string | null;
};

export const disciplinas: Disciplina[] = (rawData as DisciplinaCSV[]).map(
  (d) => ({
    codigo: d.Código,
    nome: d.Disciplina,
    semestreRecomendado: d.Semestre,
    tipo: d.Natureza as Disciplina['tipo'],
    cargaHorariaTotal: d.cargaHorariaTotal,
    cargaHorariaExtensao: d.cargaHorariaExtensao,
    preRequisitos: d.preRequisitos
      ? d.preRequisitos.split(';')
      : [],
    coRequisitos: d.coRequisitos
      ? d.coRequisitos.split(';')
      : []
  })
);
