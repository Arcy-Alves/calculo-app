interface CostProps {
  valorProdutoBase: number;
  rendimentoLitros: number;
}

export function calculateCost({
  valorProdutoBase,
  rendimentoLitros,
}: CostProps): number {
  const custoPorLitro = valorProdutoBase / rendimentoLitros;

  return custoPorLitro;
}
