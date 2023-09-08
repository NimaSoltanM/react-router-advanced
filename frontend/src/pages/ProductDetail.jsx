import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const params = useParams();

  const id = params.productId;

  return (
    <div>
      <h1>جزئیات محصول</h1>
      <p>{id}</p>
    </div>
  );
}
