export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endpoint);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endpoint);
  const products = await response.json();
  return products;
}
/* Checar separação dos endpoints category ID e query e usar condicionais */

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
