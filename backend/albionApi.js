import axios from 'axios';

// Função para buscar preços do item usando a API pública do Albion Data Project
export async function getAlbionItemPrices(itemId) {
  const url = `https://www.albion-online-data.com/api/v2/stats/prices/${itemId}.json`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return [];
  }
}