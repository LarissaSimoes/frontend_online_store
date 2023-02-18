const CART_PRODUCTS_KEY = 'cart';

/**
 * Função que retorna todos os itens do carrinho salvos no localStorage.
 * @returns {Array} Produtos salvos no carrinho.
 */
export const getCartProducts = () => {
  const cartProducts = localStorage.getItem(CART_PRODUCTS_KEY);
  return cartProducts ? JSON.parse(cartProducts) : [];
};

/**
 * Função que adiciona um produto ao carrinho.
 * @param {Object} product - Produto a ser adicionado.
 */
export const saveProductToCart = (product) => {
  if (!product) throw new Error('Você deve fornecer um produto');

  const cartProducts = getCartProducts();
  const indexProduct = cartProducts.findIndex(
    (cartProduct) => cartProduct.id === product.id,
  );

  if (indexProduct >= 0) {
    cartProducts.splice(indexProduct, 1);
    product.quantity += 1;
  } else product.quantity = 1;

  const newCartProducts = [...cartProducts, product];
  localStorage.setItem(CART_PRODUCTS_KEY, JSON.stringify(newCartProducts));
};

/**
 * Função que remove um produto do carrinho.
 * @param {Object} product - Produto a ser removido.
 */
export const removeProductFromCart = (product) => {
  if (!product) throw new Error('Você deve fornecer um produto');

  const cartProducts = [...getCartProducts()];
  const indexProduct = cartProducts.indexOf(product);
  cartProducts.splice(indexProduct, 1);
  localStorage.setItem(CART_PRODUCTS_KEY, JSON.stringify(cartProducts));
};
