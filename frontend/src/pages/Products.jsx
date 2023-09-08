import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const products = [
    { id: 'p-1', title: 'محصول 1' },
    { id: 'p-2', title: 'محصول 2' },
    { id: 'p-3', title: 'محصول 3' },
  ];

  return (
    <>
      <h1>لیست محصولات</h1>

      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
