import productsList from "./products.json" with { type: "json" };

export function getProductSortedByPrice() {
    return [...productsList].sort((a, b) => a.price - b.price);
  }
  
  const sortedProducts = getProductSortedByPrice();
