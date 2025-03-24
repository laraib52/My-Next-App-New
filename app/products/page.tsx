import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export default function ProductList() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'], // Ensure queryKey is set
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {products?.map((product: { id: number; title: string }) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
  );
}
