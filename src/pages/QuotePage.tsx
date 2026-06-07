import { useState } from "react";
import { api } from "../services/api";
import { useQuoteStore } from "../store/quoteStore";


export function QuotePage() {
    const { result, setResult } = useQuoteStore();


    const [form, setForm] = useState({
        destino: "EUROPA",
    data_inicio: "",
    data_fim: "",
    viajantes: [],
    });


 const addTraveller = () => {
  setForm({
    ...form,
    viajantes: [
      ...form.viajantes,
      {
        nome: "",
        data_nascimento: "",
        adicionais: [],
      },
    ],
  });
};

    const handleSubmit = async (e: React.FormEvent) => {
       const response = await api.post("/quotes", form);
       setResult(response.data);
    };

    return(
        <div>
      <h1>Cotação Seguro Viagem</h1>

      <button onClick={addTraveller}>Adicionar Viajante</button>
      {form.viajantes.map(
  (traveller, index) => (
    <div key={index}>
      <input
        placeholder="Nome"
      />

      <input
        type="date"
      />
    </div>
  )
)}

      <button onClick={handleSubmit}>
        Calcular
      </button>

      {result && (
        <pre>
          {JSON.stringify(
            result,
            null,
            2
          )}
        </pre>
      )}
    </div>
    )
}