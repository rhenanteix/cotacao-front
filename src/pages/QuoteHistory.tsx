import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface Quote {
    id: number;
    total_final: number;
    created_at: string;
    viajantes: number;
    destino: string;
}

export function QuoteHistory() {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    console.log(quotes, 'Rhenan')


    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        try {
            setError("");
            setLoading(true);

            const response = await api.get(`/quotes`);
            setQuotes(response.data);
        } catch (err: any) {
            if (err.response) {
                console.error("STATUS", err.response.status);
                console.error("DATA", err.response.data);
                setError("Falha ao carregar histórico");
            } else {
                setError("Erro de conexão com servidor");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Histórico de Cotações</h1>

            <button onClick={loadHistory} disabled={loading}>
                {loading ? "Atualizando..." : "Atualizar Lista"}
            </button>

            <hr />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div>
                {quotes.length === 0 ? (
                    <p>Nenhuma cotação realizada ainda.</p>
                ) : (
                    quotes.map((q) => (
                        <div
                            key={q.id}
                            style={{
                                border: "1px solid #ddd",
                                padding: "12px",
                                borderRadius: "6px",
                                marginBottom: "12px",
                            }}
                        >
                            <h3>Cotação #{q.id}</h3>

                            <p>
                                <strong>Destino:</strong> {q.destino}
                            </p>

                            <p>
                                <strong>Viajantes:</strong> {q.viajantes}
                            </p>

                            <p>
                                <strong>Total:</strong> R${" "}
                                {Number(q.total_final).toFixed(2)}
                            </p>

                            <p>
                                <strong>Data:</strong>{" "}
                                {new Date(q.created_at).toLocaleString("pt-BR")}
                            </p>

                            <button
                                onClick={() =>
                                    navigate(`/quotes/${q.id}`)
                                }
                            >
                                Ver detalhes
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
