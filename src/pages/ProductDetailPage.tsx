import { useParams } from 'react-router-dom';

import useFetchProduct from '../hooks/useFetchProduct';
import ProductDetailView from '../components/product-detail/ProductDetailView';

export default function ProductDetailPage() {
  const params = useParams();

  const { loading, error } = useFetchProduct({
    productId: String(params.id),
  });

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error) {
    return (
      <p>Error!</p>
    );
  }

  return (
    <ProductDetailView />
  );
}
