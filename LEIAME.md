# Decisões e Premissas

1. Separação da Regra de Negócio

Toda a lógica de precificação foi implementada na classe QuoteCalculatorService.

O controller possui apenas a responsabilidade de:

Receber a requisição
Validar os dados
Chamar o serviço de cálculo
Retornar a resposta

Essa abordagem facilita testes unitários, manutenção e evolução das regras de negócio.

2. Cálculo da Idade

A idade do viajante é calculada considerando a data de início da viagem, conforme especificado no teste.

Exemplo:

Nascimento: 15/07/2008
Início da viagem: 10/07/2026

Idade considerada: 17 anos

A idade atual do viajante não é utilizada nos cálculos.

3. Período Mínimo Cobrado

Foi adotada a regra descrita no desafio:

Mínimo de 5 dias cobrados

Mesmo que a viagem possua duração inferior a 5 dias, a cobrança é realizada considerando 5 dias.

Exemplo:

10/07/2026 → 10/07/2026

Dias reais: 1
Dias cobrados: 5

4. Aplicação dos Add-ons
BAGAGEM

O adicional de bagagem é aplicado individualmente para cada viajante:

R$ 3,00 × dias cobrados

ESPORTES_AVENTURA

O adicional de esportes de aventura acrescenta:

25% sobre o subtotal do viajante

Somente viajantes entre:

18 e 64 anos

são elegíveis.

Quando solicitado para um viajante fora dessa faixa, a cotação continua normalmente e um aviso é retornado na resposta.

5. Desconto de Grupo

O desconto é aplicado apenas após o cálculo de todos os viajantes.

Regras:

1 a 4 viajantes = 0%
5 ou mais viajantes = 10%

A soma dos subtotais é utilizada como base para aplicação do desconto.

6. Arredondamento

Os cálculos intermediários mantêm sua precisão completa.

O arredondamento é realizado apenas no campo:

total_final

utilizando arredondamento convencional (half-up) para duas casas decimais.

Essa decisão segue exatamente a especificação do desafio.

7. Gerenciamento de Estado no Frontend

Foi utilizado Zustand para gerenciamento de estado devido à simplicidade da aplicação e ao baixo overhead em comparação com Redux.

A store centraliza:

Resultado da cotação
Estado de carregamento (loading)

8. Tratamento de Erros

O backend realiza validação de entrada através de Form Requests do Laravel.

O frontend exibe mensagens de erro retornadas pela API para auxiliar o usuário na correção dos dados informados.





Possíveis Evoluções
Persistência de cotações em banco de dados
Histórico de cotações
Docker Compose
Cache de cotações
Autenticação de usuários
Interface responsiva para dispositivos móveis
Internacionalização (i18n)