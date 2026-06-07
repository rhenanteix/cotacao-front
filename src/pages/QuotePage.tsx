    import { useState } from "react";
    import { api } from "../services/api";
    import type { QuoteForm, Traveller } from "../types/Quotes";
    import { useQuoteStore } from "../store/quoteStore";


    export function QuotePage() {
        const { result, setResult } = useQuoteStore();


        const [form, setForm] = useState<QuoteForm>({
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


 const removeTraveller = (
  index: number
) => {

  const updated =
    form.viajantes.filter(
      (_, i) => i !== index
    );

  setForm({
    ...form,
    viajantes: updated,
  });
};



    const updateTraveller = (
        index: number,
        field: keyof Traveller,
        value: string | string[]
    ) => {
        const updated = [...form.viajantes];
        updated[index] = {
            ...updated[index],
            [field]: value,
        };

        setForm({...form, viajantes: updated})
    }

const handleSubmit = async () => {
  try {
    console.log("FORM", form);

    const response = await api.post("/quotes", form);

    console.log("SUCCESS", response.data);

    setResult(response.data);
  } catch (error: any) {
    console.error("ERRO COMPLETO", error);

    if (error.response) {
      console.error("STATUS", error.response.status);
      console.error("DATA", error.response.data);

      alert(JSON.stringify(error.response.data, null, 2));
    }
  }
};

        return(
            <div>
        <h1>Cotação Seguro Viagem</h1>

        <div>
    <label>Destino</label>

    <select
        value={form.destino}
        onChange={(e) =>
        setForm({
            ...form,
            destino: e.target.value,
        })
        }
    >
        <option value="NACIONAL">
        Nacional
        </option>

        <option value="AMERICAS">
        Américas
        </option>

        <option value="EUROPA">
        Europa
        </option>
    </select>
    </div>
    <div>
  <label>Data início</label>

  <input
    type="date"
    value={form.data_inicio}
    onChange={(e) =>
      setForm({
        ...form,
        data_inicio: e.target.value,
      })
    }
  />
</div>
<div>
  <label>Data fim</label>

  <input
    type="date"
    value={form.data_fim}
    onChange={(e) =>
      setForm({
        ...form,
        data_fim: e.target.value,
      })
    }
  />
</div>

        <button onClick={addTraveller}>Adicionar Viajante</button>
        {form.viajantes.map((traveller, index) => (
        <div key={index}>
        <input
  placeholder="Nome"

  value={traveller.nome}

  onChange={(e) =>
    updateTraveller(
      index,
      "nome",
      e.target.value
    )
  }
/>

        <input
            type="date"
            value={traveller.data_nascimento}
            onChange={(e) => 
                updateTraveller(
                    index,
                    "data_nascimento",
                    e.target.value
                )
            }
        />
        <label>
  <input
    type="checkbox"

    checked={
      traveller.adicionais.includes(
        "BAGAGEM"
      )
    }

    onChange={(e) => {

      let addons = [
        ...traveller.adicionais,
      ];

      if (e.target.checked) {
        addons.push("BAGAGEM");
      } else {
        addons = addons.filter(
          (item) =>
            item !== "BAGAGEM"
        );
      }

      updateTraveller(
        index,
        "adicionais",
        addons
      );
    }}

  />

  Bagagem
</label>

<label>
  <input
    type="checkbox"

    checked={
      traveller.adicionais.includes(
        "ESPORTES_AVENTURA"
      )
    }

    onChange={(e) => {

      let addons = [
        ...traveller.adicionais,
      ];

      if (e.target.checked) {
        addons.push(
          "ESPORTES_AVENTURA"
        );
      } else {
        addons = addons.filter(
          (item) =>
            item !==
            "ESPORTES_AVENTURA"
        );
      }

      updateTraveller(
        index,
        "adicionais",
        addons
      );
    }}
  />

  Esportes de aventura
</label>

<button
  type="button"
  onClick={() => removeTraveller(index)}
  style={{
    marginLeft: "10px",
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  }}
>
  Remover Viajante
</button>

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