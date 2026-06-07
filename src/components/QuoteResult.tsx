interface Props {
  result: any;
}

export function QuoteResult({
  result,
}: Props) {
  return (
    <div>
      <h2>Resultado da Cotação</h2>

      <p>
        <strong>
          Dias cobrados:
        </strong>{" "}
        {result.dias_cobrados}
      </p>

      <hr />

      <h3>Viajantes</h3>

      {result.viajantes.map(
        (
          traveller: any,
          index: number
        ) => (
          <div key={index}>
            <p>
              <strong>
                Nome:
              </strong>{" "}
              {traveller.nome}
            </p>

            <p>
              <strong>
                Idade:
              </strong>{" "}
              {traveller.idade}
            </p>

            <p>
              <strong>
                Subtotal:
              </strong>{" "}
              R$
              {traveller.subtotal.toFixed(
                2
              )}
            </p>

            <p>
              <strong>
                Adicionais:
              </strong>{" "}
              {traveller
                .adicionais_aplicados
                ?.length
                ? traveller.adicionais_aplicados.join(
                    ", "
                  )
                : "Nenhum"}
            </p>

            <hr />
          </div>
        )
      )}

      <h3>Avisos</h3>

      {result.avisos.length ===
      0 ? (
        <p>
          Nenhum aviso.
        </p>
      ) : (
        <ul>
          {result.avisos.map(
            (
              aviso: string,
              index: number
            ) => (
              <li key={index}>
                {aviso}
              </li>
            )
          )}
        </ul>
      )}

      <h3>
        Desconto Grupo
      </h3>

      <p>
        {
          result.desconto_grupo_percentual
        }
        %
      </p>

      <h2>
        Total Final: R$
        {result.total_final.toFixed(
          2
        )}
      </h2>
    </div>
  );
}