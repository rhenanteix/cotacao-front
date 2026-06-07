import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

export function QuoteDetails() {
    const { id } = useParams();

    const [quote, setQuote] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadQuote();
    }, []);

    const loadQuote = async () => {
        try {
            const response = await api.get(
                `/quotes/${id}`
            );

            setQuote(response.data);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!quote) {
        return <p>Cotação não encontrada.</p>;
    }

    return (
        <div>
            <h1>Cotação #{quote.id}</h1>

            <p>
                <strong>Total:</strong> R${" "}
                {Number(quote.total_final).toFixed(2)}
            </p>

            <h2>Pedido enviado</h2>

            <pre>
                {JSON.stringify(
                    quote.request_payload,
                    null,
                    2
                )}
            </pre>

            <h2>Resultado calculado</h2>

            <pre>
                {JSON.stringify(
                    quote.response_payload,
                    null,
                    2
                )}
            </pre>
        </div>
    );
}