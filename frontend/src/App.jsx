import React from 'react';
import ExampleComponent from './components/ExampleComponent';
import PriceChecker from './components/PriceChecker';

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Albion AI Crafting Simulator</h1>
      <p>Bem-vindo! Estrutura inicial pronta.</p>
      <ExampleComponent />
      <PriceChecker />
    </div>
  );
}