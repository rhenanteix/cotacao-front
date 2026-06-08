# Instalação do Frontend (React + Vite)

## 1. Clonar o repositório

```bash
git clone https://github.com/rhenanteix/cotacao-front.git

cd cotacao-front
```

## 2. Instalar dependências

```bash
npm install
```

## 3. Configurar a URL da API

Verifique o arquivo:

```txt
src/services/api.ts
```

A configuração deve apontar para o backend local:

```typescript
import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});
```

## 4. Iniciar a aplicação

```bash
npm run dev
```

O frontend ficará disponível em:

```txt
http://localhost:5173
```

## Funcionalidades Disponíveis

### Nova Cotação

Página inicial:

```txt
http://localhost:5173
```

Permite:

* Selecionar destino
* Informar período da viagem
* Adicionar múltiplos viajantes
* Selecionar adicionais
* Calcular cotação

### Histórico de Cotações

```txt
http://localhost:5173/history
```

Permite:

* Visualizar cotações persistidas
* Consultar destino
* Consultar quantidade de viajantes
* Consultar valor final
* Navegar para detalhes

### Detalhes da Cotação

```txt
http://localhost:5173/quotes/:id
```

Permite visualizar:

* Dados enviados para a API
* Resultado completo do cálculo
* Valor final da cotação

```
```
