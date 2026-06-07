#Instalar dependências
cd frontend

npm install
Iniciar aplicação
npm run dev

A aplicação ficará disponível em:

http://localhost:5173

Endpoint Principal
Gerar Cotação
POST /api/quotes
Exemplo de Requisição
{
  "destino": "EUROPA",
  "data_inicio": "2026-07-10",
  "data_fim": "2026-07-20",
  "viajantes": [
    {
      "nome": "Ana",
      "data_nascimento": "1990-03-15",
      "adicionais": [
        "BAGAGEM",
        "ESPORTES_AVENTURA"
      ]
    }
  ]
}