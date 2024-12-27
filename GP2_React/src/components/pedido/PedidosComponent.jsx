import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import './PedidosComponent.css'

export function PedidosComponent() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const response = await api.get('/pedidos');
                setPedidos(response.data);
            } catch (error) {
                console.error("Erro ao buscar pedidos:", error);
            }
        };
        fetchPedidos();
    }, []);

    return (
        <div className='box-pedidos'>
            <div className='box-pedidos-title'>
            <h1>Pedidos Realizados</h1>
            </div>
            {pedidos.length > 0 ? (
                pedidos.map((pedido) => (
                    <div className='box-pedidos-list' key={pedido.id}>
                        <h2>Pedido #{pedido.id}</h2>
                        <p>Total: R$ {pedido.valorTotal.toFixed(2)}</p>
                        <p>Itens:</p>
                        <ul>
                            {pedido.itens.map((item, index) => (
                                <li key={index}>
                                    ID do Produto: {item.idProduto}, Quantidade: {item.quantidade}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Nenhum pedido realizado.</p>
            )}
        </div>
    );
}
