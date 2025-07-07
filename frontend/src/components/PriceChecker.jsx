import React, { useState } from 'react';
import axios from 'axios';

export default function PriceChecker() {
  const [itemId, setItemId] = useState('');
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setPrices([]);
    try {
      const res = await axios.get(`http://localhost:4000/api/prices/${itemId}`);
      setPrices(res.data);
    } catch {
      setPrices([]);
    }
    setLoading(false);
  };

  return (
    <div style={{marginTop: '2rem'}}>
      <h2>Verificar Preço de Item</h2>
      <input
        placeholder="ID do item (ex: T4_CLOTH)"
        value={itemId}
        onChange={e => setItemId(e.target.value)}
        style={{marginRight: 8}}
      />
      <button onClick={handleSearch} disabled={loading || !itemId}>
        {loading ? 'Buscando...' : 'Buscar'}
      </button>
      <ul>
        {prices.map((p, i) => (
          <li key={i}>
            <strong>{p.city || p.quality}</strong>: Compra: {p.buy_price_min} | Venda: {p.sell_price_min}
          </li>
        ))}
      </ul>
    </div>
  );
}