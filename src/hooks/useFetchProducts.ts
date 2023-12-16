import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { useEffectOnce } from 'usehooks-ts';

import ProductsStore from '../stores/ProductsStore';

import { ProductSummary } from '../types';

export default function useFetchProducts(): {
  products: ProductSummary[];
  } {
  const store = container.resolve(ProductsStore);

  const [{ products }] = useStore(store);

  useEffectOnce(() => {
    store.fetchProducts();
  });

  return { products };
}
