import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExampleComponent() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(res => setMsg(res.data.msg))
      .catch(() => setMsg('Erro ao conectar backend!'));
  }, []);

  return (
    <div>
      <strong>Status do backend:</strong> {msg}
    </div>
  );
}