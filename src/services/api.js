export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endpoint);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query = '') {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endpoint);
  const searchData = await response.json();
  return searchData;
}

export async function getProductById(productId) {
  const endpoint = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(endpoint);
  const product = await response.json();
  return product;
}
